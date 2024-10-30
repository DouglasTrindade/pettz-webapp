import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { getSession } from "next-auth/react";

interface User {
  email: string | null | undefined;
  id: string | null | undefined;
  fullName: string | null | undefined;
  roles: string[] | null | undefined;
  token: string | null | undefined;
}

interface Session {
  expires: string | null | undefined;
  user: User | null | undefined;
}

interface UseRecordsResponse<T> {
  records: T[];
  isLoading: boolean;
  isError: boolean;
}

export const useRecords = <T>(
  url: string,
  params = {}
): UseRecordsResponse<T> => {
  const [records, setRecords] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData as Session);
    };

    fetchSession();
  }, []);

  useEffect(() => {
    const fetchRecords = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const headers: { [key: string]: string } = {};

        if (session && session.user?.roles?.includes("Admin")) {
          headers.Authorization = `Bearer ${session.user.token}`;
        }

        const response = await api.get(url, { params, headers });
        setRecords(response.data.records);
      } catch (error) {
        setIsError(true);
        console.error("Erro ao buscar registros:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchRecords();
    }
  }, [url, params, session]);

  return { records, isLoading, isError };
};
