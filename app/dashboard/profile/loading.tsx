import Image from 'next/image';
import Header from '@/components/shared/Header';

export default async function ProfileLoadingPage() {
  return (
    <>
      <Header title="Profile" logo="/assets/icons/profile.svg" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">COINS AVAILABLE:</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">0</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE:</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">0</h2>
          </div>
        </div>
      </section>
    </>
  );
}
