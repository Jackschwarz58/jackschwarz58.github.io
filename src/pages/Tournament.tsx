import { useParams, Link } from 'react-router-dom'
import {
  Title, Text, Stack, Card, Table, Badge, Group, Anchor, Flex, Grid, Image
} from '@mantine/core'
import {useTournamentData} from "../hooks/useTournamentData.ts";
import RoundCard from "./partials/RoundCard.tsx";
import PairingRoundCard from "./partials/PairingRoundCard.tsx";

const groupImages = import.meta.glob<string>(
    '../assets/images/tournament-group-photos/*',
    { eager: true, query: '?url', import: 'default' },
)

function getGroupImageUrl(year: number): string | undefined {
  return groupImages[`../assets/images/tournament-group-photos/${year}.jpg`]
}

export default function Tournament() {
  const {
    getTournamentById,
    getTournamentLeaderboard,
    getTournamentWinners,
    getTournamentPairings,
  } = useTournamentData()
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

  const board = getTournamentLeaderboard(tournament.id)
  const winners = getTournamentWinners(tournament.year)
  const pairingBoard = getTournamentPairings(tournament.year)

  return (
    <Stack gap="xl" style={{ margin: '1.5rem' }}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
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
                <Text key={winner.id} size="xl">{winner.name}</Text>
            ))}
            </Flex>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Flex justify={{ base: 'center', sm: 'flex-end' }}>
            <Image
              radius="md"
              h={{ base: 160, sm: 200 }}
              w="100%"
              maw={360}
              fit="cover"
              src={getGroupImageUrl(tournament.year)}
          />
          </Flex>
        </Grid.Col>
      </Grid>

      <div>
        <Title order={4} mb="sm">Scramble Pairings</Title>
        {pairingBoard.length > 0 ? (
          <Card shadow="sm" padding={0} radius="md" withBorder>
            <Table striped highlightOnHover withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Pos</Table.Th>
                  <Table.Th>Pairing</Table.Th>
                  <Table.Th>Day 2</Table.Th>
                  <Table.Th>Day 3</Table.Th>
                  <Table.Th>Total</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {pairingBoard.map((pairing, i) => (
                    <Table.Tr key={pairing.id}>
                      <Table.Td>
                        {i === 0 ? <Badge color="yellow">1st</Badge>
                            : i === 1 ? <Badge color="gray">2nd</Badge>
                                : i === 2 ? <Badge color="orange">3rd</Badge>
                                    : <Text size="sm">{i + 1}</Text>}
                      </Table.Td>
                      <Table.Td fw={600}>{pairing.players.map((p) => p.name).join(' & ')}</Table.Td>
                      <Table.Td>{pairing.scores[0] ?? '—'}</Table.Td>
                      <Table.Td>{pairing.scores[1] ?? '—'}</Table.Td>
                      <Table.Td fw={700}>{pairing.total ?? '—'}</Table.Td>
                    </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        ) : (
          <Text c="dimmed" size="sm">No Data (Thanks Trevor)</Text>
        )}
      </div>

      <div>
        <Title order={4} mb="sm">Round 1 (Qualifying)</Title>
        <Card shadow="sm" padding={0} radius="md" withBorder>
          <Table striped highlightOnHover withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Pos</Table.Th>
                <Table.Th>Player</Table.Th>
                <Table.Th>HCP</Table.Th>
                <Table.Th>Total</Table.Th>
                <Table.Th>Avg</Table.Th>
                <Table.Th>Best</Table.Th>
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
                    <Table.Td>{player.handicap === -1 ? '-' : player.handicap}</Table.Td>
                    <Table.Td fw={700}>{player.totalGross}</Table.Td>
                    <Table.Td>{player.avg}</Table.Td>
                    <Table.Td>{player.best}</Table.Td>
                  </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </div>

      <div>
        <Title order={4} mb="sm">Rounds</Title>
        <Stack gap="md">
          {tournament.rounds.map((round) => (
            <RoundCard key={round.id} round={round} />
          ))}
          {pairingBoard.length > 0 && (
            <>
              <PairingRoundCard
                label="Round 2 (Scramble)"
                date={tournament.rounds[0].date}
                course={tournament.rounds[0].course}
                par={tournament.rounds[0].par}
                dayIndex={0}
                pairings={pairingBoard}
              />
              <PairingRoundCard
                label="Round 3 (Scramble)"
                date={tournament.rounds[0].date}
                course={tournament.rounds[0].course}
                par={tournament.rounds[0].par}
                dayIndex={1}
                pairings={pairingBoard}
              />
            </>
          )}
        </Stack>
      </div>
    </Stack>
  )
}
