'use client';
import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.scss';
import classNames from 'classnames/bind';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { removeHeart } from '@/redux/features/heartSlice';
import { useAppDispatch, useAppSelector } from '@/libs/hook';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const BackToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const [showControls, setShowControls] = useState<boolean>(false);
    const [showControlsHearts, setShowControlsHearts] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.heart);
    const handleClickShowControl = () => {
        setShowControls(!showControls);
    };

    const toggleHeartCreation = () => {
        setShowControlsHearts(!showControlsHearts);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowControls(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(removeHeart({ status: showControlsHearts }));
    }, [showControlsHearts]);

    return (
        <>
            <a className={cx('backToTop')}>
                <div className="relative hover:cursor-pointer" onClick={handleClickShowControl}>
                    {showControls ? <CloseIcon /> : <MoreHorizIcon />}
                </div>
                {showControls ? (
                    <div
                        className={cx('backToTop-controls', 'text-4xl','animate__animated',showControls ? 'animate__bounceInUp' : 'animate__bounceInDown')}
                        style={{ top: !showButton ? '-50px' : '-100px' }}
                    >
                        <Tippy content="Có thể tắt/bật hiển thị trái tim trong website">
                            <div
                                onClick={toggleHeartCreation}
                                className={cx(
                                    'backToTop-controls-parent',
                                    ' hover:cursor-pointer',
                                    selector.status ? '' : 'text-red-700',
                                )}
                            >
                                <FavoriteIcon />
                            </div>
                        </Tippy>
                        {showButton && (
                            <Tippy content="Trở về đầu trang">
                                <div className={cx('backToTop-controls-parent', ' hover:cursor-pointer')}>
                                    <KeyboardArrowUpIcon onClick={scrollToTop} />
                                </div>
                            </Tippy>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </a>
        </>
    );
};

export default BackToTopButton;
