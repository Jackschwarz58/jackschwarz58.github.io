export interface Player {
  id: number
  name: string
  handicap: number
  hometown: string
}

export interface Round {
  id: number
  label: string
  date: string
  course: string
  par: number
  scores: Partial<Record<number, number>>
}

export interface Types {
  id: string
  name: string
  year: number
  rounds: Round[]
}

export interface TournamentPlayerEntry {
  tournament: Types
  rounds: number
  total: number
  best: number
}

export interface Winners {
  year: number
  players: Player[]
}

export interface PairingGroup {
  id: number
  players: Player[]
  scores: (number | null)[]
}

export interface Pairing {
  year: number
  groups: PairingGroup[]
}

export interface PairingLeaderboardEntry extends PairingGroup {
  total: number | null
}

export interface ScrambleRoundLeaderboardEntry {
  year: number
  day: number
  players: Player[]
  score: number
  won: boolean
}

export interface AllTimeStats {
  tournamentsPlayed: TournamentPlayerEntry[]
  tournamentsCount: number
  totalRounds: number
  totalGross: number
  avg: string | null
  bestRound: number | null
  bestTournamentTotal: number | null
}

export interface TournamentLeaderboardEntry extends Player {
  roundScores: (number | null)[]
  roundsPlayed: number
  totalGross: number
  best: number
  avg: string
}

export type AllTimeLeaderboardEntry = Player & AllTimeStats

