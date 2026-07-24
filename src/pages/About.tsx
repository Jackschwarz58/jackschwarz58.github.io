import {SimpleGrid, Space, Stack, Title} from "@mantine/core";
import {tournaments} from "../data/scores.ts";
import {tournaments as winterTournaments} from "../data/winterScores.ts";
import {players} from "../data/players.ts";

export default function About() {
  const tournamentCount = tournaments.length;
  const winterTournamentCount = winterTournaments.length;
  const playerCount = players.length;

  return (
    <Stack gap="lg" style={{ margin: '1.5rem' }}>
      <div>
        <Title order={1}>About the Tournaments</Title>
      </div>
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
        <div>
          <Title order={2} style={{ paddingBottom: '.2rem' }}>The Invitational</Title>
          <div>
            What started as fun idea between a few friends has now developed into one of the most competitive and
            exclusive
            golf
            tournaments in Central Oklahoma. The Chi Pi Phi Tournament, and it's sister tournament The One Leg Larry
            Memorial Tournament,
            are two tournaments held at the legendary Links Golf Club in Oklahoma City, Oklahoma. The brutal 9 hole par
            35
            course has been home to {tournamentCount} high stakes clashes amongst our esteemed competition.
          </div>
          <Space h="md" />
          <div>
            On one faithful day in 2017, our founding father <b>Jordan Alexander Simmons</b> had an idea that would
            change lives: what if we held a
            golf tournament at the shittiest course in Oklahoma for very little money? After assembling our inaugural
            group of Jordan Simmons, Tanner Reed,
            Trevor Reed, Jack Schwarz, Landon Wilguess, Jesse Garner, Jackson Hoover, and Jack Edmunson, a tradition was
            born and the rest is golf history.
          </div>
          <Space h="md" />
          <div>
            Today the tournament had grown to include {playerCount} players across our {tournamentCount} summer
            tournaments. Each
            tournament is accompanied with the now standard Pre-Game Podcast, articles, shirts, and various other pieces
            of pageantry.
          </div>
          <Space h="md" />
          <div>
            The tournament is traditionally held deep in the depth of the Oklahoma summer,
            adding an additional layer of gamesmanship and strategy that comes along with such intense play in Oklahoma
            summer heat.
            This is a three round tournament that happens on a Friday Saturday and Sunday. 9 holes are played each day.
            We typically tee off at 9 am each day but have had historically adjusted for inclement weather.
            The format is 2 man scramble where pairings are decided based on the first round of play. The player in
            first will be paired with last and so on. The buy in for the tournament varies by year.
            Teams that place first will win money and the team that places second will get their money back.
          </div>
        </div>
        <div>
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
            <div></div>
            <div>
              <Title order={4} style={{ paddingBottom: '.2rem' }}>The Players Committee:</Title>
              <b>Commissioner:</b> Jordan Simmons
              <br />
              <b>President of the Players Committee:</b> Trevor Reed
              <br />
              <b>Vice President of Course Management:</b> Diego Zavarce
              <br />
              <b>Vice President of Diversity and Inclusion:</b> Jack Schwarz
              <br />
              <b>Vice President of Data Analytics and the Disabled:</b> Tanner Reed
            </div>
          </SimpleGrid>
        </div>
        <div>
          <Title order={2} style={{ paddingBottom: '.2rem' }}>The One Leg Larry Memorial Tournament</Title>
          <div>
            Once upon a time, there was a man who ran the Links Golf Club with an losing iron fist. This man's name (we
            think) was Larry. One day, when playing the Links in college, a few of walked into the Links club house and
            noticed that Larry was missing a leg. On that day his name was legally changed to One Leg Larry.
          </div>
          <Space h="md" />
          <div>
            Fast forward to 2021. After multiple successful years of the summer invitational, there was a rabid hunger
            from the players for a second companion tournament in the winter. The committee assembled and thought, what
            better way to honor One Leg Larry than to make him the namesake of our new tournament. Held in the dead of
            winter, this tournament features similar physical and mental challenges due to the brutal cold and rough
            course conditions.
          </div>
          <Space h="md" />
          <div>
            The tournament has historically been held in December or January, and has
            seen {winterTournamentCount} incredible tournaments. Each tournament is, like the summer, accompanied by a
            Pre-Game Podcast, lunch at Freddy's, and multiple other tournament events.
          </div>
          <Space h="md" />
          <div>
            The One Leg Larry Memorial Tournament is also held at the venerable Links Golf Club in Oklahoma City,
            Oklahoma and is played over 2 days with 3 rounds. Inspired by the Ryder Cup, the format consists of 2 teams
            chosen by the winners of our previous summer tournament. Pairings are decided before and during lunch of the
            tournament. The first 4 holes are a scramble between determined pairings, and the next 5 will be
            alternate shot. Lunch is then enjoyed before we regroup and play 9 holes of 1 v 1 matches determined by the
            captains. Each match is worth 1 point for the winners team. The
            team with the most points at the end will win the trophy and have their name on the trophy. The losers will
            have their plaque ceremoniously stomped upon and placed on the electrical box at the Links cart shack.
          </div>
        </div>
      </SimpleGrid>
    </Stack>
  );
}