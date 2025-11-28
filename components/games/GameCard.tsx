"use client";

import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { Play, Gamepad2 } from "lucide-react";
import type { Game } from "@/types";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const handlePlay = () => {
    window.open(game.external_url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group bg-content1 border border-default-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-default-100">
        <Image
          src={game.thumbnail_url}
          alt={game.title}
          width="100%"
          height="100%"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fallbackSrc="https://via.placeholder.com/400x225/0D0D0D/FFD12D?text=Game"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardBody className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground line-clamp-1">
            {game.title}
          </h3>
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-default-500">{game.category}</span>
          </div>
        </div>

        <Button
          color="primary"
          fullWidth
          onPress={handlePlay}
          className="font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
          startContent={<Play className="w-4 h-4" />}
        >
          Play Now
        </Button>
      </CardBody>
    </Card>
  );
}

