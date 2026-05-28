import {Badge, Card, Group, Table, Text} from "@mantine/core";
import {Round} from "../../data/Types.ts";
import {useTournamentData} from "../../hooks/useTournamentData.ts";

interface RoundCardProps {
  round: Round
}

export default function RoundCard({ round }: RoundCardProps) {
  const {
    getPlayerById
  } = useTournamentData();

  const scores = Object.entries(round.scores)
    .map(([id, gross]) => ({ id: Number(id), gross: gross as number }))
    .sort((a, b) => a.gross - b.gross)

  const winner = scores[0]

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="sm">
        <div>
          <Text fw={700}>{round.label}</Text>
          <Text size="xs" c="dimmed">{round.course} · {round.date} · Par {round.par}</Text>
        </div>
        {winner && (
          <Badge color="yellow" ml="auto">
            Low round: {winner.gross}
          </Badge>
        )}
      </Group>
      <Table withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Player</Table.Th>
            <Table.Th>Gross</Table.Th>
            <Table.Th>+/- Par</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {scores.map(({ id, gross }) => {
            const diff = gross - round.par
            const player = getPlayerById(id)
            return (
              <Table.Tr key={id}>
                <Table.Td>{player?.name ?? `Player ${id}`}</Table.Td>
                <Table.Td fw={600}>{gross}</Table.Td>
                <Table.Td c={diff > 0 ? 'red' : 'green'}>
                  {diff > 0 ? `+${diff}` : diff}
                </Table.Td>
              </Table.Tr>
            )
          })}
        </Table.Tbody>
      </Table>
    </Card>
  )
}