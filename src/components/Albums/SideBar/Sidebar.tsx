import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import ImageIcon from '@mui/icons-material/Image';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import GroupIcon from '@mui/icons-material/Group';
interface SidebarProps {}
const cx = classNames.bind(styles);
const items = [
    { icon: <ImageIcon />, text: 'Ảnh' },
    { icon: <ImageSearchIcon />, text: 'Khám phá' },
    { icon: <GroupIcon />, text: 'Chia sẻ' },
];
export default function Sidebar(params: SidebarProps) {
    return (
        <div className={cx('sidebar')}>
            <ul className={cx('p-4')}>
                {items.map((item, index) => (
                    <li key={index} className={`flex items-center justify-start ${index !== 0 ? 'mt-4' : ''}`}>
                        <div className={cx('sidebar-span', 'flex items-center justify-center')}>{item.icon}</div>
                        <div className={cx('sidebar-p', 'flex items-center justify-start')}>
                            <p className="ml-4">{item.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
