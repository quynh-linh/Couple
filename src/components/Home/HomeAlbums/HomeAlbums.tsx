import classNames from 'classnames/bind';
import styles from './HomeAlbums.module.scss';
import { images } from '@/utils/DataAlbums';
import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
  return (
    <Container>
      <div className={cx('grid', 'my-4')}>
        <p className={cx('grid-title')}>Ảnh đi chơi nè!</p>
        <div className={cx('grid-container', 'grid w-full gap-[30px] grid-cols-1 md:grid-cols-3 mt-4')}>
          {images.slice(0, 6).map((image, index) => (
            <div key={index}>
              <div className="relative h-[300px] md:h-[450px]">
                <Image
                  className="w-full object-contain md:object-cover filter grayscale rounded-md transition-all duration-250 ease-in-out"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  fill
                />
              </div>
              <p>{image.description}</p>
            </div>
          ))}
        </div>
        <a href="/albums" className={cx('grid-footer')}>
          <p>Xem thêm</p>
        </a>
      </div>
    </Container>
  );
}
