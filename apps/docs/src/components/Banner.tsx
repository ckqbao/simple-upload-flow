'use client';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useMemo, useState } from 'react';
import { StopwatchIcon } from '@radix-ui/react-icons';
import { useInterval } from '@/hooks/useInterval';
import { ONE_SECOND } from '@/utils/date.util';

dayjs.extend(duration);

export function Banner() {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useInterval(() => {
    setCurrentTime(dayjs());
  }, ONE_SECOND);

  const timer = useMemo(() => {
    return dayjs.duration(Math.abs(dayjs().endOf('day').diff(currentTime))).format('HH:mm:ss');
  }, [currentTime]);

  return (
    <div className="bg-primary-gradient h-9 flex items-center justify-between px-3">
      <div className="text-lg/6 font-semibold uppercase">40% Off → first 69 buyers today!</div>
      <div className="flex items-center space-x-1">
        <StopwatchIcon width={20} height={20} />
        <span className="text-xl/6 font-semibold uppercase">{timer}</span>
      </div>
    </div>
  );
}
