import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/shared/Header';
import TransformedImage from '@/components/shared/TransformedImage';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/actions/image.action';
import { getImageSize } from '@/lib/utils';
import { DeleteConfirmation } from '@/components/shared/DeleteConfirmation';

export default async function ImageDetails({
  params: { id },
}: SearchParamProps) {
  const { userId } = auth();

  const image = await getImageById(id);

  return (
    <>
      <Header title={image.title} />

      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-theme">Transformation:</p>
          <p className="capitalize text-purple-400 dark:text-purple-300">
            {image.transformationType}
          </p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-theme">Prompt:</p>
              <p className="capitalize text-purple-400 dark:text-purple-300">
                {image.prompt}
              </p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-theme">Color:</p>
              <p className="capitalize text-purple-400 dark:text-purple-300">
                {image.color}
              </p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-theme">Aspect Ratio:</p>
              <p className="capitalize text-purple-400 dark:text-purple-300">
                {image.aspectRatio}
              </p>
            </div>
          </>
        )}
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-1">
            <h3 className="text-theme-200 font-inter text-2xl font-bold italic">
              Original
            </h3>

            <Image
              width={getImageSize(image.transformationType, image, 'width')}
              height={getImageSize(image.transformationType, image, 'height')}
              src={image.secureURL}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/dashboard/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
    </>
  );
}
