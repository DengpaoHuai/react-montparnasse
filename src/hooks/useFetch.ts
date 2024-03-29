import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return setError(error.message);
      }
      if (error instanceof ErrorEvent) {
        return setError(error.message);
      }
      if (error instanceof PromiseRejectionEvent) {
        return setError(error.reason);
      }
      if (error instanceof DOMException) {
        return setError(error.message);
      }
      if (typeof error === "string") {
        return setError(error);
      }
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
