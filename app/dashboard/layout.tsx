import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { DesktopSidebar } from "@/components/modules/Sidebar/Desktop";
import { MobileSideBar } from "@/components/modules/Sidebar/Mobile";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) redirect("/");

  return (
    <main className="root">
      <DesktopSidebar />
      <MobileSideBar />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
