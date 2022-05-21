import { Box, Typography } from '@mui/material'
import React from 'react'
interface Props {
  number: number
  label: string
}
export const TImerSection: React.FC<Props> = ({ number, label }): React.ReactElement => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box>
        <Typography variant="h6">{number}</Typography>
        <Typography variant="body2">{label}</Typography>
      </Box>

    </Box>
  )
}
