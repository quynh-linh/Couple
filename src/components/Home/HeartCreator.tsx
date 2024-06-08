import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const HeartCreator: React.FC = () => {
    const createHeart = () => {
        const heartContainer = document.createElement('div');
        document.body.appendChild(heartContainer);

        heartContainer.style.position = 'absolute';
        heartContainer.style.left = Math.random() * 100 + "vw";
        heartContainer.style.top = Math.random() * 100 + "vh";
        heartContainer.style.zIndex = '10';

        // Render React element vào node DOM
        createPortal(
            <span
                onClick={() => handleClickHeart(heartContainer)}
                role="img"
                aria-label="heart"
                style={{ cursor: "pointer" }}
            >
                💗
            </span>,
            heartContainer
        );

        setTimeout(() => {
            heartContainer.remove();
        }, 5000);
    }

    const handleClickHeart = (heartContainer: HTMLElement) => {
        heartContainer.style.transform = 'scale(1.5)'; // Bung ra
        heartContainer.style.opacity = '0'; // Đặt opacity để mất dần
        setTimeout(() => {
            heartContainer.remove();
        }, 1000); // Xóa sau khi kết thúc animation
    }

    useEffect(() => {
        const interval = setInterval(createHeart, 300);
        return () => clearInterval(interval);
    }, []);

    return null;
}

export default HeartCreator;
