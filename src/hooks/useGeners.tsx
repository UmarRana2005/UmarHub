import genre from "@/data/genre";
export interface Geners{
    id:number,
    name:string,
    image_background:string,
}

const useGeners = ()=>({data:genre,error:null,isLoading:false})

export default useGeners;