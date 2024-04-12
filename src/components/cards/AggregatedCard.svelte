<script lang="ts">
	export let aggUSDClaimOpen;
	export let aggUSDClaimNow;
</script>

<div class="col-span-1">
	<div class="bg-initial card overflow-hidden">
		<header class="">
			<img
				src="https://images.mirror-media.xyz/publication-images/gowdU3gPX1hh2TjoTxrxL.png"
				class="aspect-[21/9] w-full"
				alt="Post"
			/>
		</header>
		<section class="px-4 pt-4">
			<!-- TITLE ICONS -->
			<div class="grid grid-cols-3">
				<div class="col-span-2 flex items-center text-xl font-extrabold">
					Log in and win every single day.
				</div>
				<div class="flex items-center justify-end gap-3">
					<a href="https://twitter.com/cryptonines" target="_blank">
						<img
							class="h-6 w-6 md:h-8 md:w-8"
							src="https://www.svgrepo.com/show/332182/twitter-circle.svg"
							alt="Twitter Logo"
						/>
					</a>
					<a href="https://pro.opensea.io/collection/milady" target="_blank">
						<img
							class="h-6 w-6 md:h-8 md:w-8"
							src="https://moralis.io/wp-content/uploads/2023/11/OpenSea.png"
							alt="Openseas Logo"
						/>
					</a>
					<a href="https://blur.io/collection/milady/bids" target="_blank">
						<img
							class="h-6 w-6 md:h-8 md:w-8"
							src="https://images.prismic.io/uphold/baa6107d-793d-4e5e-887a-8cbe1a79af02_BLUR%402x.png?auto=compress,format"
							alt="Blur Logo"
						/>
					</a>
				</div>
			</div>
			<!-- END TITLE ICONS -->
			<hr class="my-4" />
			<!-- AGG CARD BODY -->
			<div class=" text-sm">
				Remelia Drops™ is an open-source initiative to collect data of airdrops
				which target Milady and Remelia assets. Remelia Drops™ hopes to provide
				the reader with an overview of the value created and the ability to
				propose changes to static data. The thesis for the airdrops is that the
				community is compromised of highly influential individuals who will talk
				about the product on Twitter. Milady.
			</div>
			<!-- END AGG CARD BODY -->
			<!-- DATA GRID-->
			<div class="grid grid-cols-2 justify-center space-y-2">
				<div class="col-span-1 flex items-center justify-center font-bold">
					Summed sold at launch
				</div>
				<div class="col-span-1 flex items-center justify-center">
					${aggUSDClaimOpen}
				</div>
				<div class="col-span-1 flex items-center justify-center font-bold">
					Summed diamond hands
				</div>

				<div class="col-span-1 flex items-center justify-center">
					${aggUSDClaimNow}
				</div>
				<div class="col-span-1 flex items-center justify-center font-bold">
					Change %
				</div>
				<div class="col-span-1 flex items-center justify-center">
					{#if Math.round(((aggUSDClaimNow - aggUSDClaimOpen) / aggUSDClaimOpen) * 100) >= 1}
						<div class="text-green-500">
							{Math.round(
								((aggUSDClaimNow - aggUSDClaimOpen) / aggUSDClaimOpen) * 100
							)}%
						</div>
					{:else}
						<div class="text-red-500">
							{Math.round(
								((aggUSDClaimNow - aggUSDClaimOpen) / aggUSDClaimOpen) * 100
							)}%
						</div>
					{/if}
				</div>
			</div>
			<!-- END DATA GRID-->
			<div class="px-4 py-3 pt-4">
				<div class="flex grid grid-cols-1 justify-center gap-y-2">
					<div
						class="md:text-md variant-outline-tertiary btn col-span-2 w-full text-[13px]"
					>
						Propose new or edited data to this repository
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
