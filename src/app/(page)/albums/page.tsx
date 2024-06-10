import styles from '@/components/Albums/Albums.module.scss';
import SlideMultipleItems from '@/components/Albums/Slide/Slide';
import classNames from 'classnames/bind';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
    return <div className={cx('albums')}>
        <SlideMultipleItems/>
    </div>;
}
