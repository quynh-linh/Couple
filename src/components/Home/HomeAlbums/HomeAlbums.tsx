import classNames from 'classnames/bind';
import styles from './HomeAlbums.module.scss';
import { images } from '@/utils/DataAlbums';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
    return (
        <div className={cx('grid', 'my-4')}>
            <p className={cx('grid-title')}>Ảnh đi chơi nè!</p>
            <div className={cx('grid-container')}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            loading="lazy"
                            className={cx('grid-item', `grid-item-${index + 1}`)}
                            src={image.src}
                            alt={image.alt}
                        />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
            <div className={cx('grid-footer')}>
                <p>Xem thêm</p>
            </div>
        </div>
    );
}
