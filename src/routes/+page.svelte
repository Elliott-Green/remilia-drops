<script lang="ts">
	import { onMount } from 'svelte';
	import { type Drops } from '$lib/types';
	import AirdropCard from '../components/cards/AirdropCard.svelte';
	import AggregatedCard from '../components/cards/AggregatedCard.svelte';

	let drops: Drops = [];
	let aggUSDClaimOpen: number = 0;
	let aggUSDClaimNow: number = 0;

	const networkAPIMapping = [
		{
			ethereum: {
				coingecko: 'ethereum',
				geckoterminal: 'eth'
			},
			cosmos: {
				coingecko: '',
				geckoterminal: ''
			}
		}
	];

	async function getTokenValue(
		contractAddress,
		network,
		tokenAmount,
		coingeckoURI
	): Promise<number> {
		if (!contractAddress) return 0;
		if (!tokenAmount) return 0;

		const coingeckoAPIURI = `https://api.coingecko.com/api/v3/simple/token_price/${network}?contract_addresses=${contractAddress}&vs_currencies=usd`;
		const geckoterminalAPIURI = `https://api.geckoterminal.com/api/v2/simple/networks/${network === 'ethereum' ? 'eth' : network}/token_price/${contractAddress}`;

		let stratURI = coingeckoURI !== null ? coingeckoAPIURI : geckoterminalAPIURI;
		console.log(`querying ${contractAddress} ${stratURI} ${coingeckoURI}`);
		const response = await fetch(stratURI, {
			headers: {
				'Cache-Control': 'max-age=600'
			}
		});
		const responseData = await response.json();
		if (stratURI === coingeckoAPIURI) {
			try {
				if (response.ok) {
					return Number(
						Math.round(responseData[contractAddress.toLowerCase()].usd * tokenAmount).toFixed(2)
					);
				} else {
					return 0;
				}
			} catch (error: any) {
				console.error('Error fetching token value:', error.message);
				return 0;
			}
		}
		if (stratURI === geckoterminalAPIURI) {
			try {
				if (response.ok) {
					return Number(
						Math.round(
							responseData.data.attributes.token_prices[contractAddress.toLowerCase()] * tokenAmount
						).toFixed(2)
					);
				} else {
					return 0;
				}
			} catch (error: any) {
				console.error('Error fetching token value:', error.message);
				return 0;
			}
		}
	}

	// @dev: Loads all of the airdrop.jsons and calculates the current valuation of the airdrop.
	onMount(async () => {
		const files = import.meta.glob('../airdrops/*.json');

		for (const path in files) {
			const response = await files[path]();
			drops.push(response.default);
		}

		await Promise.all(
			drops.map(async (element) => {
				element.claim.value.usdValueClaimNow = await getTokenValue(
					element.info.contractAddress,
					element.info.network,
					element.claim.value.airdroppedTokens,
					element.socials.coingecko
				);
				aggUSDClaimOpen += element.claim.value.usdValueClaimOpen;
				aggUSDClaimNow += element.claim.value.usdValueClaimNow;
			})
		);

		drops = [...drops]; // triggers reactivity
	});
</script>

<div
	class="grid grid-cols-1 gap-6 px-4 py-3 text-center md:grid-cols-2 md:px-8 md:py-8 lg:grid-cols-3 rounded-xl"
>
	<AggregatedCard {aggUSDClaimOpen} {aggUSDClaimNow} />
	{#each drops as d}
		<AirdropCard thisDrop={d} />
	{/each}
</div>
