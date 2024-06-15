import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface Geners{
    id:number,
    name:string,
    image_background:string,
}
interface FetchResponseGeners{
    count:number,
    results:Geners[],
}
const useGeners = ()=>{
    const [geners, setGeners] = useState<Geners[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponseGeners>("/genres", { signal: controller.signal })
        .then((res) => {
          setGeners(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    }, []);
    return { geners, error,isLoading };
}

export default useGeners;