import APIClient from "../services/api-client";
import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Screenshot from "../entities/Screenshot";

const useScreenshot = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useScreenshot;
