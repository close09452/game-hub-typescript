import React from "react";
import APIClient from "../services/api-client";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import ms from "ms";

const apiClient = new APIClient<Game>(`/games`);

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
