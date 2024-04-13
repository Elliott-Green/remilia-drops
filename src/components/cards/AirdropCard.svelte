<script lang="ts">
	export let thisDrop;
</script>

<div class="col-span-1">
	<div class="bg-initial card overflow-hidden">
		<header class="">
			<img src={thisDrop.info.image} class="aspect-[21/9] w-full" alt="Post" />
		</header>
		<section class="px-4 pt-4">
			<div class="grid grid-cols-2">
				<!-- TITLE ICONS -->
				<div class="md:text-md flex items-center justify-start text-2xl font-extrabold">
					{thisDrop.info.name}
				</div>
				<div class="flex items-center justify-end gap-2">
					{#if thisDrop.claim.eligibility.eligibilityURI}
						<a href={thisDrop.claim.eligibility.eligibilityURI} target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6 md:h-8 md:w-8"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
								/>
							</svg>
						</a>
					{/if}
					{#if thisDrop.socials.coingecko}
						<a
							href={'https://www.coingecko.com/en/coins/' + thisDrop.socials.coingecko}
							target="_blank"
						>
							<img
								class="h-6 w-6 md:h-7 md:w-7"
								src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
								alt="CoinGecko Logo"
							/></a
						>
					{/if}
					{#if thisDrop.socials.website}
						<a href={thisDrop.socials.website} target="_blank">
							<img
								class="h-6 w-6 md:h-7 md:w-7"
								src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/globe-icon.png"
								alt="Website Logo"
							/>
						</a>
					{/if}
					{#if thisDrop.socials.twitter}
						<a href={'https://twitter.com/' + thisDrop.socials.twitter} target="_blank">
							<img
								class="h-6 w-6 md:h-8 md:w-8"
								src="https://www.svgrepo.com/show/332182/twitter-circle.svg"
								alt="Twitter Logo"
							/></a
						>
					{/if}
					{#if thisDrop.socials.discord}
						<a
							href={'https://discorthisDrop.com/invite/' + thisDrop.socials.discord}
							target="_blank"
						>
							<img
								class="h-6 w-6 md:h-8 md:w-8"
								src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.png"
								alt="Discord Logo"
							/></a
						>
					{/if}
					{#if thisDrop.socials.telegram}
						<a href={'https://t.me/' + thisDrop.socials.telegram} target="_blank">
							<img
								class="h-6 w-6 md:h-8 md:w-8"
								src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-black-icon.png"
								alt="telegram Logo"
							/></a
						>
					{/if}
				</div>
			</div>
			<!-- END TITLE ICONS -->
			<hr class="my-4" />
			<!-- DESCRIPTION -->
			<div class="col-span-2 text-sm">
				{thisDrop.info.description}
			</div>
			<!-- END DESCRIPTION -->

			<!-- ALERTS -->
			<div class="grid-cols-1 space-y-1 py-3 text-sm">
				{#if !thisDrop.claim.value.usdValueClaimOpen}
					<aside class="alert variant-filled-warning">
						<div class="alert-message">
							<p class=" flex items-center justify-center font-bold">
								Airdrop value unknown or project is not live, check soon™
							</p>
						</div>
					</aside>
				{/if}
				{#if thisDrop.claim.dates.claimDateClose === null}{:else if thisDrop.claim.dates.claimDateClose >= new Date() - 7 * 24 * 60 * 60 * 1000}
					<aside class="alert variant-filled-warning">
						<div class="alert-message">
							<p class=" flex items-center justify-center font-bold">Less than 7 days to claim</p>
						</div>
					</aside>
				{:else if thisDrop.claim.dates.claimDateClose < new Date()}
					<aside class="alert variant-filled-error">
						<div class="alert-message">
							<p class=" flex items-center justify-center font-bold">Airdrop has closed.</p>
						</div>
					</aside>
				{/if}
			</div>
			<!-- END ALERTS -->

			<!-- DATA GRID -->

			<div class="grid grid-cols-2 justify-center">
				{#if thisDrop.claim.value.airdroppedTokens}
					<div class="flex items-center justify-center font-bold">1 Milady : X tokens</div>
					<div class="flex items-center justify-center">
						{thisDrop.claim.value.airdroppedTokens ?? 0}
					</div>
				{/if}
				{#if thisDrop.claim.eligibility.isAllocationScaledPerNft !== null}
					<div class="flex items-center justify-center font-bold">Scaled valuation?</div>

					<div class="flex items-center justify-center">
						{thisDrop.claim.eligibility.isAllocationScaledPerNft}
					</div>
				{/if}

				{#if thisDrop.claim.value.usdValueClaimOpen}
					<div class="flex items-center justify-center font-bold">Launch value</div>
					<div class="flex items-center justify-center">
						${thisDrop.claim.value.usdValueClaimOpen ?? 0}~
					</div>
				{/if}
				{#if thisDrop.claim.value.usdValueClaimNow && thisDrop.claim.value.usdValueClaimNow >= 1}
					<div class="flex items-center justify-center font-bold">Value now</div>
					<div class="flex items-center justify-center">
						${thisDrop.claim.value.usdValueClaimNow}~
					</div>
				{:else}{/if}

				{#if thisDrop.claim.value.usdValueClaimNow >= 1 && thisDrop.claim.value.usdValueClaimOpen >= 1}
					{#if Math.round(((thisDrop.claim.value.usdValueClaimNow - thisDrop.claim.value.usdValueClaimOpen) / thisDrop.claim.value.usdValueClaimOpen) * 100) >= 1}
						<div class="flex items-center justify-center font-bold">Change %</div>
						<div class="text-green-500">
							{Math.round(
								((thisDrop.claim.value.usdValueClaimNow - thisDrop.claim.value.usdValueClaimOpen) /
									thisDrop.claim.value.usdValueClaimOpen) *
									100
							)}%
						</div>
					{:else}
						<div class="flex items-center justify-center font-bold">Change %</div>
						<div class="text-red-500">
							{Math.round(
								((thisDrop.claim.value.usdValueClaimNow - thisDrop.claim.value.usdValueClaimOpen) /
									thisDrop.claim.value.usdValueClaimOpen) *
									100
							)}%
						</div>
					{/if}
				{/if}

				{#if thisDrop.claim.dates.claimDateOpen}
					<div class="flex items-center justify-center font-bold">Airdrop start</div>
					<div class="flex items-center justify-center">
						{new Date(thisDrop.claim.dates.claimDateOpen).toLocaleString(undefined, {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})}~
					</div>
				{/if}
				<div class="flex items-center justify-center font-bold">Airdrop end</div>
				{#if thisDrop.claim.dates.claimDateClose}
					<div class="flex items-center justify-center">
						{new Date(thisDrop.claim.dates.claimDateClose).toLocaleString(undefined, {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})}
					</div>
				{:else}
					<div class="flex items-center justify-center">Unknown</div>
				{/if}
				<div class="flex items-center justify-center font-bold">Duration</div>

				{#if thisDrop.claim.dates.claimDuration}
					<div class="flex items-center justify-center">
						{thisDrop.claim.dates.claimDuration}~
					</div>
				{:else}
					<div class="flex items-center justify-center">Unknown</div>
				{/if}
			</div>
			<!-- END DATA GRID -->
			<hr class="my-4" />
			<!-- DERIVS -->
			<div class="flex items-center justify-center pb-4">
				<div
					class="grid grid-cols-{thisDrop.claim.eligibility.derivsIncluded.length >= 4
						? 3
						: thisDrop.claim.eligibility.derivsIncluded
								.length} w-full gap-x-5 gap-y-2 text-[9px] md:text-[11px]"
				>
					{#each thisDrop.claim.eligibility.derivsIncluded as ddd}
						<div class=" text-md w-full rounded-xl bg-purple-100">{ddd}</div>
					{/each}
				</div>
			</div>
			<!-- END DERIVS -->
		</section>
	</div>
</div>
