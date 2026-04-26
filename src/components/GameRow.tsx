import type { Game } from "../types/Game";
// import { getBroadcastColor } from "../utils/getBroadcastColor";
import { getGameStatus } from "../utils/getGameStatus";
import { getTeams } from "../utils/getTeams";
import { getGameView } from "../utils/getGameView";

export default function GameRow({ game }: { game: Game }) {
    const gameDate = new Date(game.date);
    const isToday = 
        gameDate.toDateString() === new Date().toDateString();
    const status = getGameStatus(game); // upcoming | live | final

    const formatedDate = gameDate.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
    })

    const startTime = gameDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    })

    const { homeTeam, awayTeam } = getTeams(game);

    const { marinersScore, opponentScore, opponent } = 
        getGameView(game);

    const hasScore = marinersScore != null && opponentScore != null;

    return (
        <div className={`rounded-xl bg-white p-5 ${status === "final" ? "opacity-70" : ""} ${status === "live" ? "ring-2 ring-red-500 animate-pulse" : isToday ? "ring-2 ring-blue-400 ring-offset-2 shadow-md" : ""} shadow-sm transition hover:shadow-md`}>
            
            {/* TOP ROW */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div>
                    {formatedDate}
                </div>

                <div>
                    {status === "live" && (
                        <span className="text-red-500 font-semibold animate-pulse">
                            ● LIVE
                        </span>
                    )}
                </div>
            </div>

            {/* MATCHUP */}
            <div className="text-center text-lg font-semibold">
                {awayTeam} @ {homeTeam}
            </div>

            {/* CENTERPIECE: SCOREBOARD OR START TIME */}
            <div className="text-center text-2xl font-bold">
                {hasScore ? (
                    <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                        <span className={marinersScore! > opponentScore! ? "text-green-600" : ""}>
                            SEA {marinersScore}
                        </span>

                        <span className="text-gray-400">-</span>

                        <span className={opponentScore! > marinersScore! ? "text-green-600" : ""}>
                            {opponent} {opponentScore}
                        </span>
                    </div>
                ) : (
                    // UPCOMING START TIME (fallback)
                    <div>
                        <div className="text-gray-600 text-xl">First Pitch</div>
                        <div className="text-gray-600 text-xl">{startTime}</div>
                    </div>
                )}
            </div>

            {/* BROADCAST */}
            <div className="flex justify-center">
                <div
                    className="rounded-md px-3 text-sm font-medium text-white"
                >
                    {game.broadcast}
                </div>
            </div>
        </div>
    );
}