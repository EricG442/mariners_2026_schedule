import type { Game } from "../types/Game";

export function getGameView(game: Game) {
    return {
        marinersScore: game.home ? game.homeScore : game.awayScore,
        opponentScore: game.home ? game.awayScore : game.homeScore,
        opponent: game.opponent
    };
}