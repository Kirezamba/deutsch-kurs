import { Box, Typography } from "@mui/material";
import { Tariff, TariffProps } from "./Tariff";

function Tariffs() {
  const tariffs: TariffProps[] = [{
    id: 1, options: ['уроки два раза в неделю', 'участие в разговорных клубах', 'доступ к платформе - 1 месяц после окончания'], title: 'Минимальный', price: '14990 ₽'
  },
  { id: 2, options: ['уроки два раза в неделю', 'участие в разговорных клубах', 'обратная связь с проверкой д/з', 'бонусные материалы', 'доступ к платформе - 2 месяца после окончания',], title: 'Улучшенный', price: '19890 ₽' },
  { id: 3, options: ['уроки два раза в неделю', 'участие в разговорных клубах', 'обратная связь с проверкой д/з', 'бонусные материалы', 'доступ к платформе - 3 месяца после окончания', 'индивидуальные занятия со мной'], title: 'Максимальный', price: '34690 ₽' }]

  return (
    <Box >
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='tariffs'>a</a>
      <Typography mb='10px' sx={{ textAlign: 'center' }} component='div' variant='h5'>Тарифы:</Typography>
      {tariffs.map(tariff => <Tariff key={tariff.id} id={tariff.id} options={tariff.options} price={tariff.price} title={tariff.title} />)}
    </Box>
  )
}

export default Tariffs;