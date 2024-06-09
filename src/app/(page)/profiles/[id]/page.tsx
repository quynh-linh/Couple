'use client';
import classNames from 'classnames/bind';
import styles from "@/components/Profile/Profile.module.scss";
import ArcherProfiles from '@/components/Profile/Archer/Archer';
import { useRouter } from 'next/navigation';
interface ProfilesProps {}
const cx = classNames.bind(styles);

export default function Profile(params: ProfilesProps) {
    const router = useRouter();

    // Function to update the param
    const updateParam = (newId: string) => {
        router.push(`/profiles/${newId}`);
    };
    return (
        <div className={cx('','flex items-center justify-center mt-10')}>
            <ArcherProfiles updateParams={(e:string) => updateParam(e)}/>
        </div>
    );
}
