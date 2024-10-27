import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UseUserRolePermissionsProps {
  isAdmin: boolean | undefined;
  redirectTo: () => void;
}

export const useUserRolePermissions = (): UseUserRolePermissionsProps => {
  const router = useRouter();
  const { data } = useSession();

  const isAdmin = data?.user?.roles?.some((role) => role === "Admin");

  const redirectTo = () => {
    if (isAdmin) router.push("/admin");
  };

  return { isAdmin, redirectTo };
};
