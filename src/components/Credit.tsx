import { Box, Typography } from '@mui/material';
import { EnumColors } from '../types/colors';

export function Credit() {
  return (
    <Box sx={{ minWidth: '100%', mb: '50px', bgcolor: EnumColors.BACKGROUND }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='credit'>a</a>
      <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
        Рассрочка:
      </Typography>
      <Typography variant='body2'>
        Важно!
        Если ты заполнял(-а) анкету предзаписи, тебе гарантирована скидка -15% на любой тариф. Чтобы активировать скидку, напиши мне перед оплатой
      </Typography>
    </Box>
  );
}
