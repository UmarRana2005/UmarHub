import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { StyledString } from "next/dist/build/swc";
import { useEffect, useState } from "react";
export interface Platforms{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platforms}[];
  }
  interface FetchResponse {
    count: number;
    results: Game[];
  }
const useGame = ()=>{
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController
    apiClient
      .get<FetchResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
      return ()=> controller.abort();
  },[]);
  return {games,error}
}

export default useGame;