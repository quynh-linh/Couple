import { useState, useEffect, useMemo, MutableRefObject } from 'react';
import 'intersection-observer';
function useIsInViewport(ref: MutableRefObject<Element | null>): boolean {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(() => new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }),
    []);

    useEffect(() => {
        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

export default useIsInViewport;
