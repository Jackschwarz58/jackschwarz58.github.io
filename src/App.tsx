import {Routes, Route} from 'react-router-dom'
import {AppShell} from '@mantine/core'
import SiteNavbar from './components/Navbar'
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Players from './pages/Players'
import Tournament from './pages/Tournament'
import Tournaments from "./pages/Tournaments.tsx";
import Media from "./pages/Media.tsx";
import WinterTournament from "./pages/WinterTournament.tsx";
import About from "./pages/About.tsx";

export default function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <SiteNavbar />
      </AppShell.Header>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Tournaments />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/players" element={<Players />} />
          <Route path="/tournament/:id" element={<Tournament />} />
          <Route path="/winter-tournament/:id" element={<WinterTournament />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}
