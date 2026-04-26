import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import overrides from "../data/broadcasts.json";

export function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGames() {
            const BASE_URL = "https://statsapi.mlb.com";

            try {
                const res = await fetch(
                    `${BASE_URL}/api/v1/schedule?sportId=1&teamId=136&startDate=2026-03-26&endDate=2026-10-01`
                );

                const data = await res.json();

                const parsed: Game[] = (data.dates || []).flatMap((date: any) => 
                    date.games.map((game: any) => {
                        console.log(game); // <- dont forget to delete this 
                        const isHome =
                            game.teams.home.team.name === "Seattle Mariners";

                        const opponent = isHome
                            ? game.teams.away.team.name
                            : game.teams.home.team.name;

                        const broadcast = 
                            (overrides as Record<number, string>)[game.gamePk] ||
                            "Mariners.TV";

                        const status = game.status.detailedState;

                        return {
                            id: game.gamePk,
                            date: game.gameDate,
                            opponent,
                            home: isHome,
                            broadcast,
                            status,
                            homeScore: game.teams.home.score,
                            awayScore: game.teams.away.score,
                        };
                    })
                );

                setGames(parsed);
            } catch (err) {
                console.error("Error fetching games:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchGames();
    }, []);

    return { games, loading };
}