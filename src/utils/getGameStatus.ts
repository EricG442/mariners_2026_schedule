export function getGameStatus(game: any): "upcoming" | "live" | "final" {
    const state = game.status;

    if (!state) return "upcoming";

    if (
        state === "In Progress" ||
        state === "Live"
    ) {
        return "live";
    }

    if (
        state === "Final" ||
        state === "Game Over"
    ) {
        return "final";
    }

    return "upcoming";
}