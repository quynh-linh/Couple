import React, { useRef, useEffect, useState } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import classNames from 'classnames/bind';
import styles from './ModernTimeline.module.scss';
import useIsInViewport from '@/hooks/useIsInViewport';
import ModernTimelineModal from '../Modal/ModernTimeline';
const cx = classNames.bind(styles);

interface ModernTimelineEventProps {
    date: string;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    subtitle: string;
    position: 'left' | 'right';
}

const ModernTimelineEvent: React.FC<ModernTimelineEventProps> = ({
    date,
    title,
    description,
    imgSrc,
    imgAlt,
    position,
    subtitle,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(ref);
    const [isHoverContent, setHoverContent] = useState<boolean>(false);
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [dataModalSelected, setDataModalSelected] = useState<any>({});
    const handleOnMouseEnter = () => {
        setHoverContent(true);
    };

    const handleOnMouseLeave = () => {
        setHoverContent(false);
    };
    useEffect(() => {
        if (isInViewport) {
            ref.current?.classList.add(position === 'left' ? 'animate__backInLeft' : 'animate__backInRight');
        }
    }, [isInViewport, position]);

    return (
        <>
            <TimelineItem
                onClick={() => {
                    setOpenModal(true);
                    setDataModalSelected({ date, title, description, imgSrc, imgAlt, position, subtitle });
                }}
                className="animate__animated hover:cursor-pointer"
                ref={ref}
            >
                <TimelineOppositeContent
                    className={cx('modernTimeLine-titleTimeLine', isHoverContent ? 'modernTimeLine-titleHover' : '')}
                >
                    {date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <p>💗</p>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <div className={cx('modernTimeLine-content', isHoverContent ? 'modernTimeLine-contentHover' : '')}>
                        <h1>{title}</h1>
                        <p className="text-xs font-normal">{subtitle}</p>
                        <div className="mt-4 flex items-center justify-start">
                            <img src={imgSrc} alt={imgAlt} />
                            <p className="ml-2 text-xs font-italic text-justify">{description}</p>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            {/* OPEN MODAL */}
            <ModernTimelineModal
                isOpen={isOpenModal}
                onClose={(e: boolean) => setOpenModal(e)}
                data={dataModalSelected}
            />
        </>
    );
};

export default ModernTimelineEvent;
