import { useGames } from "./hooks/useGames";
import GameRow from "./components/GameRow";

import './App.css'

function App() {
  const { games, loading } = useGames();

  const completedGames = games.filter(
    (g) => g.status === "Final"
  );

  let wins = 0;
  let losses = 0;

  completedGames.forEach((g) => {
    const marinersScore = g.home ? g.homeScore : g.awayScore;
    const opponentScore = g.home ? g.awayScore : g.homeScore;

    if (marinersScore! > opponentScore!) wins++;
    else losses++;
  })
  
  const pct = (wins / (wins + losses)).toFixed(3);

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center text-xl'>
        Loading...
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-4'>
          <h1 className='text-2xl font-bold leading-tight'>
            Seattle Mariners
          </h1>

          <div className='text-gray-500 text-sm mt-1'>
            {wins} - {losses} record
          </div>

          <div className='text-xs text-gray-400'>
            {pct} win %
          </div>
        </div>

        <div className='space-y-3'>
          {games.map((game) => (
            <GameRow key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
