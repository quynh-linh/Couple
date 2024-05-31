import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
interface FooterProps {

}
const cx = classNames.bind(styles);
export default function Footer(params:FooterProps) {
    return (
        <div className={cx("wrapper",'text-center pt-6 pb-2')}>
            <p className='text-xs font-semibold'>Website designed by Nguyen Thanh Quynh Linh</p>
        </div>
    )
}