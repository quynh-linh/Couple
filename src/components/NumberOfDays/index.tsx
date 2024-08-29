'use client';
import classNames from 'classnames/bind';
import styles from './NumberOfDays.module.scss';
import { useEffect, useState } from 'react';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import Container from '../ui/Container/Container';
import Image from 'next/image';
const cx = classNames.bind(styles);
interface INumberOfDays {}
export default function NumberOfDays(params: INumberOfDays) {
  const [timeDifference, setTimeDifference] = useState(calculateTimeDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Image
        className="object-cover !-z-10"
        src={'https://utfs.io/f/46d8bcf5-fe05-4a08-923f-f6a56c2a8b02-m15jgy.jpg'}
        alt="Banner"
        fill
      />
      <Container>
        <div className={cx('wrapper_NumberOfDays', 'grid md:flex items-center py-[40px] md:py-0')}>
          <div className="w-full md:w-2/4 md:ml-6">
            <p className={cx('wrapper_NumberOfDays-title', 'text-[1.5rem] md:text-[2rem] text-center md:text-left')}>
              Yêu nhau được bao ngày rồi ta ?
            </p>
            <div className={cx('flex items-center justify-between mt-14', 'wrapper_NumberOfDays-content')}>
              <div className="text-center">
                <p className={cx('text-2xl md:text-4xl text-white')} suppressHydrationWarning>
                  {timeDifference.days.toString()}
                </p>
                <p className="text-[14px] md:text-xl mt-2">NGÀY</p>
              </div>
              <div className="text-center">
                <p className={cx('text-2xl md:text-4xl text-white')} suppressHydrationWarning>
                  {timeDifference.hours.toString()}
                </p>
                <p className="text-[14px] md:text-xl mt-2">GIỜ</p>
              </div>
              <div className="text-center">
                <p className={cx('text-2xl md:text-4xl text-white')} suppressHydrationWarning>
                  {timeDifference.minutes.toString()}
                </p>
                <p className="text-[14px] md:text-xl mt-2">PHÚT</p>
              </div>
              <div className="text-center">
                <p className={cx('text-2xl md:text-4xl text-white')} suppressHydrationWarning>
                  {timeDifference.seconds.toString()}
                </p>
                <p className="text-[14px] md:text-xl mt-2">GIÂY</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/4 pt-[40px] md:pt-0  md:my-8 flex items-center justify-center md:justify-end">
            <video className={cx('wrapper_NumberOfDays-video')} width={300} height={500} autoPlay muted loop>
              <source
                src={
                  'https://firebasestorage.googleapis.com/v0/b/couple-85135.appspot.com/o/Albums%2F1686372287426.mp4?alt=media&token=f01df81a-8e50-431a-b2a3-fdd1539dd459'
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </div>
  );
}
