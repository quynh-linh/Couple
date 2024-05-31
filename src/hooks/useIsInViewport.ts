import { useState, useEffect, MutableRefObject, useRef } from 'react';

function useIsInViewport(ref: MutableRefObject<Element | null>): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            observerRef.current = new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            });
        }

        const currentRef = ref.current;

        if (observerRef.current && currentRef) {
            observerRef.current.observe(currentRef);
        }

        return () => {
            if (observerRef.current && currentRef) {
                observerRef.current.unobserve(currentRef);
            }
        };
    }, [ref]);

    return isIntersecting;
}

export default useIsInViewport;
