import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/components/ModernTimeline/ModernTimeline.module.scss';
import classNames from 'classnames/bind';

interface ModernTimelineModalProps {
  isOpen: boolean;
  onClose: Function;
  data: any;
}

const cx = classNames.bind(styles);
export default function ModernTimelineModal({ isOpen, onClose, data }: ModernTimelineModalProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose(false);
  };
  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Box className={cx('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px]')}>
        <div
          className={cx(
            'modernTimeLine-content',
            'animate__animated',
            isOpen ? 'animate__flipInX' : 'animate__flipOutX',
          )}
        >
          <h1>{data.title}</h1>
          <p className="text-xs font-normal">{data.subtitle}</p>
          <div className="mt-4 grid justify-items-center md:flex items-center md:justify-start">
            <img src={data.imgSrc} alt={data.imgAlt} />
            <p className="md:ml-2 mt-3 md:mt-0 text-xs font-italic text-justify">{data.description}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
