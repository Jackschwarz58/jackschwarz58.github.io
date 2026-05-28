import {Card, Text} from "@mantine/core";

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
}

export default function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="xs" c="dimmed" tt="uppercase" fw={600}>{label}</Text>
      <Text size="2rem" fw={700} mt={4}>{value}</Text>
      {sub && <Text size="xs" c="dimmed" mt={2}>{sub}</Text>}
    </Card>
  )
}