"use client";

import { useSession } from "next-auth/react";
import { Sidebar } from "./components/Sidebar";
import { Admin } from "./components";

const AdminPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <Sidebar>
      <Admin />
    </Sidebar>
  );
};

export default AdminPage;
