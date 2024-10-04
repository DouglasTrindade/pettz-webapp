"use client";

import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return <p>Welcome, {session.user?.email}!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
};

export default AdminPage;
