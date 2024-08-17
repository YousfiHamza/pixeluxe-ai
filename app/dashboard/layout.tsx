import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import { DesktopSidebar } from '@/components/shared/Sidebar/Desktop';
import { MobileSideBar } from '@/components/shared/Sidebar/Mobile';
import { Toaster } from '@/components/ui/toaster';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) redirect('/auth/sign-in');

  return (
    <main className="root bg-slate-200 dark:bg-slate-900">
      <DesktopSidebar />
      <MobileSideBar />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
