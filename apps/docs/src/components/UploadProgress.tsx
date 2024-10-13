import { Progress } from '@repo/ui/components/ui/progress';
import { cn } from '@repo/ui/lib/utils';

type UploadProgressProps = {
  value: number;
};

export function UploadProgress({ value }: UploadProgressProps) {
  return (
    <Progress
      className="h-2 rounded-none bg-bunker-900"
      indicatorClassName={cn('bg-primary-gradient rounded-tr-2xl rounded-br-2xl', { 'rounded-none': value === 100 })}
      value={value}
    />
  );
}
