import { cn } from '@repo/ui/lib/utils';
import './Scanning.css';

type ScanningProps = { className?: string };

export function Scanning({ className }: ScanningProps) {
  return (
    <div className={cn('scanning w-full h-full', className)}>
      <div className="bar absolute w-full h-2 bg-orange-600 top-1/2">
        <div className="trail absolute bottom-1/2 origin-bottom w-full h-40 bg-gradient-to-t from-orange-600/80 to-orange-800/0"></div>
      </div>
    </div>
  );
}
