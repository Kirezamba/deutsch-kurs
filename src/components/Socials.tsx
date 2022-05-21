import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import { EnumColors } from '../types/colors';
import { Box } from '@mui/material';

interface SocialPRops {
  main: boolean
}
export const Socials: React.FC<SocialPRops> = ({ main }) => {
  return (
    <Box sx={{ display: 'flex', mt: '30px', justifyContent: 'center', width: '100%' }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='socials'>a</a>
      <IconButton href='https://www.instagram.com/rarrikate/'>
        <InstagramIcon fontSize='large' sx={{ color: main ? EnumColors.SECONDARY : '#493d3d' }} />
      </IconButton>
      <IconButton href="https://t.me/rarrikate">
        <TelegramIcon sx={{ color: main ? EnumColors.SECONDARY : '#493d3d' }} />
      </IconButton>
    </Box>
  )
}
