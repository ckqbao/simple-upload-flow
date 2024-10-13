import Image from 'next/image';
import { Logo } from '@/components/layout/Logo';
import { Hero } from './Hero';
import homeBg from '@/assets/img/home-bg.png';
import blurEllipse from '@/assets/svg/blur-ellipse.svg';
import Link from 'next/link';

export function generateMetadata() {
  return {
    title: 'Home',
  };
}

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-end h-full overflow-hidden">
      <Image className="absolute -top-32 -z-20 max-w-xl" alt="home-bg" src={homeBg} />
      <Logo />
      <div className="mt-6 px-5">
        <Hero />
      </div>
      <div className="mt-20 mb-4">
        <Link className="primary-gradient-btn" href="/upload">
          Yes I want this !
        </Link>
      </div>
      <Image className="absolute bottom-0 -z-10 w-full max-w-xl" alt="blur-ellipse" src={blurEllipse} />
    </div>
  );
}
