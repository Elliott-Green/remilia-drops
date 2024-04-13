// should match with GC api
enum chains {
	ethereum = 'ethereum',
	cosmos = 'cosmos'
}

export interface Drops {
	info: {
		name: string;
		symbol: string | null;
		contractAddress: string | null;
		network: chains | null;
		description: string;
		image: string;
	};
	claim: {
		dates: {
			claimDateOpen: Date | null;
			claimDateClose: Date | null;
			claimDuration: string | null; // human readable duration
		};
		value: {
			airdroppedTokens: number | null; // assuming 1 NFT
			airdroppedTokenDecimals: number | null; // 18
			usdValueClaimOpen: string | null; // (1 token high day 1 * usd ) * total tokens
			usdValueClaimNow: string | null; // (1 token current value * usd) * total tokens
		};
		eligibility: {
			isAllocationScaledPerNft: boolean | null; // true: 2 nfts != 2 rewards / false: 2 nfts == 2 rewards
			derivsIncluded: string[] | null; // anyone else included? don't bother calcing their positions for mvp,
			eligibilityURI: string | null;
		};
	};
	socials: {
		website: string | null;
		twitter: string | null;
		discord: string | null;
		telegram: string | null;
		coingecko: string | null;
	};
}
