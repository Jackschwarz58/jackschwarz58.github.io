import {Pairing, Types, Winners} from "./types.ts";
import {
    JordanSimmons, TrevorReed, TannerReed, JackSchwarz, LandonWilguess, JesseGarner,
    DiegoZavarce, GraysonBoker, PrestonProck, JacksonHoover, JackEdmunson, LandonHamel,
    PrestonParker, McClainMueller, WillHadley, JonGoodin, JacobHearn, ChaseAnderson,
    GaryFox, JarrettCarter, IssacJones, AlexFaught, BryceBranson, ConnorSharp,
    CaymanBishop, BradyBranson, WalkerLaRue, NoahBosley, KeatonVanSickle,
    HaydenFaught, GarretOverbey,
} from "./players.ts";

export const tournaments: Types[] = [
    {
        id: 'invitational-2017',
        name: '2017',
        year: 2017,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2017',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: -1,
                    [TrevorReed.id]: 53,
                    [TannerReed.id]: -1,
                    [JackSchwarz.id]: -1,
                    [LandonWilguess.id]: -1,
                    [JesseGarner.id]: -1,
                    [JacksonHoover.id]: -1,
                    [JackEdmunson.id]: -1,
                },
            },
        ],
    },
    {
        id: 'invitational-2018',
        name: '2018',
        year: 2018,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2018',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 51,
                    [TrevorReed.id]: 59,
                    [TannerReed.id]: 48,
                    [JackSchwarz.id]: 71,
                    [DiegoZavarce.id]: 62,
                    [PrestonProck.id]: 54,
                    [JonGoodin.id]: 76,
                },
            },
        ],
    },
    {
        id: 'invitational-2019',
        name: '2019',
        year: 2019,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2019',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 45,
                    [TrevorReed.id]: 59,
                    [TannerReed.id]: 58,
                    [JackSchwarz.id]: 67,
                    [LandonWilguess.id]: 52,
                    [JesseGarner.id]: 54,
                    [DiegoZavarce.id]: 60,
                    [PrestonProck.id]: 51,
                    [JacksonHoover.id]: 78,
                },
            },
        ],
    },
    {
        id: 'invitational-2020',
        name: '2020',
        year: 2020,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2020',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 47,
                    [TrevorReed.id]: 61,
                    [TannerReed.id]: 50,
                    [JackSchwarz.id]: 62,
                    [LandonWilguess.id]: 52,
                    [GraysonBoker.id]: 71,
                    [PrestonProck.id]: 51,
                    [JacksonHoover.id]: 78,
                    [JackEdmunson.id]: 58,
                    [LandonHamel.id]: 60,
                    [PrestonParker.id]: 82,
                    [McClainMueller.id]: 48,
                },
            },
        ],
    },
    {
        id: 'invitational-2021',
        name: '2021',
        year: 2021,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2021',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 53,
                    [TrevorReed.id]: 67,
                    [TannerReed.id]: 57,
                    [JackSchwarz.id]: 61,
                    [LandonWilguess.id]: 56,
                    [JesseGarner.id]: 63,
                    [DiegoZavarce.id]: 58,
                    [GraysonBoker.id]: 69,
                    [PrestonProck.id]: 54,
                    [McClainMueller.id]: 55,
                    [WillHadley.id]: 81,
                },
            },
        ],
    },
    {
        id: 'invitational-2022',
        name: '2022',
        year: 2022,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2022',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 47,
                    [TrevorReed.id]: 46,
                    [TannerReed.id]: 51,
                    [JackSchwarz.id]: 59,
                    [LandonWilguess.id]: 52,
                    [JesseGarner.id]: 44,
                    [DiegoZavarce.id]: 53,
                    [PrestonProck.id]: 54,
                    [McClainMueller.id]: 56,
                    [JacobHearn.id]: 60,
                    [ChaseAnderson.id]: 47,
                    [GaryFox.id]: 51,
                    [JarrettCarter.id]: 80,
                },
            },
        ],
    },
    {
        id: 'invitational-2023',
        name: '2023',
        year: 2023,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2023',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 53,
                    [TrevorReed.id]: 45,
                    [TannerReed.id]: 51,
                    [JackSchwarz.id]: 52,
                    [LandonWilguess.id]: 47,
                    [JesseGarner.id]: 49,
                    [DiegoZavarce.id]: 54,
                    [PrestonProck.id]: 50,
                    [McClainMueller.id]: 54,
                    [ChaseAnderson.id]: 46,
                    [GaryFox.id]: 50,
                    [JarrettCarter.id]: 74,
                    [IssacJones.id]: 43,
                    [AlexFaught.id]: 43,
                    [BryceBranson.id]: 55,
                    [ConnorSharp.id]: 49,
                },
            },
        ],
    },
    {
        id: 'invitational-2024',
        name: '2024',
        year: 2024,
        rounds: [
            {
                id: 1, label: 'Qualifying Round', date: '2024',
                course: 'The Links Oklahoma City', par: 35,
                scores: {
                    [JordanSimmons.id]: 51,
                    [TrevorReed.id]: 51,
                    [TannerReed.id]: 45,
                    [JackSchwarz.id]: 53,
                    [LandonWilguess.id]: 57,
                    [JesseGarner.id]: 48,
                    [DiegoZavarce.id]: 49,
                    [PrestonProck.id]: 49,
                    [McClainMueller.id]: 43,
                    [WillHadley.id]: 60,
                    [ChaseAnderson.id]: 54,
                    [IssacJones.id]: 45,
                    [AlexFaught.id]: 49,
                    [ConnorSharp.id]: 59,
                    [CaymanBishop.id]: 60,
                    [BradyBranson.id]: 53,
                },
            },
        ],
    },
    {
        id: 'invitational-2025',
        name: '2025',
        year: 2025,
        rounds: [
            {
                id: 1,
                label: 'Qualifying Round',
                date: '2025',
                course: 'The Links Oklahoma City',
                par: 35,
                scores: {
                    [JordanSimmons.id]: 52,
                    [TrevorReed.id]: 55,
                    [TannerReed.id]: 54,
                    [JackSchwarz.id]: 52,
                    [LandonWilguess.id]: 55,
                    [JesseGarner.id]: 56,
                    [PrestonProck.id]: 47,
                    [McClainMueller.id]: 48,
                    [AlexFaught.id]: 45,
                    [ConnorSharp.id]: 47,
                    [BradyBranson.id]: 47,
                    [WalkerLaRue.id]: 58,
                    [NoahBosley.id]: 63,
                },
            },
        ],
    },
    {
        id: 'invitational-2026',
        name: '2026',
        year: 2026,
        rounds: [
            {
                id: 1,
                label: 'Qualifying Round',
                date: '2026',
                course: 'The Links Oklahoma City',
                par: 35,
                scores: {
                    [JordanSimmons.id]: 52,
                    [TrevorReed.id]: 50,
                    [TannerReed.id]: 52,
                    [JackSchwarz.id]: 56,
                    [LandonWilguess.id]: 54,
                    [JesseGarner.id]: 52,
                    [DiegoZavarce.id]: 52,
                    [PrestonProck.id]: 49,
                    [JackEdmunson.id]: 66,
                    [LandonHamel.id]: 57,
                    [McClainMueller.id]: 54,
                    [ChaseAnderson.id]: 41,
                    [IssacJones.id]: 39,
                    [AlexFaught.id]: 45,
                    [ConnorSharp.id]: 50,
                    [BradyBranson.id]: 53,
                    [WalkerLaRue.id]: 36,
                    [KeatonVanSickle.id]: 46,
                    [HaydenFaught.id]: 58,
                    [GarretOverbey.id]: 69,
                }
            },
        ],
    },
];

