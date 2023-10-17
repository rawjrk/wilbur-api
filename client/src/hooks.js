import { useState } from "react";

export const useFetch = (url, initData = null) => {
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const run = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await (await fetch(url)).json();

      setLoading(false);
      setData(response);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error;
    }
  };

  return [run, data, loading, error];
};
