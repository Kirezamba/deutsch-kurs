import { Box, Typography } from '@mui/material'
import React from 'react'
import { EnumColors } from '../types/colors'
import { TimerState } from '../types/types';
import { Timer } from './timer/index';

interface Props {
  timer: TimerState
}
export const AboutCourse: React.FC<Props> = ({ timer }): React.ReactElement => {
  return (
    <Box sx={{ padding: '5px 15px 15px 15px', mb: '20px', bgcolor: EnumColors.BACKGROUND }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='aboutCourse'>a</a>
      <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
        Почему именно мой курс?
      </Typography>
      <Typography variant='body2'>
        Это не просто авторский курс по изучению немецкого языка. Для меня он означает гораздо больше. Я хочу подарить возможность развиваться, сдвинуться с мертвой точки и сделать большой прорыв в своём немецком!
        Если тебе трудно справиться в одиночку и опускаются лапки, не переживай, я с тобой!
        Значит этот курс для тебя 💜
      </Typography>
      <Typography variant='body2' mt='10px'>
        Тебя ждут интересные и аутентичные материалы, море практики и удовольствия! Гарантирую, что все знания, которые ты получишь на курсе, ты сможешь использовать в жизни!
      </Typography>
      <Typography variant='body2' sx={{ mb: '20px' }}>
        Но советую тебе поторопиться, так как время выгодного предложения ограничено!
      </Typography>
      <Timer timer={timer} />
    </Box>
  )
}
