import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TimerState } from "../../types/types";
import { TImerSection } from "./TImerSection";

interface TimerProps {
  timer: TimerState
}

export const Timer: React.FC<TimerProps> = ({ timer }): React.ReactElement => {

  return (
    <Box sx={{ width: '100%', mb: '15px' }}>
      <Typography sx={{ textAlign: 'center' }} component='div' variant="h6">Скидка закончится через:</Typography>
      <Box sx={{ padding: '0 10px 0 10px', display: 'flex', justifyContent: 'space-between', textAlign: 'center', width: '100%' }}>
        <TImerSection label="Дней" number={timer.days} />
        <Box mr='10px'>
          <Typography variant="h6">:</Typography>
        </Box>
        <TImerSection label="Часов" number={timer.hours} />
        <Box mr='15px'>
          <Typography variant="h6">:</Typography>
        </Box>
        <TImerSection label="Минут" number={timer.minutes} />
        <Box mr='15px'>
          <Typography variant="h6">:</Typography>
        </Box>
        <TImerSection label="Секунд" number={timer.seconds} />
      </Box>
    </Box>
  );
}