import { env } from '$env/dynamic/private';

import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */ export async function POST({ request }) {
	const { contractAddress, network, tokenAmount, coingeckoURI, apiIndex } = await request.json();

	if (!contractAddress) return json(0);
	if (!tokenAmount) return json(0);

	const coingeckoAPIURI = `https://api.coingecko.com/api/v3/simple/price/?ids=${coingeckoURI}&vs_currencies=usd&x_cg_demo_api_key=${env.VITE_ENUMSTRING_CG_API_KEYS.split(', ')[apiIndex]}`;
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
				return json(Number((responseData[coingeckoURI].usd * tokenAmount).toFixed(2)));
			} else {
				return json(0);
			}
		} catch (error: any) {
			console.error('Error fetching token value:', error.message);
			return json(0);
		}
	}
	if (stratURI === geckoterminalAPIURI) {
		try {
			if (response.ok) {
				return json(
					Number(
						Math.round(
							responseData.data.attributes.token_prices[contractAddress.toLowerCase()] * tokenAmount
						).toFixed(2)
					)
				);
			} else {
				return json(0);
			}
		} catch (error: any) {
			console.error('Error fetching token value:', error.message);
			return json(0);
		}
	}
}
