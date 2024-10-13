import Image from 'next/image';
import { RadioGroupItem } from '@repo/ui/components/ui/radio-group';
import { cn } from '@repo/ui/lib/utils';
import check from '@/assets/svg/check.svg';
import { PricingOption } from './types';
import { pricingRankMap } from './helpers';
import { Label } from '@repo/ui/components/ui/label';

export function Pricing({ pricing, selected = false }: { pricing: PricingOption; selected?: boolean }) {
  return (
    <Label
      className={cn('relative bg-pricing cursor-pointer rounded-2xl', { 'bg-primary-gradient p-0.5': selected })}
      htmlFor={pricing.id}
    >
      <div className={cn('px-4 py-6 rounded-2xl', { 'bg-pricing-selected': selected })}>
        <PricingTag rank={pricing.rank} selected={selected} />
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className={cn('h-6 w-6 border-2 border-pricing-border text-white', { 'border-orange-500': selected })}
            value={pricing.id}
            id={pricing.id}
          />
          <PricingLabel label={pricing.label} />
          <PricingPrice price={pricing.price} reducedPrice={pricing.reducedPrice} selected={selected} />
        </div>
        <PricingFeatures className={cn({ 'mt-5': !!pricing.features?.length })} features={pricing.features} />
        <PricingProposals
          className={cn({ 'mt-3': !!pricing.proposals?.length })}
          proposals={pricing.proposals}
          selected={selected}
        />
      </div>
    </Label>
  );
}

function PricingLabel({ label }: { label: string }) {
  return <span className="flex-1 text-xl/6 font-semibold uppercase">{label}</span>;
}

function PricingPrice({
  price,
  reducedPrice,
  selected = false,
}: Pick<PricingOption, 'price' | 'reducedPrice'> & { selected?: boolean }) {
  return (
    <div className="flex items-end space-x-1">
      <div className={cn('text-sm/[14px] font-semibold text-[#76919A] line-through', { 'text-[#BE7B4D]': selected })}>
        ${price}
      </div>
      <div className="text-xl/5 font-bold text-white">${reducedPrice}</div>
    </div>
  );
}

function PricingFeatures({ className, features }: Pick<PricingOption, 'features'> & { className?: string }) {
  return (
    <ul className={cn('flex flex-col space-y-1', className)}>
      {features?.map((feature, idx) => (
        <li key={idx} className="flex items-center space-x-2.5">
          <Image alt="check" src={check} width={20} height={20} />
          <span className="text-base/5 font-medium text-[#F4F7F7]">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingProposals({
  className,
  proposals,
  selected = false,
}: Pick<PricingOption, 'proposals'> & { className?: string; selected?: boolean }) {
  return (
    <div className={className}>
      {proposals?.map((proposal, idx) => (
        <div
          key={idx}
          className={cn('bg-background flex items-start rounded-2xl p-3 gap-2', {
            'bg-pricing-proposal-selected': selected,
          })}
        >
          <Image alt="proposal-img" className="rounded-full w-12 h-12" src={proposal.imageUrl} width={48} height={48} />
          <p>{proposal.content}</p>
        </div>
      ))}
    </div>
  );
}

function PricingTag({ rank, selected = false }: Pick<PricingOption, 'rank'> & { selected?: boolean }) {
  if (!rank) return null;
  return (
    <div
      className={cn(
        'absolute top-0 -translate-y-1/2 right-4 p-2 rounded-lg bg-white text-background text-base/3 font-bold',
        {
          'bg-primary-gradient text-white': selected,
        }
      )}
    >
      {pricingRankMap(rank)}
    </div>
  );
}
