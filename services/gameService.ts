import api from "./api";
import type { Game } from "@/types";

export interface GamesResponse {
  games: Game[];
}

const gameService = {
  async getGames(): Promise<GamesResponse> {
    const response = await api.get<GamesResponse>("/games/list");
    return response.data;
  },
};

export default gameService;

