import {
  Space,
  Stack
} from '@mantine/core'
import SummerTournaments from "./partials/SummerTournaments.tsx";
import WinterTournaments from "./partials/WinterTournaments.tsx";

export default function Tournaments() {
  return (
    <Stack gap="xl" style={{ margin: '1.5rem' }}>
      <SummerTournaments />
      <Space h="md"/>
      <WinterTournaments />
    </Stack>
  );
}
