import { Title, Card, Table, Badge, Text, Stack } from '@mantine/core'
import {useTournamentData} from "../hooks/useTournamentData.ts";

export default function Leaderboard() {
  const { getAllTimeLeaderboard, getPlayerWins } = useTournamentData()
  const board = getAllTimeLeaderboard()

  return (
    <Stack gap="lg" style={{ margin: '1.5rem' }}>
      <div>
        <Title order={2}>All-Time Leaderboard</Title>
        <Text c="dimmed" size="sm">Ranked by average strokes per round across all summer tournaments</Text>
      </div>

      <Card shadow="sm" padding={0} radius="md" withBorder>
        <Table striped highlightOnHover withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Pos</Table.Th>
              <Table.Th>Player</Table.Th>
              <Table.Th>HCP</Table.Th>
              <Table.Th>Wins</Table.Th>
              <Table.Th>Tournaments</Table.Th>
              <Table.Th>Rounds</Table.Th>
              <Table.Th>Total Strokes</Table.Th>
              <Table.Th>Avg / Round</Table.Th>
              <Table.Th>Best Round</Table.Th>
              <Table.Th>Best Tournament</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {board.map((player, i) => (
              <Table.Tr key={player.id}>
                <Table.Td>
                  {i === 0 ? <Badge color="yellow">1st</Badge>
                    : i === 1 ? <Badge color="gray">2nd</Badge>
                    : i === 2 ? <Badge color="orange">3rd</Badge>
                    : <Text size="sm">{i + 1}</Text>}
                </Table.Td>
                <Table.Td fw={600}>{player.name}</Table.Td>
                <Table.Td>{player.handicap}</Table.Td>
                <Table.Td
                  fw={getPlayerWins(player.id) > 0 ? 700 : undefined}
                  style={getPlayerWins(player.id) > 0 ? { backgroundColor: '#E3AC36' } : undefined}
                >
                  {getPlayerWins(player.id) || '—'}
                </Table.Td>
                <Table.Td>{player.tournamentsCount}</Table.Td>
                <Table.Td>{player.totalRounds}</Table.Td>
                <Table.Td>{player.totalGross}</Table.Td>
                <Table.Td fw={700}>{player.avg}</Table.Td>
                <Table.Td>{player.bestRound}</Table.Td>
                <Table.Td>{player.bestTournamentTotal}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </Stack>
  )
}
