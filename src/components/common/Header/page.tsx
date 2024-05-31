import classNames from "classnames/bind"
import styles from "./Header.module.scss";

interface HeaderProps{}
const cx = classNames.bind(styles);
export default function Header(props:HeaderProps) {
    return(
        <header className={cx('header','flex items-center justify-between')}>
            <ul className={cx('flex items-center')}>
               <li className={cx('mr-4','header-font')}>Câu chuyện</li> 
               <li className={cx('mr-4','header-font')}>Kỉ niệm</li>
            </ul>
            <p className={cx('header-title')}>Linh & Yen</p>
            <ul className={cx('flex items-center')}>
               <li className={cx('mr-4','header-font')}>Giới thiệu</li> 
               <li className={cx('header-login')}>Tập ảnh</li>
            </ul>
        </header>
    )
}