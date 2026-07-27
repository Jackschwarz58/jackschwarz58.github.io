import {Badge, Card, Group, Table, Text} from "@mantine/core";
import {PairingLeaderboardEntry} from "../../data/types.ts";

interface PairingRoundCardProps {
  label: string
  date: string
  course: string
  par: number
  dayIndex: number
  pairings: PairingLeaderboardEntry[]
}

export default function PairingRoundCard({ label, date, course, par, dayIndex, pairings }: PairingRoundCardProps) {
  const scores = pairings
    .filter((p) => p.scores[dayIndex] != null)
    .map((p) => ({ id: p.id, name: p.players.map((player) => player.name).join(' & '), gross: p.scores[dayIndex] as number }))
    .sort((a, b) => a.gross - b.gross)

  const winner = scores[0]

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="sm">
        <div>
          <Text fw={700}>{label}</Text>
          <Text size="xs" c="dimmed">{course} · {date} · Par {par}</Text>
        </div>
        {winner && (
          <Badge color="yellow" ml="auto">
            Low round: {winner.gross}
          </Badge>
        )}
      </Group>
      {scores.length > 0 ? (
        <Table withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Pairing</Table.Th>
              <Table.Th>Gross</Table.Th>
              <Table.Th>+/- Par</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {scores.map(({ id, name, gross }) => {
              const diff = gross - par
              return (
                <Table.Tr key={id}>
                  <Table.Td>{name}</Table.Td>
                  <Table.Td fw={600}>{gross}</Table.Td>
                  <Table.Td c={diff > 0 ? 'red' : 'green'}>
                    {diff > 0 ? `+${diff}` : diff}
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      ) : (
        <Text c="dimmed" size="sm">No scores. (Thanks Trevor)</Text>
      )}
    </Card>
  )
}
