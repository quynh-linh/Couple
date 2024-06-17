import className from 'classnames/bind';
import { useState, useEffect, ReactNode } from 'react';
import styles from './LoadingPage.module.scss';

interface LoadingPageProps {
    isState?: (state: boolean) => void;
    children: ReactNode;
}
const LoadingPage = ({ isState = () => {}, children }: LoadingPageProps) => {
    const cx = className.bind(styles);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            isState(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <div className={cx('container')}>
            <div className={cx('cssload-preloader')}>
                <div className={cx('cssload-preloader-box')}>
                    <div>L</div>
                    <div>I</div>
                    <div>N</div>
                    <div>H</div>
                    <div>&</div>
                    <div>Y</div>
                    <div>E</div>
                    <div>N</div>
                </div>
            </div>
        </div>
    ) : (
        children
    );
};
export default LoadingPage;
