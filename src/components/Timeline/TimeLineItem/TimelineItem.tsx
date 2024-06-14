import React from 'react';
import styles from './TimelineItem.module.scss';
import classNames from 'classnames/bind';
interface TimeLineItemProps {
    arrItem: any[];
}
const cx = classNames.bind(styles);
export default function TimeLineItem({ arrItem }: TimeLineItemProps) {
    return (
        <div className={cx('container')}>
            {arrItem.length > 0 && arrItem.map((item, index) => {
                return <img className={cx('container-img')} key={index} src={item.url} alt={item.name} />;
            })}
        </div>
    );
}
