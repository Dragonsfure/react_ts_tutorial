import { useState, useEffect } from "react";
import IBlog from "./interfaces/IBlog";
import IHook from "./interfaces/IHook";

const useFetch = (url: string): IHook => {
  const [data, setData] = useState<IBlog[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json() as Promise<IBlog[]>;
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err:Error) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
