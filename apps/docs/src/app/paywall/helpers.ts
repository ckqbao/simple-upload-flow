import proposalImageExample from '@/assets/img/proposal-example.png';
import { PricingOption, PricingRank } from './types';

export function fakePricingOptions(): PricingOption[] {
  return [
    {
      id: '0',
      label: '10 Raw AI DATING Photos',
      price: 49,
      reducedPrice: 29,
    },
    {
      id: '1',
      label: '40 Raw AI DATING Photos',
      price: 69,
      reducedPrice: 39,
      rank: PricingRank.MOST_POPULAR,
    },
    {
      id: '2',
      label: '10 CURATED Edited AI Photos',
      price: 500,
      reducedPrice: 249,
      rank: PricingRank.BEST_VALUE,
      features: ['Unlimited Generations', 'Handpicked Photos', 'Manual Editing by Experts'],
      proposals: [
        {
          imageUrl: proposalImageExample.src,
          content: '”Hi! I’m Ben, Dating Expert.\nI will work with you till you get the best results.\nGuaranteed.”',
        },
      ],
    },
  ];
}

export function pricingRankMap(pricingRank: PricingRank) {
  switch (pricingRank) {
    case PricingRank.MOST_POPULAR:
      return 'Most popular';
    case PricingRank.BEST_VALUE:
      return 'Best value !';
    default:
      return null;
  }
}
