"use client";

import { useEffect, useState } from "react";
import gameService from "@/services/gameService";
import GameCard from "@/components/games/GameCard";
import type { Game } from "@/types";

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gameService
      .getGames()
      .then((response) => {
        setGames(response.games || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-8 text-default-500">Loading games...</div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

