import Image from 'next/image';
import processIllustration from '@/assets/img/process-illustration.png';
import ai from '@/assets/img/ai-tag.png';
import { Scanning } from './Scanning';

export function Processing() {
  return (
    <div className="relative h-screen w-full">
      <Scanning className="absolute top-0 z-20" />
      <div className="flex items-center justify-center w-full h-full space-x-2">
        <Image alt="ai-tag" src={ai} width={43} />
        <div className="text-[38px]/10 font-bold tracking-tight uppercase">processing...</div>
      </div>
      <ProcessingBackground />
    </div>
  );
}

function ProcessingBackground() {
  return (
    <div className="absolute top-0 w-full h-full -z-10">
      <div className="w-full h-full bg-gradient-to-t from-transparent from-75% to-red-700 to-80%"></div>
      <div className="absolute top-[20%] z-10 w-full">
        <Image className="w-full opacity-75" alt="process-illustration" src={processIllustration} />
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-45% to-zinc-900"></div>
      </div>
    </div>
  );
}
