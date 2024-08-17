import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import Header from '@/components/shared/Header';
import { TransformationForm } from '@/components/shared/TransformationForm';
import { InsufficientCreditsModal } from '@/components/shared/Modals/InsufficientCreditsModal';
import { DemoFinishModal } from '@/components/shared/Modals/DemoFinishModal';

import { getUserById } from '@/lib/actions/user.actions';
import { transformationTypes, creditFee } from '@/constants';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  if (!userId) redirect('/auth/sign-in');

  const transformation = transformationTypes[type];

  const user = await getUserById(userId);

  const renderModal = () => {
    if (user.isDemoOver) {
      return <DemoFinishModal />;
    } else if (user.creditBalance < Math.abs(creditFee)) {
      return <InsufficientCreditsModal clerkId={userId} />;
    }
  };

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
        logo={`/assets/icons/${transformation.icon}`}
      />

      {renderModal()}

      <section className="mt-8">
        <TransformationForm
          userId={user._id}
          action="Add"
          type={transformation.type as TransformationTypeKey}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
