import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { Sidebar } from "@/components/modules/SideBar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) redirect("/");

  return (
    <main className="root">
      <Sidebar />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
