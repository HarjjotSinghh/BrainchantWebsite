'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuillContainer = ({
  value,
  onChange
}: {
  value: any,
  onChange: any,
}, ) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];
  const loadingComponent = ({className}: {className:string}) => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    )
  }
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false}),[]);
  return (
    <ReactQuill
      theme={undefined}
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions,
        clipboard: {matchMedia: true}
      }}
      className="focus:outline-none focus:ring w-full ease-linear transition-all duration-150 rounded-xl [&_div]:border-primary max-w-[1000px]"
    />
  );
};

export default ReactQuillContainer;
