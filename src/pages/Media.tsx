import {SimpleGrid, Stack, Text, Title} from "@mantine/core";

export default function Media() {
  return (
    <Stack gap="lg" style={{ margin: '1.5rem' }}>
      <Title order={2}>Podcasts</Title>
      <Title order={2}>Videos</Title>
      <SimpleGrid cols={{ base: 1, lg: 3 }}>
        <Stack gap="xs">
          <Text size="xl">2024</Text>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ClTi69D_x3Q?si=87FSXEma6smi3khW"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2023</Text>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jreudFw5e-4?si=5-PzHBUees44Mg32"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen />
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2022</Text>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8QPFylpcYBU?si=9H9hTNUGDX4Gc1Tw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen />
        </Stack>
      </SimpleGrid>
      <Title order={2}>Articles</Title>
      <SimpleGrid cols={{ base: 1, lg: 3 }}>
      </SimpleGrid>
    </Stack>
  )
}