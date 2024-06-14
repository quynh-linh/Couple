import React from 'react';
import 'keen-slider/keen-slider.min.css';
import './Slider.scss';
interface SliderItemProps {
    item: any;
    index: number;
    position: number;
}
const ImageStyles: React.CSSProperties = {
    maxHeight: '300px',
    objectFit: 'fill',
    display: 'flex',
    borderRadius: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
};
const DivStyles = (position: number, index: number): React.CSSProperties => ({
    maxHeight: '300px',
    maxWidth: '300px',
    objectFit: 'fill',
    borderRadius: '10px',
    width: '100%',
    boxShadow:
        position === index
            ? 'rgba(241, 130, 130, 1) 0px 3px 6px, rgba(249, 98, 98, 1) 0px 3px 6px'
            : 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
});
const PStyles: React.CSSProperties = {
    fontFamily: 'var(--font-Italic)',
    textShadow: '2px 2px 4px rgba(241, 130, 130, 1)',
};
function SliderItem({ item, index, position }: SliderItemProps) {
    return (
        <div style={DivStyles(position, index)} className={`carousel__cell number-slide${index + 1} showItem`}>
            {item.type === 'image' ? (
                <img style={ImageStyles} src={item.url} alt={item.name} />
            ) : (
                <video style={ImageStyles} autoPlay muted loop>
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            <p
                style={PStyles}
                className={`text-center text-2xl mt-2 ${
                    position === index ? 'animate__animated animate__wobble' : 'hidden'
                }`}
            >
                {item.momentName}
            </p>
        </div>
    );
}
export default SliderItem;
