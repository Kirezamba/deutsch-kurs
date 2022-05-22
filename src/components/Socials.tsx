import React from 'react'
import { Box } from '@mui/material';
import telegram from '../assets/teleg.svg'
import vk from '../assets/vk.svg'
import whats from '../assets/whats.svg'

interface SocialPRops {
  main: boolean
}
export const Socials: React.FC<SocialPRops> = ({ main }) => {
  return (
    <Box sx={{ display: 'flex', mt: '30px', justifyContent: 'center', width: '100%' }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='socials'>a</a>

      <div style={{ width: '30px', marginRight: '7px' }}>
        <a href="https://t.me/rarrikate">
          <img src={telegram} alt="telegram" />
        </a>
      </div>
      <div style={{ width: '30px', marginRight: '7px' }}>
        <a href="https://vk.com/rarrikate">
          <img src={vk} alt="vk" />
        </a>
      </div>
      <div style={{ width: '30px' }}>
        <a href="https://wa.me/420774334587">
          <img src={whats} alt="whatsapp" />
        </a>
      </div>
    </Box>
  )
}
