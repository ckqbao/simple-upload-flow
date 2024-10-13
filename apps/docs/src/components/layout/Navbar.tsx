'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Logo } from '@/components/layout/Logo';

export function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full h-[50px] flex items-center px-6">
      <ChevronLeftIcon className="cursor-pointer" onClick={() => router.push('/home')} width={24} height={24} />
      <div className="flex-1 flex justify-center">
        <Logo className="h-6" />
      </div>
      <Cross2Icon className="cursor-pointer" onClick={() => router.push('/home')} width={24} height={24} />
    </div>
  );
}
