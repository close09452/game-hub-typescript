import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["Grnre"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: { count: genres.length, results: genres },
  });
export default useGenre;
