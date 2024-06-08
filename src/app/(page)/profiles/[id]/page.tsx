'use client';
import classNames from 'classnames/bind';
import styles from "@/components/Profile/Profile.module.scss";
import ArcherProfiles from '@/components/Profile/Archer/Archer';
interface ProfilesProps {}
const cx = classNames.bind(styles);
export default function Profile(params: ProfilesProps) {
    return (
        <div className={cx('','flex items-center justify-center mt-10')}>
            <ArcherProfiles/>
        </div>
    );
}
