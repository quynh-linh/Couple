'use client'
import React, { Component } from 'react';
import Slider from 'react-slick';
interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const SampleArrow: React.FC<SampleArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};
export default class MultipleItems extends Component {
    render() {
        const settings = {
            className: 'slider variable-width',
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true,
            nextArrow: <SampleArrow />,
            prevArrow: <SampleArrow />,
        };
        return (
            <div className='p-4'>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
