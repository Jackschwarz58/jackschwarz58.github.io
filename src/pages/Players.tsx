import { Title, SimpleGrid, Stack } from '@mantine/core'
import { useTournamentData } from "../hooks/useTournamentData.ts"
import PlayerCard from "./partials/PlayerCard.tsx"

export default function Players() {
  const { getAllTimeLeaderboard, getPlayerWins } = useTournamentData()
  const board = getAllTimeLeaderboard()

  const sorted = [...board].sort((a, b) => {
    const winsA = getPlayerWins(a.id)
    const winsB = getPlayerWins(b.id)
    if (winsB !== winsA) return winsB - winsA
    const partsA = a.name.split(' ')
    const partsB = b.name.split(' ')
    const lastA = partsA[partsA.length - 1] ?? ''
    const lastB = partsB[partsB.length - 1] ?? ''
    return lastA.localeCompare(lastB)
  })

  return (
    <Stack gap="lg" style={{ margin: '1.5rem' }}>
      <Title order={2}>Players</Title>
      <SimpleGrid cols={{ base: 1, lg: 3 }}>
        {sorted.map((player) => (
          <PlayerCard key={player.id} player={player} wins={getPlayerWins(player.id)} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
