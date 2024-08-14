'use client';

import Image from 'next/image';
import React from 'react';

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils';
import { CldImage, getCldImageUrl } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import DownloadIcon from '@/public/assets/icons/download.svg';

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title,
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex-between">
        <h3 className="text-theme-200 font-inter text-2xl font-bold italic">
          Transformed
        </h3>

        {hasDownload && (
          <button className="download-btn" onClick={downloadHandler}>
            Download
            <DownloadIcon className="group-hover:fill-red-500" />
          </button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, 'width')}
            height={getImageSize(type, image, 'height')}
            src={image?.publicId}
            alt={image.title || 'transformed image'}
            sizes={'(max-width: 767px) 100vw, 50vw'}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder text-theme-100">
          Transformed Image
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
