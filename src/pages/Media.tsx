import {SimpleGrid, Stack, Text, Title} from "@mantine/core";

export default function Media() {
  return (
    <Stack gap="lg" style={{ margin: '1.5rem' }}>
      <Title order={2}>Podcasts</Title>
      <SimpleGrid cols={{ base: 1, lg: 3 }}>
        <Stack gap="xs">
          <Text size="xl">2026</Text>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2267767553%3Fsecret_token%3Ds-KUerzr4Nh7h&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2025</Text>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2135445018%3Fsecret_token%3Ds-s3p3zXJHqb1&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2043892564%3Fsecret_token%3Ds-3OpBHu1Sncg&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2024</Text>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1867589301%3Fsecret_token%3Ds-TlaBA0B5zNc&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1739915022%3Fsecret_token%3Ds-aK6ZHCt2NL1&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2023</Text>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1566518137%3Fsecret_token%3Ds-AsnH3cFZp8M&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </Stack>
        <Stack gap="xs">
          <Text size="xl">2022</Text>
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay; encrypted-media"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1305278596%3Fsecret_token%3Ds-kYazJa81wnj&color=%23c1c1c5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </Stack>
      </SimpleGrid>
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