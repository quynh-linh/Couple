import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.scss';
import classNames from 'classnames/bind';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const cx = classNames.bind(styles);
const BackToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <a className={cx("back-to-top")} onClick={scrollToTop}>
                    <KeyboardArrowUpIcon className='text-4xl'/>
                </a>
            )}
        </>
    );
};

export default BackToTopButton;
