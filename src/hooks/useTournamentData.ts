import {
    AllTimeLeaderboardEntry,
    AllTimeStats,
    PairingLeaderboardEntry,
    Player,
    ScrambleRoundLeaderboardEntry,
    Types,
    TournamentLeaderboardEntry,
    TournamentPlayerEntry,
} from "../data/types.ts";
import { pairings, tournaments, winners } from "../data/scores.ts";
import {players} from "../data/players.ts";

export function useTournamentData() {
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
    function getAllTimeStats(player: Player): AllTimeStats {
        const tournamentsPlayed: TournamentPlayerEntry[] = []
        let totalRounds = 0
        let totalGross = 0
        let bestRound: number | null = null
        let bestTournamentTotal: number | null = null

        for (const t of tournaments) {
            const scores = t.rounds
                .map((r) => r.scores[player.id])
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
            .map((player) => ({ ...player, ...getAllTimeStats(player) }))
            .filter((p) => p.tournamentsCount > 0)
            .sort((a, b) => parseFloat(a.avg ?? '999') - parseFloat(b.avg ?? '999'))
    }

    /** Winners of a specific tournament by year, from the winners array. */
    function getTournamentWinners(year: number): Player[] {
        return winners.find((w) => w.year === year)?.players ?? []
    }

    /** Number of tournaments won by a player. */
    function getPlayerWins(player: Player): number {
        return winners.filter((w) => w.players.some((p) => p.id === player.id)).length
    }

    /** Scramble pairing leaderboard for a tournament year, sorted by lowest combined score. */
    function getTournamentPairings(year: number): PairingLeaderboardEntry[] {
        const entry = pairings.find((p) => p.year === year)
        if (!entry) return []
        return entry.groups
            .map((group) => {
                const played = group.scores.filter((s): s is number => s !== null)
                const total = played.length ? played.reduce((sum, s) => sum + s, 0) : null
                return { ...group, total }
            })
            .sort((a, b) => (a.total ?? Infinity) - (b.total ?? Infinity))
    }

    /** Top scramble round scores across every tournament, lowest first. */
    function getScrambleRoundLeaderboard(limit = 10): ScrambleRoundLeaderboardEntry[] {
        const entries: ScrambleRoundLeaderboardEntry[] = []
        for (const {year, groups} of pairings) {
            const yearWinners = winners.find((w) => w.year === year)?.players ?? []
            for (const group of groups) {
                const won = yearWinners.length > 0
                    && yearWinners.length === group.players.length
                    && group.players.every((p) => yearWinners.some((w) => w.id === p.id))
                group.scores.forEach((score, i) => {
                    if (score !== null && score !== undefined) {
                        entries.push({year, day: i + 2, players: group.players, score, won})
                    }
                })
            }
        }
        return entries.sort((a, b) => a.score - b.score).slice(0, limit)
    }

    return {
        getPlayerById,
        getTournamentById,
        getTournamentLeaderboard,
        getTournamentWinners,
        getTournamentPairings,
        getScrambleRoundLeaderboard,
        getPlayerWins,
        getAllTimeStats,
        getAllTimeLeaderboard,
    }
}