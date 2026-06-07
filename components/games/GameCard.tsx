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
    <Card shadow="sm" isPressable={false}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={game.thumbnail_url}
          alt={game.title}
          width="100%"
          height="100%"
          className="object-cover"
          fallbackSrc="https://via.placeholder.com/400x225/0D0D0D/FFD12D?text=Game"
        />
      </div>

      <CardBody className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-bold line-clamp-1">{game.title}</h3>
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-default-500">{game.category}</span>
          </div>
        </div>

        <Button
          color="primary"
          fullWidth
          onPress={handlePlay}
          className="font-semibold"
          startContent={<Play className="w-4 h-4" />}
        >
          Play Now
        </Button>
      </CardBody>
    </Card>
  );
}
