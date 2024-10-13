import logo from '@/assets/svg/logo.svg';
import { cn } from '@repo/ui/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <a className={cn('flex items-center', className)} href="/" id="site-logo" title="Home" rel="home">
      <Image className="h-full" alt="logo" src={logo} />
    </a>
  );
}
