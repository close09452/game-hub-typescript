import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Trailer } from "../entities/Trailer";


const useTrailers = (id: number) =>{
  
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["movies", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
}
 

export default useTrailers;
