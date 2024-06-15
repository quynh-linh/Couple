import React, { useEffect, useRef, useState } from 'react';
import styles from './TimelineItem.module.scss';
import classNames from 'classnames/bind';
import { convertMonths, getFormattedDate } from '@/libs/datetime';
import useIsInViewport from '@/hooks/useIsInViewport';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
interface TimeLineItemProps {
    arrItem: any[];
    month: any;
    year: any;
    onClick: any;
    viewPort: Function;
}

const cx = classNames.bind(styles);

export default function TimeLineItem({ onClick, arrItem, month, year, viewPort }: TimeLineItemProps) {
    const monthRef = useRef<HTMLHeadingElement>(null);
    const isInViewport = useIsInViewport(monthRef);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [duration, setDuration] = useState<number>(0);
    const [formattedDuration, setFormattedDuration] = useState<string>('0:00');

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            const durationInSeconds = Math.floor(videoRef.current.duration);
            setDuration(durationInSeconds);
            setFormattedDuration(formatTime(durationInSeconds));
        }
    };
    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => console.log('Error playing video:', error));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };
    useEffect(() => {
        if (onClick.month?.month && onClick.year) {
            const item = convertMonths(onClick.month?.month) + ' ' + onClick.year;
            if (item === monthRef.current?.id) {
                const scrollTop = monthRef.current.offsetTop;
                console.log('Offset Top:', scrollTop);
                window.scrollTo({ top: scrollTop - 71, behavior: 'smooth' });
            }
        }
    }, [onClick]);

    useEffect(() => {
        if (isInViewport) {
            viewPort(monthRef.current?.id);
        } else {
            viewPort('');
        }
    }, [isInViewport]);
    return (
        <div id={`${convertMonths(month.month) + ' ' + year.year}`} ref={monthRef} className={cx('wrapper')}>
            <h1 className={`text-xl font-medium`}>{convertMonths(month.month)}</h1>
            <div className={cx('wrapper-container')}>
                {arrItem.length > 0 &&
                    arrItem.map((item, index) => (
                        <div key={index}>
                            <p className="mb-2">{getFormattedDate(item.name)}</p>
                            {item.type === 'image' ? (
                                <img className={cx('wrapper-container-img')} src={item.url} alt={item.name} />
                            ) : (
                                <div className="relative">
                                    <video
                                        ref={videoRef}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        className={cx('wrapper-container-img', 'wrapper-container-video')}
                                        muted
                                        loop
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={cx('wrapper-container-video-icon')}>
                                        <p className='mr-2'>{formattedDuration}</p>
                                        <PlayCircleOutlineIcon />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}
