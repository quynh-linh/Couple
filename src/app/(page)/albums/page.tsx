'use client';
import styles from '@/components/Albums/Albums.module.scss';
import SlideMultipleItems from '@/components/Albums/Slider/Slider';
import HeartLoader from '@/components/Loader/HeartLoader';
import Timeline from '@/components/Timeline/Timeline';
import { get } from '@/libs/axiosConfig';
import { fetchDataMoments } from '@/libs/fetchData';
import { useAppDispatch } from '@/libs/hook';
import { findAllListImageByYears } from '@/redux/features/cloudinarySlice';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
    const [listDataOutStanding, setListOutStanding] = useState<any[]>([]);
    const { data, isLoading, error } = useQuery('moments', fetchDataMoments);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (data) {
            setListOutStanding(data.data);
        }
    }, [data]);
    useEffect(() => {
        dispatch(findAllListImageByYears({ years: 2023 }));
        dispatch(findAllListImageByYears({ years: 2024 }));
    }, [dispatch]);

    return isLoading ? (
        <div id="albums-scroll" className={cx('albums')}>
            <div className={cx('relative w-full h-full flex items-center justify-center')}>
                <HeartLoader />
            </div>
        </div>
    ) : (
        <div id="albums-scroll" className={cx('albums')}>
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
