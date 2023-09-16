import Image from 'next/image';
import React from 'react';


const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const ImageEdit = ({ url, w, h }) => {

  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F4A2B8" offset="20%" />
      <stop stop-color="#E55B83" offset="50%" />
      <stop stop-color="#c9184a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fff" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (
    <Image src={url} width={w} height={h} placeholder="blur" alt="creationImage" />
    // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`}
    );
};

export default ImageEdit;
