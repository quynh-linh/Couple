'use client'

import classNames from "classnames/bind"
import styles from "@/components/Home/home.module.scss";
import images from "@/assets/images";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import { calculateTimeDifference } from "@/utils/calculateTimeDifference";
const cx = classNames.bind(styles);
export default function Home() {
     const [timeDifference, setTimeDifference] = useState(calculateTimeDifference(new Date()));

     useEffect(() => {
          const interval = setInterval(() => {
               setTimeDifference(calculateTimeDifference());
          }, 1000);
     
          return () => clearInterval(interval);
     }, []);
     

     return(
          <div className={cx("wrapper",'mt-8')}>
               <div className={cx('wrapper-banner','flex items-center justify-around')}>
                    <Image className={cx('wrapper-banner-ImgCenter-imgLeft')} src={images.bannerCoupleLeft} alt="Banner Couple"/>
                    <div className={cx('wrapper-banner-ImgCenter')}>
                         <Image className={cx('wrapper-banner-ImgCenter-img')} src={images.bannerCouple} alt="Banner Couple"/>
                         <div className={cx('wrapper-banner-ImgCenter-dateStart','flex items-center justify-between')}>
                              <p className="mx-4">26</p>
                              <FavoriteIcon/>
                              <p className="mx-4">04</p>
                              <FavoriteIcon/>
                              <p>2024</p>
                         </div>
                    </div>
                    <Image className={cx('wrapper-banner-ImgCenter-imgRight')} src={images.bannerCoupleRight} alt="Banner Couple"/>
               </div>
               <div className={cx("wrapper_NumberOfDays",'flex items-center mt-4')}>
                    <div className="w-2/4 ml-6">
                         <p className={cx('wrapper_NumberOfDays-title')}>Number of days knowing each other</p>
                         <div className={cx('flex items-center justify-between mt-14')}>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.days.toString()}</p>
                                   <p className="text-xl mt-2">DAYS</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.hours.toString()}</p>
                                   <p className="text-xl mt-2">HOURS</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.minutes.toString()}</p>
                                   <p className="text-xl mt-2">MINUTES</p>
                              </div>
                              <div className="text-center">
                                   <p className={cx('text-4xl text-white')} suppressHydrationWarning >{timeDifference.seconds.toString()}</p>
                                   <p className="text-xl mt-2">SECONDS</p>
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
          </div>
     )
}
