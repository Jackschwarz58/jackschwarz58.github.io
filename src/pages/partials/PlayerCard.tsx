import { Player } from "../../data/types.ts"
import { useTournamentData } from "../../hooks/useTournamentData.ts"
import { Anchor, Avatar, Badge, Card, Group, SimpleGrid, Stack, Table, Text } from "@mantine/core"
import { Link } from "react-router-dom"

const playerImages = import.meta.glob<string>(
  '../../assets/players/*.{jpg,png}',
  { eager: true, query: '?url', import: 'default' },
)

function getPlayerImageUrl(id: number): string | undefined {
  return (
    playerImages[`../../assets/players/${id}.jpg`] ??
    playerImages[`../../assets/players/${id}.png`]
  )
}

interface PlayerCardProps {
  player: Player
  wins: number
}

export default function PlayerCard({ player, wins }: PlayerCardProps) {
  const { getAllTimeStats } = useTournamentData()
  const stats = getAllTimeStats(player)

  const winLabel = wins === 1 ? '1 win' : `${wins} wins`
  const handicapLabel = player.handicap === -1 ? '-' : player.handicap;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="md">
        <Avatar color="green" radius="xl" size="lg" src={getPlayerImageUrl(player.id)}>
          {player.name.split(' ').map((n) => n[0]).join('')}
        </Avatar>
        <div>
          <Text fw={700}>{player.name}</Text>
          <Text size="sm" c="dimmed">{player.hometown}</Text>
        </div>
        <Badge ml="auto" color={wins > 0 ? 'yellow' : 'gray'} variant="light">
          {winLabel}
        </Badge>
      </Group>

      <SimpleGrid cols={4} mb="md">
        <Stack gap={2} align="center">
          <Text size="xl" fw={700}>{stats.tournamentsCount}</Text>
          <Text size="xs" c="dimmed" ta="center">Tournaments</Text>
        </Stack>
        <Stack gap={2} align="center">
          <Text size="xl" fw={700}>{stats.avg ?? '—'}</Text>
          <Text size="xs" c="dimmed" ta="center">Avg / Round</Text>
        </Stack>
        <Stack gap={2} align="center">
          <Text size="xl" fw={700}>{stats.bestRound ?? '—'}</Text>
          <Text size="xs" c="dimmed" ta="center">Best Round</Text>
        </Stack>
        <Stack gap={2} align="center">
          <Text size="xl" fw={700}>{handicapLabel}</Text>
          <Text size="xs" c="dimmed" ta="center">Handicap</Text>
        </Stack>
      </SimpleGrid>

      {stats.tournamentsPlayed.length > 0 && (
        <>
          <Text size="xs" fw={600} c="dimmed" tt="uppercase" mb={6}>Tournament History</Text>
          <Table withColumnBorders fz="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Year</Table.Th>
                <Table.Th>Total</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {[...stats.tournamentsPlayed]
                .sort((a, b) => b.tournament.year - a.tournament.year)
                .map(({ tournament, total }) => (
                  <Table.Tr key={tournament.id}>
                    <Table.Td>{tournament.year}</Table.Td>
                    <Table.Td fw={600}>{total}</Table.Td>
                    <Table.Td>
                      <Anchor component={Link} to={`/tournament/${tournament.id}`} size="xs">
                        View →
                      </Anchor>
                    </Table.Td>
                  </Table.Tr>
                ))}
            </Table.Tbody>
          </Table>
        </>
      )}
    </Card>
  )
}
