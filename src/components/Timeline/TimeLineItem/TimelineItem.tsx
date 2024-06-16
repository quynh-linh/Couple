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
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [videoDurations, setVideoDurations] = useState<number[]>([]);

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleLoadedMetadata = (index: number) => {
        if (videoRefs.current[index]) {
            const duration = videoRefs.current[index]?.duration || 0;
            setVideoDurations((prevDurations) => {
                const newDurations = [...prevDurations];
                newDurations[index] = duration;
                return newDurations;
            });
        }
    };
    const handleMouseEnter = (index: number) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.play();
        }
    };

    const handleMouseLeave = (index: number) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.pause();
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
    }, [isInViewport, viewPort]);

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, arrItem.length);
    }, [arrItem.length]);
    return (
        <div id={`${convertMonths(month.month) + ' ' + year.year}`} ref={monthRef} className={cx('wrapper')}>
            <h1 className="text-xl font-medium">{convertMonths(month.month)}</h1>
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
                                        ref={(el) => {
                                            videoRefs.current[index] = el;
                                        }}
                                        id={item.name}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={() => handleMouseLeave(index)}
                                        onLoadedMetadata={() => handleLoadedMetadata(index)}
                                        className={cx('wrapper-container-img', 'wrapper-container-video')}
                                        muted
                                        loop
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={cx('wrapper-container-video-icon')}>
                                        <p className="mr-2">{formatDuration(videoDurations[index] || 0)}</p>
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
