import {
  AllTimeLeaderboardEntry,
  AllTimeStats,
  Player,
  Types,
  TournamentLeaderboardEntry,
  TournamentPlayerEntry,
} from "../data/types.ts";
import { tournaments, winners } from "../data/winterScores.ts";
import {players} from "../data/players.ts";

export function useWinterTournamentData() {
  function getPlayerById(id: number): Player | undefined {
    return players.find((p) => p.id === id)
  }

  function getTournamentById(id: string): Types | undefined {
    return tournaments.find((t) => t.id === id)
  }

  /** Leaderboard for a single tournament, sorted by total gross. */
  function getTournamentLeaderboard(tournamentId: string): TournamentLeaderboardEntry[] {
    const tournament = getTournamentById(tournamentId)
    if (!tournament) return []

    return players
      .flatMap((player): TournamentLeaderboardEntry[] => {
        const roundScores = tournament.rounds.map((r) => r.scores[player.id] ?? null)
        const played = roundScores.filter((s): s is number => s !== null && s !== -1)
        if (!played.length) return []
        const total = played.reduce((sum, s) => sum + s, 0)
        return [{
          ...player,
          roundScores,
          roundsPlayed: played.length,
          totalGross: total,
          best: Math.min(...played),
          avg: (total / played.length).toFixed(1),
        }]
      })
      .sort((a, b) => a.totalGross - b.totalGross)
  }

  /** All-time stats for one player across every tournament. */
  function getAllTimeStats(playerId: number): AllTimeStats {
    const tournamentsPlayed: TournamentPlayerEntry[] = []
    let totalRounds = 0
    let totalGross = 0
    let bestRound: number | null = null
    let bestTournamentTotal: number | null = null

    for (const t of tournaments) {
      const scores = t.rounds
        .map((r) => r.scores[playerId])
        .filter((s): s is number => s !== undefined && s !== -1)
      if (!scores.length) continue

      const tTotal = scores.reduce((sum, s) => sum + s, 0)
      const tBest = Math.min(...scores)

      tournamentsPlayed.push({ tournament: t, rounds: scores.length, total: tTotal, best: tBest })
      totalRounds += scores.length
      totalGross += tTotal
      if (bestRound === null || tBest < bestRound) bestRound = tBest
      if (bestTournamentTotal === null || tTotal < bestTournamentTotal) bestTournamentTotal = tTotal
    }

    return {
      tournamentsPlayed,
      tournamentsCount: tournamentsPlayed.length,
      totalRounds,
      totalGross,
      avg: totalRounds ? (totalGross / totalRounds).toFixed(1) : null,
      bestRound,
      bestTournamentTotal,
    }
  }

  /** All-time leaderboard across every tournament, sorted by avg score per round. */
  function getAllTimeLeaderboard(): AllTimeLeaderboardEntry[] {
    return players
      .map((player) => ({ ...player, ...getAllTimeStats(player.id) }))
      .filter((p) => p.tournamentsCount > 0)
      .sort((a, b) => parseFloat(a.avg ?? '999') - parseFloat(b.avg ?? '999'))
  }

  /** Winners of a specific tournament by year, from the winners array. */
  function getTournamentWinners(year: number): Player[] {
    const entry = winners.find((w) => w.year === year)
    if (!entry) return []
    return entry.players
      .map((id) => getPlayerById(id))
      .filter((p): p is Player => p !== undefined)
  }

  /** Number of tournaments won by a player. */
  function getPlayerWins(playerId: number): number {
    return winners.filter((w) => w.players.includes(playerId)).length
  }

  return {
    getPlayerById,
    getTournamentById,
    getTournamentLeaderboard,
    getTournamentWinners,
    getPlayerWins,
    getAllTimeStats,
    getAllTimeLeaderboard,
  }
}