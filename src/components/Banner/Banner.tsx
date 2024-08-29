import Image from 'next/image';
import ImageBanner from '../Image/ImageBanner';
import Title from '../Text/Title';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '@/assets/images';
const cx = classNames.bind(styles);
interface IBanner {}
export default function Banner(params: IBanner) {
  return (
    <div className={cx('wrapper-banner', 'flex items-center justify-around md:mt-8')}>
      <ImageBanner className="md:block hidden" id="BannerLeft" src={images.bannerCoupleLeft} />
      <div className={cx('wrapper-banner-ImgCenter')}>
        <Image
          className={cx('wrapper-banner-ImgCenter-img', 'h-[80vh] md:h-[500px] w-full md:w-[330px] object-cover')}
          src={images.bannerCouple}
          alt="Banner Couple"
          loading="eager"
        />
        <div className={cx('wrapper-banner-ImgCenter-dateStart', 'flex items-center justify-between md:top-[60px]')}>
          <Title />
        </div>
      </div>
      <ImageBanner className="md:block hidden" id="BannerRight" src={images.bannerCoupleRight} />
    </div>
  );
}
