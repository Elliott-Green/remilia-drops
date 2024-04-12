// should match with GC api
enum chains {
	ethereum = 'ethereum'
}

export interface Drops {
	info: {
		name: string;
		symbol: string;
		contractAddress: string;
		network: chains;
		description: string;
		image: string;
	};
	claim: {
		dates: {
			claimDateOpen: Date | null;
			claimDateClose: Date | null;
			claimDuration: string; // human readable duration
		};
		value: {
			airdroppedTokens: number; // assuming 1 NFT
			airdroppedTokenDecimals: number; // 18
			usdValueClaimOpen: string; // (1 token high day 1 * usd ) * total tokens
			usdValueClaimNow: string; // (1 token current value * usd) * total tokens
		};
		eligibility: {
			isAllocationScaledPerNft: boolean; // true: 2 nfts != 2 rewards / false: 2 nfts == 2 rewards
			derivsIncluded: string[]; // anyone else included? don't bother calcing their positions for mvp,
			eligibilityURI: string;
		};
	};
	socials: {
		website: string;
		twitter: string;
		discord: string;
		coingecko: string;
	};
}
