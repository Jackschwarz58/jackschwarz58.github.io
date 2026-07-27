import {Types, Winners} from "./types.ts";
import {
  JordanSimmons, TrevorReed, TannerReed, JackSchwarz, LandonWilguess, JesseGarner,
  DiegoZavarce, PrestonProck, JackEdmunson, JacobHearn, GaryFox, ConnorSharp,
  WillHadley, BryceBranson, McClainMueller, KeatonVanSickle, TrystanBrussard,
} from "./players.ts";

export const tournaments: Types[] = [
  {
    id: 'winter-2021',
    name: '2021',
    year: 2021,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2021',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
  {
    id: 'winter-2022',
    name: '2022',
    year: 2022,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2022',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
  {
    id: 'winter-2023',
    name: '2023',
    year: 2023,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2023',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
  {
    id: 'winter-2024',
    name: '2024',
    year: 2024,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2024',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
  {
    id: 'winter-2025',
    name: '2025',
    year: 2025,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2025',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
  {
    id: 'winter-2026',
    name: '2026',
    year: 2026,
    rounds: [
      {
        id: 1, label: 'Round 1', date: '2026',
        course: 'The Links Oklahoma City', par: 35,
        scores: {},
      },
    ],
  },
]

export const winners: Winners[] = [
  {
    year: 2021,
    players: [JordanSimmons, JackEdmunson, TrystanBrussard]
  },
  {
    year: 2022,
    players: [TrevorReed, TannerReed, JordanSimmons, DiegoZavarce, JacobHearn]
  },
  {
    year: 2023,
    players: [TannerReed, TrevorReed, JordanSimmons, DiegoZavarce, PrestonProck, JesseGarner, GaryFox]
  },
  {
    year: 2024,
    players: [TannerReed, TrevorReed, JordanSimmons, PrestonProck, DiegoZavarce, JackSchwarz]
  },
  {
    year: 2025,
    players: [ConnorSharp, TrevorReed, PrestonProck, DiegoZavarce, WillHadley, JackSchwarz]
  },
  {
    year: 2026,
    players: [PrestonProck, LandonWilguess, KeatonVanSickle, JackSchwarz, JesseGarner, BryceBranson, McClainMueller, DiegoZavarce]
  },
]