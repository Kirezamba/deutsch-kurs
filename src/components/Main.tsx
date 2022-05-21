import { Box } from '@mui/system'
import React from 'react'
import { TimerState } from '../types/types'
import useInterval from '../utils/hooks/useInterval'
import { AboutCourse } from './AboutCourse'
import { AboutMe } from './AboutMe'
import { Socials } from './Socials'
import Tariffs from './tariffs'

export const Main = () => {
  const drawerWidth = 240;
  const [timer, setTimer] = React.useState<TimerState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const timerCallback = () => {
    const countdownDate = new Date("June 04 2022 15:00:00").getTime();
    const now = new Date().getTime();
    const diff = countdownDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (diff > 0) {
      setTimer({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    } else {
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };
  useInterval(timerCallback, 1000);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: '55px', paddingBottom: '60px' }}
    >
      <AboutMe />
      <AboutCourse timer={timer} />
      <Tariffs />
      <Socials main={false} />
    </Box>
  )
}


