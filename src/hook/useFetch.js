import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function useFetch(url, query ="") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`${url}?${query}`);
        setData(data.results);
      } catch (error) {
        setData([]);
        toast.error(error?.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, query]);
  return { isLoading, data };
}
export default useFetch;
