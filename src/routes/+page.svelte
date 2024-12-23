<script lang="ts">
	import { onMount } from 'svelte';
	import { type Drops } from '$lib/types';
	import AirdropCard from '../components/cards/AirdropCard.svelte';
	import AggregatedCard from '../components/cards/AggregatedCard.svelte';

	let drops: Drops = [];
	let aggUSDClaimOpen: number = 0;
	let aggUSDClaimNow: number = 0;
	let apiCounter = 0;
	let apiKeys = import.meta.env.VITE_ENUMSTRING_CG_API_KEYS.split(', ');
	let apiLength = apiKeys.length;

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

	// @dev: Loads all of the airdrop.jsons and calculates the current valuation of the airdrop.
	onMount(async () => {
		let files = import.meta.glob('../airdrops/*.json');

		//@dev: regex the number out so the airdrops are sorted in order.
		files = Object.entries(files).sort((a, b) => {
			const A = parseInt(a[0].match(/(\d+)-/)[1], 10);
			const B = parseInt(b[0].match(/(\d+)-/)[1], 10);
			return A - B;
		});
		files = Object.fromEntries(files);

		for (const path in files) {
			const response = await files[path]();
			drops.push(response.default);
		}

		await Promise.all(
			drops.map(async (element) => {
				if (apiCounter >= apiLength) apiCounter = 0;

				const cgResponse = await fetch('/api/GetSimplePrice', {
					method: 'POST',
					body: JSON.stringify({
						contractAddress: element.info.contractAddress,
						network: element.info.network,
						tokenAmount: element.claim.value.airdroppedTokens,
						coingeckoURI: element.socials.coingecko,
						apiIndex: apiCounter
					}),
					headers: {
						'content-type': 'application/json'
					}
				});

				let usdValueNow = await cgResponse.json();

				element.claim.value.usdValueClaimNow = usdValueNow;

				aggUSDClaimOpen += element.claim.value.usdValueClaimOpen;
				aggUSDClaimNow += element.claim.value.usdValueClaimNow;

				apiCounter++;
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
