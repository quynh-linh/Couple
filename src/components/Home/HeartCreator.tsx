import React, { useEffect } from 'react';

export const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

const HeartCreator: React.FC = () => {
    useEffect(() => {
        const interval = setInterval(createHeart, 300);
        return () => clearInterval(interval);
    }, []);

    return null;
}

export default HeartCreator;