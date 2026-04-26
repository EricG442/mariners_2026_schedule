import type { Game } from "../types/Game";

export function getTeams(game: Game) {
    const homeTeam = game.home ? "SEA" : game.opponent;
    const awayTeam = game.home ? game.opponent : "SEA"

    return { homeTeam, awayTeam };
}