
import Typography from '@mui/material/Typography';
import { Box, List } from '@mui/material';
import React from 'react';
import { NewButton } from '../NewButton';

export interface TariffProps {
  id: number;
  title: string;
  options: string[];
  price: string;
}

export const Tariff: React.FC<TariffProps> = ({ options, price, title }): React.ReactElement => {

  return (
    <Box sx={{ padding: '0 15px 15px 15px', mb: '30px', mt: '20px' }}>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Box sx={{ display: 'flex', mt: '15px' }}>
        <List sx={{ ml: '15px', textAlign: 'center' }}>
          {options.map(opt =>
            <Typography mb='15px' key={opt} variant='body2'>{opt}</Typography>
          )
          }
        </List>

      </Box>

      <Typography sx={{ fontWeight: '700' }} variant="h6" color="text.secondary">
        {price}
      </Typography>
      <Box sx={{ mt: '10px', mb: '10px', textAlign: 'center' }}>
        <NewButton text=' Хочу!' />

      </Box>

    </Box>
  );
}
