<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { MetaTags } from 'svelte-meta-tags';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let title = '˚. ✦.˳·˖✶ Remelia Drops ✶ ⋆.✧̣̇˚.';
	let description = `Remelia Drops™ is an open-source initiative to collect data of airdrops
				which target Milady and Remelia assets. Remelia Drops™ hopes to provide
				the reader with an overview of the value created and the ability to
				propose changes to static data. The thesis for the airdrops is that the
				community is compromised of highly influential individuals who will talk
				about the product on Twitter. Milady.`;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header"></svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<MetaTags
	title="{title},"
	titleTemplate={title}
	{description}
	openGraph={{
		url: 'https://www.remiliadrops.com',
		title: title,
		description: description,
		images: [
			{
				url: 'https://images.mirror-media.xyz/publication-images/gowdU3gPX1hh2TjoTxrxL.png',
				width: 1200,
				height: 900,
				alt: description
			}
		],
		siteName: 'remiliadrops.com'
	}}
	twitter={{
		handle: '@cryptonines',
		site: '@remiliadrops',
		cardType: 'summary_large_image',
		title: title,
		description: description,
		image: 'https://images.mirror-media.xyz/publication-images/gowdU3gPX1hh2TjoTxrxL.png',
		imageAlt: description
	}}
/>
