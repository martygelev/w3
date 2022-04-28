import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const route = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.status === 404) {
            throw Error("Source not found");
          }
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
