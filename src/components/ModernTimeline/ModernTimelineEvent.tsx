import React, { useRef, useState } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import classNames from 'classnames/bind';
import styles from './ModernTimeline.module.scss';
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
  const [isHoverContent, setHoverContent] = useState<boolean>(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [dataModalSelected, setDataModalSelected] = useState<any>({});
  const handleOnMouseEnter = () => {
    setHoverContent(true);
  };

  const handleOnMouseLeave = () => {
    setHoverContent(false);
  };

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
          className={cx(
            'modernTimeLine-titleTimeLine',
            isHoverContent ? 'modernTimeLine-titleHover' : '',
            'hidden md:block',
          )}
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
            <div className="mt-4 grid justify-items-center md:flex items-center md:justify-start">
              <img src={imgSrc} alt={imgAlt} />
              <p className="md:ml-2 mt-3 md:mt-0 text-xs font-italic text-justify line-clamp-6 md:line-clamp-none">
                {description}
              </p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <ModernTimelineModal isOpen={isOpenModal} onClose={(e: boolean) => setOpenModal(e)} data={dataModalSelected} />
    </>
  );
};

export default ModernTimelineEvent;
