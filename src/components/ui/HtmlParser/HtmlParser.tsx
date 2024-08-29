'use client';

import clsx from 'clsx';
import React from 'react';

interface HtmlParserProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  data?: string;
}

export default function HtmlParser({ className, data, ...props }: HtmlParserProps) {
  if (!data) return <></>;

  return (
    <div
      className={clsx(
        'prose-a:text-[#1381BE] prose-a:font-normal prose-a:no-underline prose-ul:list-disc prose-ul:text-justify',
        className,
      )}
      {...props}
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    />
  );
}
