import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/components/ModernTimeline/ModernTimeline.module.scss';
import classNames from 'classnames/bind';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
};
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
            return () =>  clearTimeout(timer);
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
            <Box className={cx()} sx={style}>
                <div
                    className={cx(
                        'modernTimeLine-content',
                        'animate__animated',
                        isOpen ? 'animate__flipInX' : 'animate__flipOutX',
                    )}
                >
                    <h1>{data.title}</h1>
                    <p className="text-xs font-normal">{data.subtitle}</p>
                    <div className="mt-4 flex items-center justify-start">
                        <img src={data.imgSrc} alt={data.imgAlt} />
                        <p className="ml-2 text-xs font-italic text-justify">{data.description}</p>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
