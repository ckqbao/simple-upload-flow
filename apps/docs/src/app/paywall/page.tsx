import { Banner } from '@/components/Banner';
import { Navbar } from '@/components/layout/Navbar';
import { PaymentForm } from './PaymentForm';
import Image from 'next/image';
import ai from '@/assets/img/ai-tag.png';

export function generateMetadata() {
  return {
    title: 'Paywall',
  };
}

export default function PaywallPage() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Banner />
      <div className="flex flex-col flex-1">
        <div className="mt-8 mb-6 px-6 text-4xl/9 font-bold tracking-tight">
          Select a package and
          <br />
          get your <Image className="inline" alt="ai-tag" src={ai} width={43} /> pics
        </div>
        <PaymentForm className="flex-1" />
      </div>
    </div>
  );
}
