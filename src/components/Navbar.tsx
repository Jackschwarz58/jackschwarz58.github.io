import {NavLink} from 'react-router-dom'
import {Group, Text, Anchor, Burger, Drawer, Stack} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/statistics', label: 'Tournaments' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/players', label: 'Players' },
  { to: '/media', label: 'Media' },
]

export default function SiteNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false)

  return (
    <Group h="100%" px="md" justify="space-between" wrap="nowrap">
      <Text fw={700} size="lg" visibleFrom="sm" style={{ whiteSpace: 'nowrap' }}>
        ⛳ The Chi Pi Phi Invitational
      </Text>
      <Text fw={700} size="lg" hiddenFrom="sm" style={{ whiteSpace: 'nowrap' }}>
        ⛳ Chi Pi Phi
      </Text>

      <Group gap="md" visibleFrom="sm">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} end style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <Anchor
                component="span"
                fw={isActive ? 700 : 400}
                c={isActive ? 'green' : 'dark'}
                size="sm"
              >
                {label}
              </Anchor>
            )}
          </NavLink>
        ))}
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

      <Drawer opened={opened} onClose={close} hiddenFrom="sm" padding="md" size="xs" title="">
        <Stack gap="lg">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end onClick={close} style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <Anchor
                  component="span"
                  fw={isActive ? 700 : 400}
                  c={isActive ? 'green' : 'dark'}
                  size="md"
                >
                  {label}
                </Anchor>
              )}
            </NavLink>
          ))}
        </Stack>
      </Drawer>
    </Group>
  )
}