export const pairings: Pairing[] = [
    {
        year: 2021,
        groups: [
            {id: 1, players: [LandonWilguess, JackEdmunson], scores: [38]},
            {id: 2, players: [PrestonProck, TrevorReed], scores: [41]},
            {id: 3, players: [TannerReed, JackSchwarz], scores: [42]},
            {id: 4, players: [JordanSimmons, PrestonProck], scores: [44]},
            {id: 5, players: [McClainMueller, JacksonHoover], scores: [47]},
            {id: 6, players: [LandonWilguess, GraysonBoker], scores: [50]},
        ]
    },
    {
        year: 2021,
        groups: [
            {id: 1, players: [WillHadley, JordanSimmons, GraysonBoker], scores: [41]},
            {id: 2, players: [LandonWilguess, JackSchwarz], scores: [41]},
            {id: 3, players: [JesseGarner, McClainMueller], scores: [40]},
            {id: 4, players: [TrevorReed, PrestonProck], scores: [39]},
            {id: 5, players: [DiegoZavarce, TannerReed], scores: [42]},
        ]
    },
    {
        year: 2022,
        groups: [
            {id: 1, players: [LandonWilguess, TannerReed], scores: [37]},
            {id: 2, players: [GaryFox, DiegoZavarce], scores: [41]},
            {id: 3, players: [ChaseAnderson, McClainMueller], scores: [41]},
            {id: 4, players: [JordanSimmons, PrestonProck], scores: [42]},
            {id: 5, players: [TrevorReed, JackSchwarz], scores: [42]},
            {id: 6, players: [JesseGarner, JacobHearn, JarrettCarter], scores: [46]},
        ]
    },
    {
        year: 2023,
        groups: [
            {id: 1, players: [DiegoZavarce, TrevorReed], scores: [34]},
            {id: 2, players: [McClainMueller, IssacJones], scores: [37]},
            {id: 3, players: [TannerReed, JesseGarner], scores: [38]},
            {id: 4, players: [JackSchwarz, ConnorSharp], scores: [38]},
            {id: 5, players: [PrestonProck, GaryFox], scores: [40]},
            {id: 6, players: [LandonWilguess, JordanSimmons], scores: [41]},
            {id: 7, players: [AlexFaught, JarrettCarter], scores: [42]},
            {id: 8, players: [ChaseAnderson, BryceBranson], scores: [46]},
        ]
    },
    {
        year: 2024,
        groups: [
            {id: 1, players: [CaymanBishop, IssacJones], scores: [39, 43]},
            {id: 2, players: [AlexFaught, JackSchwarz], scores: [40, 39]},
            {id: 3, players: [LandonWilguess, JesseGarner], scores: [41, 42]},
            {id: 4, players: [PrestonProck, ChaseAnderson], scores: [41, 38]},
            {id: 5, players: [TannerReed, ConnorSharp], scores: [40, 37]},
            {id: 6, players: [DiegoZavarce, BradyBranson], scores: [42, 44]},
            {id: 7, players: [JordanSimmons, TrevorReed], scores: [43, 40]},
            {id: 8, players: [WillHadley, McClainMueller], scores: [43, 40]},
        ]
    },
    {
        year: 2025,
        groups: [
            {id: 1, players: [PrestonProck, NoahBosley, WalkerLaRue], scores: [39]},
            {id: 2, players: [AlexFaught, JesseGarner], scores: [39]},
            {id: 3, players: [ConnorSharp, LandonWilguess], scores: [41]},
            {id: 4, players: [BradyBranson, TrevorReed], scores: [41]},
            {id: 5, players: [TannerReed, McClainMueller], scores: [39]},
            {id: 6, players: [JordanSimmons, JackSchwarz], scores: [40]},
        ]
    },
    {
        year: 2026,
        groups: [
            {id: 1, players: [WalkerLaRue, GarretOverbey], scores: [38, 38]},
            {id: 2, players: [IssacJones, JackEdmunson], scores: [37, 40]},
            {id: 3, players: [ChaseAnderson, HaydenFaught], scores: [37, 44]},
            {id: 4, players: [AlexFaught, LandonHamel], scores: [42, 39]},
            {id: 5, players: [KeatonVanSickle, JackSchwarz], scores: [40, 39]},
            {id: 6, players: [PrestonProck, LandonWilguess], scores: [43, 39]},
            {id: 7, players: [TrevorReed, BradyBranson], scores: [42, 36]},
            {id: 8, players: [ConnorSharp, McClainMueller], scores: [41, 38]},
            {id: 9, players: [TannerReed, DiegoZavarce], scores: [41, 38]},
            {id: 10, players: [JordanSimmons, JesseGarner], scores: [39, 39]},
        ]
    }
];

export const winners: Winners[] = [
    {
        year: 2017,
        players: [LandonWilguess, JesseGarner]
    },
    {
        year: 2018,
        players: [LandonWilguess, JackSchwarz]
    },
    {
        year: 2019,
        players: [PrestonProck, JackSchwarz]
    },
    {
        year: 2020,
        players: [LandonWilguess, JackEdmunson]
    },
    {
        year: 2021,
        players: [PrestonProck, TrevorReed]
    },
    {
        year: 2022,
        players: [TannerReed, LandonWilguess]
    },
    {
        year: 2023,
        players: [IssacJones, McClainMueller]
    },
    {
        year: 2024,
        players: [TannerReed, ConnorSharp]
    },
    {
        year: 2025,
        players: [PrestonProck, WalkerLaRue, NoahBosley]
    },
    {
        year: 2026,
        players: [WalkerLaRue, GarretOverbey]
    },
]
