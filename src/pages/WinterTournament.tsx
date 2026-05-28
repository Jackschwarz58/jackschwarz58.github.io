import { useParams, Link } from 'react-router-dom'
import {
  Title, Text, Stack, Badge, Group, Anchor, Flex
} from '@mantine/core'
import {useWinterTournamentData} from "../hooks/useWinterTournamentData.ts";

export default function WinterTournament() {
  const {
    getTournamentById,
    getTournamentWinners,
  } = useWinterTournamentData()
  const { id } = useParams<{ id: string }>()
  const tournament = id ? getTournamentById(id) : undefined

  if (!tournament) {
    return (
      <Stack>
        <Text>Tournament not found.</Text>
        <Anchor component={Link} to="/">← Back to Home</Anchor>
      </Stack>
    )
  }

  const winners = getTournamentWinners(tournament.year)

  return (
    <Stack gap="xl" style={{ margin: '1.5rem' }}>
      <div>
        <Anchor component={Link} to="/statistics" size="sm" c="dimmed">← All Tournaments</Anchor>
        <Group mt="xs" align="baseline" gap="sm">
          <Title order={2}>{tournament.name}</Title>
          <Badge color="green" size="lg">{tournament.year}</Badge>
        </Group>
        <Text size="sm" c="dimmed">The Links Golf Course - Oklahoma City</Text>
      </div>

      <div>
        <Title order={4} mb="sm">🏆 Winners</Title>
        <Flex gap="md">{winners.map((winner) => (
          <Text size="xl">{winner.name}</Text>
        ))}
        </Flex>
      </div>
    </Stack>
  )
}
