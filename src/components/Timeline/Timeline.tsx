'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CircleIcon from '@mui/icons-material/Circle';
import { useAppSelector } from '@/libs/hook';
import { months } from '@/libs/data';
import TimeLineItem from './TimeLineItem/TimelineItem';

interface ImageInfo {
    name: string;
    url: string;
    type: string;
}

interface Data {
    month: string;
    images: ImageInfo[];
}

interface YearData {
    year: string;
    months: { month: string; images: ImageInfo[] }[];
}
const cx = classNames.bind(styles);

const Timeline: React.FC = () => {
    const [years, setYears] = useState<YearData[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [rightPanelHeight, setRightPanelHeight] = useState<number>(0);
    const selector = useAppSelector((state) => state.cloud);

    const handleScroll = () => {
        setIsHover(false);
        setIsVisible(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    const handleOnMouseEnter = () => {
        setIsVisible(true);
        setIsHover(true);
    };

    // Function to translate month names from English to Vietnamese
    const translateMonth = (monthEn: string): string => {
        const month = months.find((m) => m.en === monthEn);
        return month ? month.vi : monthEn;
    };

    useEffect(() => {
        const uniqueYears = new Map<string, { month: string; images: ImageInfo[] }[]>();

        const processData = (dataYear: Data[], year: string) => {
            if (dataYear.length > 0) {
                dataYear.forEach((data: Data) => {
                    const translatedMonth = translateMonth(data.month);
                    if (!uniqueYears.has(year)) {
                        uniqueYears.set(year, []);
                    }
                    uniqueYears.get(year)?.push({ month: translatedMonth, images: data.images });
                });
            }
        };

        processData(selector.dataYear2023, '2023');
        processData(selector.dataYear2024, '2024');

        const updatedYears = Array.from(uniqueYears.entries())
            .map(([year, months]) => ({ year, months }))
            .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));

        setYears(updatedYears);
    }, [selector.dataYear2023.length, selector.dataYear2024.length]);

    useEffect(() => {
        const albumsScroll = document.getElementById('albums-scroll');
        if (albumsScroll) {
            setRightPanelHeight(albumsScroll.clientHeight);
            albumsScroll.addEventListener('scroll', handleScroll);
            return () => {
                albumsScroll.removeEventListener('scroll', handleScroll);
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }
    }, []);

    return (
        <div className={cx('appContainer')}>
            <div className={cx('leftPanel')}>
                {years.length > 0 &&
                    years.map((item: YearData, index: number) => (
                        <div key={index}>
                            {item.months.map((month: Data, monthIndex: number) => {
                                return (
                                    <div key={monthIndex}>
                                        <TimeLineItem arrItem={month.images} />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
            </div>
            <div
                onMouseEnter={handleOnMouseEnter}
                style={{ display: isHover ? 'block' : isVisible ? 'block' : 'none' }}
            >
                <div style={{ height: `${rightPanelHeight - 71}px` }} className={cx('rightPanel')}>
                    {years.length > 0 &&
                        years.map((item, index) => (
                            <div key={index} className={cx('yearSection')}>
                                <div className={cx('yearTitle')}>{item.year}</div>
                                <div className="grid justify-end h-full">
                                    {item.months.map((month: any, monthIndex: number) => (
                                        <Tippy key={monthIndex} content={month.month + ' ' + item.year}>
                                            <CircleIcon className={cx('monthItem')} />
                                        </Tippy>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
