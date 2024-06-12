import React, { useState } from 'react';
import './Slider.scss';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SliderItem from './SliderItem';

interface SlideMultipleItemsProps {
    listData: any[];
}

export default function SlideMultipleItems({ listData }: SlideMultipleItemsProps) {
    const [position, setPosition] = useState(0);
    const carousel: KeenSliderPlugin = (slider) => {
        const z = 300;

        function rotate() {
            if (slider.track && slider.track.details) {
                const deg = 360 * slider.track.details.progress;
                slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
            }
        }

        slider.on('created', () => {
            if (!slider.track) return;
            const deg = 360 / slider.slides.length;
            slider.slides.forEach((element, idx) => {
                element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
            });
            rotate();
        });

        slider.on('detailsChanged', () => {
            if (slider.track && slider.track.details) {
                setPosition(slider.track.details.rel);
            }
            rotate();
        });
    };
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: '.carousel__cell',
            renderMode: 'custom',
            mode: 'free-snap',
        },
        [carousel],
    );

    return (
        listData.length > 0 && (
            <div className="flex items-center justify-center">
                <div className="scene">
                    <div className="carousel keen-slider" ref={sliderRef}>
                        {listData.map((item: any, index: number) => {
                            return <SliderItem position={position} key={item.public_id} item={item} index={index} />;
                        })}
                    </div>
                </div>
            </div>
        )
    );
}
