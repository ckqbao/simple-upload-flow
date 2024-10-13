'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import uploadIllustration from '@/assets/img/upload-illustration.png';

import { UploadProgress } from '@/components/UploadProgress';
import { Processing } from '@/components/Processing';
import { Navbar } from '@/components/layout/Navbar';

import { ONE_SECOND } from '@/utils/date.util';

import { UploadButton } from './UploadButton';

export default function UploadPage() {
  const router = useRouter();

  const [isAIProcessing, setIsAIProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (uploadProgress === 100) {
      // delay a little bit to show 100% upload progress completely
      setTimeout(() => {
        setIsAIProcessing(true);
      }, 300);
    }
  }, [uploadProgress]);

  useEffect(() => {
    if (isAIProcessing) {
      // show paywall after 2 seconds scanning
      setTimeout(() => {
        router.push('/paywall');
      }, ONE_SECOND * 2);
    }
  }, [isAIProcessing]);

  const handleUpload = (file: File) => {
    // simulate upload file to server
    setInterval(() => {
      setUploadProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 4));
    }, 100);
  };

  if (isAIProcessing) return <Processing />;

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="relative flex flex-col items-center justify-between h-full overflow-hidden">
        {!!uploadProgress && (
          <div className="absolute top-0 w-full">
            <UploadProgress value={uploadProgress} />
          </div>
        )}
        <div className="w-full mt-8 px-6">
          <h1 className="text-4xl/9 font-bold tracking-tight mb-2">Upload your photo</h1>
          <p className="text-base/5 font-medium">To get the perfect AI dating pics</p>
        </div>
        <div className="w-full aspect-[3/4]">
          <div className="relative h-full">
            <Image className="absolute top-1/2 -translate-y-1/2 -z-10" alt="illustration" src={uploadIllustration} />
          </div>
        </div>
        <div className="mt-5 mb-4">
          <UploadButton onUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
}
