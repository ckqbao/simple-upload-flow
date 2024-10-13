export enum PricingRank {
  MOST_POPULAR = 'MOST_POPULAR',
  BEST_VALUE = 'BEST_VALUE',
}

export type PricingOption = {
  id: string;
  label: string;
  price: number;
  reducedPrice: number;
  rank?: PricingRank;
  features?: string[];
  proposals?: Array<{
    imageUrl: string;
    content: string;
  }>;
};
