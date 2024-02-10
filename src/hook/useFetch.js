import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function useFetch(url, query = "") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}/?name=${query}`, { signal });
        setData(data);
      } catch (error) {
        setData([]);
        if (axios.isCancel()) {
          toast.error(error?.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [url, query]);
  return { isLoading, data };
}
export default useFetch;
