'use client';

import classNames from 'classnames/bind';
import styles from '@/components/Home/home.module.scss';
import images from '@/assets/images';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import Title from '@/components/Text/Title';
import ImageBanner from '@/components/Image/ImageBanner';
import Albums from '@/components/Home/HomeAlbums/HomeAlbums';
import ModernTimeline from '@/components/ModernTimeline/ModernTimeline';
const cx = classNames.bind(styles);
export default function Home() {
    const [timeDifference, setTimeDifference] = useState(calculateTimeDifference());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(calculateTimeDifference());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx('wrapper', 'mt-8')}>
            <div className={cx('wrapper-banner', 'flex items-center justify-around')}>
                <ImageBanner
                    id="BannerLeft"
                    src={images.bannerCoupleLeft}
                />
                <div className={cx('wrapper-banner-ImgCenter')}>
                    <Image
                        className={cx('wrapper-banner-ImgCenter-img')}
                        src={images.bannerCouple}
                        alt="Banner Couple"
                    />
                    <div className={cx('wrapper-banner-ImgCenter-dateStart', 'flex items-center justify-between')}>
                        <Title />
                    </div>
                </div>
                <ImageBanner
                    id="BannerRight"
                    src={images.bannerCoupleRight}
                />
            </div>
            <div className={cx('wrapper_NumberOfDays', 'flex items-center mt-4')}>
                <div className="w-2/4 ml-6">
                    <p className={cx('wrapper_NumberOfDays-title')}>Yêu nhau được bao ngày rồi ta ?</p>
                    <div className={cx('flex items-center justify-between mt-14', 'wrapper_NumberOfDays-content')}>
                        <div className="text-center">
                            <p className={cx('text-4xl text-white')} suppressHydrationWarning>
                                {timeDifference.days.toString()}
                            </p>
                            <p className="text-xl mt-2">NGÀY</p>
                        </div>
                        <div className="text-center">
                            <p className={cx('text-4xl text-white')} suppressHydrationWarning>
                                {timeDifference.hours.toString()}
                            </p>
                            <p className="text-xl mt-2">GIỜ</p>
                        </div>
                        <div className="text-center">
                            <p className={cx('text-4xl text-white')} suppressHydrationWarning>
                                {timeDifference.minutes.toString()}
                            </p>
                            <p className="text-xl mt-2">PHÚT</p>
                        </div>
                        <div className="text-center">
                            <p className={cx('text-4xl text-white')} suppressHydrationWarning>
                                {timeDifference.seconds.toString()}
                            </p>
                            <p className="text-xl mt-2">GIÂY</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 flex items-center justify-center my-4">
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
            <Albums />
            <ModernTimeline />
        </div>
    );
}
