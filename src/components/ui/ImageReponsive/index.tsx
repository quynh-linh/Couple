'use client';

import clsx from 'clsx';
import Image from '../Image/Image';

interface ImageResponsiveProps {
  desktop?: string;
  mobile?: string;
  className?: string;
  classNameMobile?: string;
  priority?: boolean;
  [key: string]: any; // Additional props
}

export default function ImageResponsive({
  desktop,
  mobile,
  className,
  classNameMobile,
  priority,
  ...props
}: ImageResponsiveProps) {
  if (!desktop && !mobile) return <></>;

  return (
    <div>
      {mobile || desktop ? (
        <Image
          className={clsx(classNameMobile, `!block lg:!hidden w-full h-full object-cover`)}
          src={(mobile || desktop) || ''}
          alt='Image'
          fill
          priority={priority}
          {...props}
        />
      ) : null}

      {desktop ? (
        <Image
          className={clsx(className, desktop && '!hidden lg:!block w-full h-full object-cover')}
          src={desktop}
          alt='Image'
          fill
          priority={priority}
          {...props}
        />
      ) : null}
    </div>
  );
}
