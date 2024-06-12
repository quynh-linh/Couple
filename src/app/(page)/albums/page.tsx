'use client';
import styles from '@/components/Albums/Albums.module.scss';
import SlideMultipleItems from '@/components/Albums/Slider/Slider';
import { get } from '@/libs/axiosConfig';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
interface AlbumsProps {}
const cx = classNames.bind(styles);
export default function Albums(params: AlbumsProps) {
    const [listDataOutStanding,setListOutStanding] = useState<any[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await get('api/cloudinary', null);
                const {data , message} = response.data
                if(response.status === 200 && message === 'success'){
                    setListOutStanding(data);
                }
            } catch (error) {
                console.error(error); // Xử lý lỗi nếu có
            }
        };

        getData(); // Gọi hàm getData để thực thi
    }, []);

    return (
        <div className={cx('albums')}>
            <div>
                <p className={cx('albums-title')}>Những khoảng khắc nổi bật</p>
                <div className="mt-4">
                    <SlideMultipleItems listData={listDataOutStanding} />
                </div>
            </div>
        </div>
    );
}
