import ImageNext, { ImageProps as NextImageProps } from 'next/image';
import React, { forwardRef } from 'react';

// Extend the props from next/image and add any additional custom props if necessary
interface ImageProps extends Omit<NextImageProps, 'ref'> {
  src: string; // Ensure that `src` is a required string
}

// Create the component using forwardRef
const Image = forwardRef<HTMLElement, ImageProps>(({ src, ...props }, ref) => {
  return <ImageNext src={src} {...props} ref={ref as any} />;
});

// Set the display name for better debugging
Image.displayName = 'Image';

export default Image;
