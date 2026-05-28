import { Text, Overlay, Title, Container } from '@mantine/core'
import classes from '../styles/landing-header.module.css'
import logo from '../assets/logo-26-sm.png'

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to the Chi Pi Phi Invitational
        </Title>
        <Container size={'100%'}>
          <Text size="lg" className={classes.description}>
            Central Oklahoma's most prestigious and revered golf tournament.
            Played at the award winning Links Golf Club in Edmond Oklahoma, the Chi Pi Phi invitational is a true measure of skill and gamesmanship.
          </Text>
        </Container>
        <img src={logo} alt="Chi Pi Phi Invitational" className={classes.logo} />
      </div>
    </div>
  )
}
