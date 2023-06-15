import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useQuery({
  queryKey: ["Platform"],
  queryFn: () =>
    apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24hr
});

export default usePlatform;
