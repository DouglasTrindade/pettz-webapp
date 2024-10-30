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
  const [sessionLoaded, setSessionLoaded] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession();
        setSession(sessionData as Session);
      } finally {
        setSessionLoaded(true);
      }
    };

    if (!sessionLoaded) {
      fetchSession();
    }
  }, [sessionLoaded]);

  useEffect(() => {
    if (!sessionLoaded || !url) return;

    const fetchRecords = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const headers: { [key: string]: string } = {};

        if (session?.user?.roles?.includes("Admin") && session.user.token) {
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

    fetchRecords();
  }, [url, params, session, sessionLoaded]);

  return { records, isLoading, isError };
};
