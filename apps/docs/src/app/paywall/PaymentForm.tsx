'use client';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { RadioGroup } from '@repo/ui/components/ui/radio-group';
import { z } from 'zod';
import { cn } from '@repo/ui/lib/utils';
import circleWavyCheck from '@/assets/svg/circle-wavy-check.svg';
import { fakePricingOptions } from './helpers';
import { Pricing } from './Pricing';

const formSchema = z.object({
  pricing: z.string(),
});

type PaymentFormData = z.infer<typeof formSchema>;

type PaymentFormProps = {
  className?: string;
};

export function PaymentForm({ className }: PaymentFormProps) {
  const options = fakePricingOptions();
  const rhForm = useForm<PaymentFormData>({ defaultValues: { pricing: options[options.length - 1]?.id ?? '' } });

  const onSubmit: SubmitHandler<PaymentFormData> = () => {};

  return (
    <form className={cn('flex flex-col', className)} onSubmit={rhForm.handleSubmit(onSubmit)}>
      <div className="flex-1 px-6">
        <Controller
          control={rhForm.control}
          name="pricing"
          render={({ field }) => (
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-5">
              {options.map((option) => (
                <Pricing key={option.id} pricing={option} selected={field.value === option.id} />
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 py-4 border-t border-[#2E3438]">
        <div className="flex items-center justify-center space-x-1">
          <Image alt="check" src={circleWavyCheck} width={20} height={20} />
          <div className="text-base/5 font-semibold">One-time payment</div>
        </div>
        <button className="primary-gradient-btn" type="submit">
          Continue
        </button>
        <div className="text-[#76919A] text-xs/4 font-semibold">100% satisfaction I 4h turnover I ultra realistic</div>
      </div>
    </form>
  );
}
