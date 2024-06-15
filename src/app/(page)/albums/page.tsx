'use client';
import styles from '@/components/Albums/Albums.module.scss';
import SlideMultipleItems from '@/components/Albums/Slider/Slider';
import Timeline from '@/components/Timeline/Timeline';
import { get } from '@/libs/axiosConfig';
import { useAppDispatch } from '@/libs/hook';
import { findAllListImageByYears } from '@/redux/features/cloudinarySlice';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
    const [listDataOutStanding, setListOutStanding] = useState<any[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await get('api/firebase/moment', null);
                const { data, message } = response.data;
                if (response.status === 200 && message === 'success') {
                    setListOutStanding(data);
                }
            } catch (error) {
                console.error(error); // Xử lý lỗi nếu có
            }
        };

        getData(); // Gọi hàm getData để thực thi

    }, []); 

    useEffect(() => {
        dispatch(findAllListImageByYears({ years: 2023 }));
        dispatch(findAllListImageByYears({ years: 2024 }));
    }, [dispatch]); 
    
    return (
        <div id='albums-scroll' className={cx('albums')}>
            <div className={cx('albums-outstanding')}>
                <h1 className={cx('albums-title')}>Những khoảng khắc nổi bật</h1>
                <div className={cx('mt-4', '')}>
                    <SlideMultipleItems listData={listDataOutStanding} />
                </div>
            </div>
            <Timeline />
        </div>
    );
}
