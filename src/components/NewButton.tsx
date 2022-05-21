import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import { EnumColors } from '../types/colors'
interface ButtonProps {
  text: string
}
export const NewButton: React.FC<ButtonProps> = ({ text }): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Button href="https://t.me/rarrikate" sx={{
        width: '130px', fontSize: '12px', textTransform: 'none', "&:hover": {
          backgroundColor: EnumColors.TEXT,
          cursor: "pointer",
          color: EnumColors.PRIMARY,
          boxShadow: "10px 10px 10px 10px rgba(159, 134, 104, )",
        }
      }} variant='outlined' color='primary' size="small">{text}</Button>
    </ThemeProvider>
  )
}
