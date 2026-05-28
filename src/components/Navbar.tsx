import {NavLink} from 'react-router-dom'
import {Group, Text, Anchor} from '@mantine/core'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/statistics', label: 'Tournaments' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/players', label: 'Players' },
  { to: '/media', label: 'Media' },
]

export default function SiteNavbar() {
  return (
    <Group h="100%" px="md" gap="xl">
      <Text fw={700} size="lg" style={{ whiteSpace: 'nowrap' }}>
        ⛳ The Chi Pi Phi Invitational
      </Text>
      <Group gap="md">
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
    </Group>
  )
}
