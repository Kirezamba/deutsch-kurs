import { Box, Typography } from '@mui/material';
import React from 'react';
import { EnumColors } from '../types/colors';
import { TimerState } from '../types/types';
import { Timer } from './timer';
interface Props {
  timer: TimerState
}
export const Credit: React.FC<Props> = ({ timer }): React.ReactElement => {
  return (
    <Box sx={{ minWidth: '100%', mb: '50px', bgcolor: EnumColors.BACKGROUND }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='credit'>a</a>
      <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
        Рассрочка:
      </Typography>
      <Typography variant='body2'>
        Важно!
        Если ты заполнял(-а) анкету предзаписи, тебе гарантирована скидка -15% на любой тариф. Чтобы активировать скидку, напиши мне перед оплатой.
      </Typography>
      <Typography variant='body2' sx={{ mb: '20px' }}>
        Но советую тебе поторопиться, так как время выгодного предложения ограничено!
      </Typography>
      <Timer timer={timer} />
    </Box>
  );
}
