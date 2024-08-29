import React, { forwardRef, ReactNode, CSSProperties, ElementType } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
  as?: ElementType;
  isFullRight?: boolean;
  [key: string]: any;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, style, children, id, as: Component = 'div', isFullRight, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        id={id}
        className={clsx('max-w-[1150px] mx-auto px-5 sm:px-10 lg:px-7', className)}
        style={style}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = 'Container';

export default Container;
