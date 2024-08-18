import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import { Collection } from '@/components/shared/Collection';
import { FirstTimeModal } from '@/components/shared/Modals/FirstTimeModal';

import { getAllImages } from '@/lib/actions/image.action';
import { getUserById } from '@/lib/actions/user.actions';

export default async function DashboardCollection({
  page,
  searchQuery,
}: {
  page: number;
  searchQuery: string;
}) {
  const { userId } = auth();

  if (!userId) redirect('/auth/sign-in');
  // to avoid the waterfall effect, we can fetch the user and images in parallel
  const [images, user] = await Promise.all([
    getAllImages({ page, searchQuery, limit: 6 }),
    getUserById(userId || ''),
  ]);

  return (
    <div>
      {images && (
        <section className="sm:mt-6">
          <Collection
            hasSearch
            images={images?.data}
            totalPages={images?.totalPage}
            page={page}
          />
          {user?.isFirstTime && <FirstTimeModal clerkId={userId || ''} />}
        </section>
      )}
    </div>
  );
}
