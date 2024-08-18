import Image from 'next/image';
import { Download, RotateCcw, Hammer } from 'lucide-react';
import Header from '@/components/shared/Header';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { transformationTypes } from '@/constants';

export default function AddTransformationTypeLoadingPage() {
  const transformation = transformationTypes['default'];

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
        logo={`/assets/icons/${transformation.icon}`}
      />

      <section className="mt-8">
        <div>
          <label className="text-theme-100 text-sm italic">Image Title</label>
          <Input className="input-field" />
        </div>
        <div className="media-uploader-field">
          <div className="flex size-full flex-col">
            <div className="flex flex-col gap-1">
              <h3 className="text-theme-200 font-inter text-2xl font-bold italic">
                Original
              </h3>
              <div className="media-uploader_cta">
                <div className="media-uploader_cta-image">
                  <Image
                    src="/assets/icons/add.svg"
                    alt="Add Image"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="p-14-medium text-theme-100">
                  Click here to upload image
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-1">
              <div className="flex-between">
                <h3 className="text-theme-200 font-inter text-2xl font-bold italic">
                  Transformed
                </h3>
              </div>
              <div className="transformed-placeholder text-theme-100">
                Transformed Image
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button type="button" className="submit-button capitalize" disabled>
            <div className="flex items-center justify-center gap-2">
              <Hammer />
              Apply Transformations
            </div>
          </Button>
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Button
              type="submit"
              className="cta-button bg-green-600 capitalize"
              disabled
            >
              <div className="flex items-center justify-center gap-2">
                <Download />
                Save Image
              </div>
            </Button>
            <Button className="cta-button bg-red-500 capitalize" disabled>
              <div className="flex items-center justify-center gap-2">
                <RotateCcw />
                New Image
              </div>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
