<script lang="ts">
	import { onMount } from 'svelte';
	import { type Drops } from '$lib/types';
	import AirdropCard from '../components/cards/AirdropCard.svelte';
	import AggregatedCard from '../components/cards/AggregatedCard.svelte';

	let drops: Drops = [];
	let aggUSDClaimOpen: number = 0;
	let aggUSDClaimNow: number = 0;

	async function getTokenValue(contractAddress, network, tokenAmount): Promise<number> {
		if (!contractAddress) return 0;
		if (!tokenAmount) return 0;
		const apiUrl = `https://api.coingecko.com/api/v3/simple/token_price/${network}?contract_addresses=${contractAddress}&vs_currencies=usd`;
		try {
			const response = await fetch(apiUrl, {
				headers: {
					'Cache-Control': 'max-age=600'
				}
			});

			const data = await response.json();

			if (response.ok) {
				console.log(data[contractAddress.toLowerCase()].usd * tokenAmount);
				return Math.round(data[contractAddress.toLowerCase()].usd * tokenAmount);
			} else {
				return 0;
			}
		} catch (error: Error) {
			console.error('Error fetching token value:', error.message);
			return 0;
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
					element.claim.value.airdroppedTokens
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
