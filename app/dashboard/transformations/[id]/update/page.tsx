import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import Header from '@/components/shared/Header';
import { TransformationForm } from '@/components/shared/TransformationForm';
import { InsufficientCreditsModal } from '@/components/shared/Modals/InsufficientCreditsModal';

import { getUserById } from '@/lib/actions/user.actions';
import { getImageById } from '@/lib/actions/image.action';
import { transformationTypes, creditFee } from '@/constants';

const Page = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  // to avoid the waterfall effect, we can fetch the user and images in parallel
  const [image, user] = await Promise.all([
    getImageById(id),
    getUserById(userId),
  ]);

  if (
    image.transformationType === 'restore' ||
    image.transformationType === 'removeBackground'
  ) {
    redirect('/dashboard');
  }

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      {user.creditBalance < Math.abs(creditFee) && (
        <InsufficientCreditsModal clerkId={userId} />
      )}

      <section className="mt-10">
        <TransformationForm
          userId={user._id}
          action="Update"
          type={image.transformationType as TransformationTypeKey}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default Page;
