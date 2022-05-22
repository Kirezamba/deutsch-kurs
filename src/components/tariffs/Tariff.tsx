
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import React from 'react';
import { NewButton } from '../NewButton';
import { EnumColors } from '../../types/colors';

export interface TariffProps {
  id: number;
  title: string;
  options: string[];
  price: string;
}

export const Tariff: React.FC<TariffProps> = ({ options, price, title }): React.ReactElement => {

  return (
    <Box sx={{ padding: '15px', mb: '30px', mt: '20px', border: `1px solid ${EnumColors.PRIMARY}`, width: '300px', borderRadius: '15px', boxShadow: '0px 0px 10px 10px rgba(159, 134, 104, 0.4)' }}>
      <Typography sx={{ fontWeight: 700 }} gutterBottom variant="body1" component="div">
        {title}
      </Typography>
      <Box sx={{ mt: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        {options.map(opt =>
          <Typography key={opt} mb='14px' variant='body2'>{opt}</Typography>
        )}
      </Box>


      <Typography sx={{ fontWeight: '700' }} variant="h6" color="text.secondary">
        {price}
      </Typography>
      <Box sx={{ mt: '10px', mb: '10px', textAlign: 'center' }}>
        <NewButton text='Купить' />

      </Box>

    </Box >
  );
}
