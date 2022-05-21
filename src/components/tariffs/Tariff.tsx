
import Typography from '@mui/material/Typography';
import { Box, List, ListItem } from '@mui/material';
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
    <Box sx={{ padding: '0 15px 15px 15px', mb: '30px', bgcolor: '#ded2b8' }}>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <List >
        {options.map(opt =>
          <ListItem disablePadding key={opt}>
            <Typography variant='body2'>{opt}</Typography>
          </ListItem>)
        }
      </List>
      <Typography sx={{ fontWeight: '700' }} variant="h6" color="text.secondary">
        {price}
      </Typography>
      <Box sx={{ mt: '10px', mb: '10px', textAlign: 'center' }}>
        <NewButton text=' Хочу!' />

      </Box>

    </Box>
  );
}
