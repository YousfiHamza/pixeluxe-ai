import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import Header from '@/components/shared/Header';
import { TransformationForm } from '@/components/shared/TransformationForm';
// import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');

  const transformation = transformationTypes[type];

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          userId={user._id}
          action="Add"
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
