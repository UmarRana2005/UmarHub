import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";
export interface Geners{
    id:number,
    name:string,
    image_background:string,
}
interface FetchResponseGeners{
    count:number,
    results:Geners[],
}
const useGeners = ()=> useData<Geners>('/genres')

export default useGeners;