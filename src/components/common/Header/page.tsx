import classNames from 'classnames/bind';
import styles from './Header.module.scss';

interface HeaderProps {
    position?: string
}
const cx = classNames.bind(styles);
export default function Header(props: HeaderProps) {
    return (
        <header className={cx('header', 'flex items-center justify-between',props.position === 'Sidebar' ? 'fixed top-0 left-0 right-0 z-10' : '')}>
            <ul className={cx('flex items-center')}>
                <li className={cx('mr-4', 'header-font')}>Câu chuyện</li>
                <li className={cx('mr-4', 'header-font')}>Kỉ niệm</li>
            </ul>
            <a href="/" className={cx('header-title')}>
                Linh & Yen
            </a>
            <ul className={cx('flex items-center')}>
                <li className={cx('mr-4', 'header-font')}>Giới thiệu</li>
                <a href="/albums">
                    <li className={cx('header-login')}>Tập ảnh</li>
                </a>
            </ul>
        </header>
    );
}
