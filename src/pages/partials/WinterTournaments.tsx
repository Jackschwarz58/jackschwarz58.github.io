import {tournaments} from "../../data/winterScores.ts";
import {Anchor, Badge, Card, Group, SimpleGrid, Stack, Table, Text, Title} from "@mantine/core";
import StatCard from "./StatCard.tsx";
import {players} from "../../data/players.ts";
import {useWinterTournamentData} from "../../hooks/useWinterTournamentData.ts";
import {Link} from "react-router-dom";

export default function WinterTournaments() {
  const { getTournamentWinners, getPlayerWins } = useWinterTournamentData()

  const sorted = [...tournaments].sort((a, b) => b.year - a.year)

  const mostWins = Math.max(0, ...players.map((p) => getPlayerWins(p)))
  const allTimeLeaders = players.filter((p) => getPlayerWins(p) === mostWins && mostWins > 0)

  return (
    <Stack gap="xl">
      <div>
        <Title order={1}>The One Leg Larry Memorial Tournament</Title>
        <Text c="dimmed" mt={4}>The Ryder Cup inspired winter tournament</Text>
      </div>

      <SimpleGrid cols={{ base: 2, sm: 2 }}>
        <StatCard label="Tournaments" value={tournaments.length} />
        <StatCard
          label="All-Time Leader"
          value={allTimeLeaders.length > 0 ? allTimeLeaders.map(p => p.name.split(' ')[0]).join(', ') : '—'}
          sub={mostWins > 0 ? `${mostWins} tournament win${mostWins !== 1 ? 's' : ''}` : undefined}
        />
      </SimpleGrid>

      <div>
        <Title order={3} mb="sm">Tournament History</Title>
        <Card shadow="sm" padding={0} radius="md" withBorder>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Year</Table.Th>
                <Table.Th>Winner</Table.Th>
                <Table.Th>Rounds</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {sorted.map((t) => {
                const tournamentWinners = getTournamentWinners(t.year)
                return (
                  <Table.Tr key={t.id}>
                    <Table.Td fw={700}>{t.year}</Table.Td>
                    <Table.Td>
                      {tournamentWinners.length > 0
                        ? <Group gap={6}>
                          <Badge color="yellow" size="sm">
                            🏆
                          </Badge>
                          {tournamentWinners.map(w => w.name).join(', ')}
                        </Group>
                        : '—'
                      }
                    </Table.Td>
                    <Table.Td>
                      <Anchor component={Link} to={`/winter-tournament/${t.id}`} size="sm">
                        View →
                      </Anchor>
                    </Table.Td>
                  </Table.Tr>
                )
              })}
            </Table.Tbody>
          </Table>
        </Card>
      </div>
    </Stack>
  )
}