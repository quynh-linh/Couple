'use client'

import classNames from "classnames/bind"
import styles from "@/components/Home/home.module.scss";
import images from "@/assets/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { calculateTimeDifference } from "@/utils/calculateTimeDifference";
import useIsInViewport from "@/hooks/useIsInViewport";
import { updateElementClass } from "@/utils/updateElementClass";
import Title from "@/components/Text/Title";
import ImageBanner from "@/components/Image/ImageBanner";
import Albums from "@/components/Albums/Albums";
const cx = classNames.bind(styles);
export default function Home() {
     const [timeDifference, setTimeDifference] = useState(calculateTimeDifference(new Date()));
     const refBannerLeft = useRef<HTMLDivElement | null>(null);
     const refBannerRight = useRef<HTMLDivElement | null>(null);
     const isInViewportBannerLeft = useIsInViewport(refBannerLeft);
     const isInViewportBannerRight = useIsInViewport(refBannerRight);
     useEffect(() => {
          const interval = setInterval(() => {
               setTimeDifference(calculateTimeDifference());
          }, 1000);
     
          return () => clearInterval(interval);
     }, []);

     useEffect(() => {
          updateElementClass(
               refBannerLeft.current,
               isInViewportBannerLeft,
               'animate__fadeInTopLeft',
               'animate__fadeOutTopLeft'
          );
          updateElementClass(
               refBannerRight.current,
               isInViewportBannerRight,
               'animate__fadeInTopRight',
               'animate__fadeOutTopRight'
          );
     }, [isInViewportBannerLeft, isInViewportBannerRight]);

     return(
          <div className={cx("wrapper",'mt-8')}>
               <div className={cx('wrapper-banner','flex items-center justify-around')}>
                    <ImageBanner
                         id="BannerLeft"
                         isViewPort={isInViewportBannerLeft}
                         src={images.bannerCoupleLeft}
                         refBanner={refBannerLeft}
                    />
                    <div className={cx('wrapper-banner-ImgCenter')}>
                         <Image className={cx('wrapper-banner-ImgCenter-img')} src={images.bannerCouple} alt="Banner Couple"/>
                         <div className={cx('wrapper-banner-ImgCenter-dateStart','flex items-center justify-between')}>
                              <Title/>
                         </div>
                    </div>
                    <ImageBanner
                         id="BannerRight"
                         isViewPort={isInViewportBannerRight}
                         src={images.bannerCoupleRight}
                         refBanner={refBannerRight}
                    />
               </div>
               <div className={cx("wrapper_NumberOfDays",'flex items-center mt-4')}>
                    <div className="w-2/4 ml-6">
                         <p className={cx('wrapper_NumberOfDays-title')}>Yêu nhau được bao ngày rồi ta ?</p>
                         <div className={cx('flex items-center justify-between mt-14','wrapper_NumberOfDays-content')}>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.days.toString()}</p>
                                   <p className="text-xl mt-2">NGÀY</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.hours.toString()}</p>
                                   <p className="text-xl mt-2">GIỜ</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.minutes.toString()}</p>
                                   <p className="text-xl mt-2">PHÚT</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.seconds.toString()}</p>
                                   <p className="text-xl mt-2">GIÂY</p>
                              </div>
                         </div>
                    </div>
                    <div className="w-2/4 flex items-center justify-center my-4">
                         <video width={300} height={500} autoPlay muted loop>
                              <source src='https://utfs.io/f/36982fd9-a8f0-42e6-acfc-c16905861885-wpjgxp.mp4' type="video/mp4" />
                              Your browser does not support the video tag.
                         </video>
                    </div>
               </div>
               <Albums/>
          </div>
     )
}
