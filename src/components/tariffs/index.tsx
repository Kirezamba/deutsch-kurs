import { Box, Typography } from "@mui/material";
import { Tariff, TariffProps } from "./Tariff";

function Tariffs() {
  const tariffs: TariffProps[] = [{
    id: 1, options: ['- Уроки два раза в неделю', '- Участие в разговорных клубах', '- Доступ к платформе - 1 месяц после окончания'], title: 'Минимальный', price: '14990 ₽'
  },
  { id: 2, options: ['- Уроки два раза в неделю', '- Участие в разговорных клубах', '- Обратная связь с проверкой д/з', '- Бонусные материалы', '- Доступ к платформе - 2 месяца после окончания',], title: 'Улучшенный', price: '19890 ₽' },
  { id: 3, options: ['- Уроки два раза в неделю', '- Участие в разговорных клубах', '- Обратная связь с проверкой д/з', '- Бонусные материалы', '- Доступ к платформе - 3 месяца после окончания', '- Индивидуальные занятия со мной'], title: 'Максимальный', price: '34690 ₽' }]

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='tariffs'>a</a>
      <Typography mb='10px' sx={{ textAlign: 'center' }} component='div' variant='h5'>Тарифы:</Typography>
      {tariffs.map(tariff => <Tariff key={tariff.id} id={tariff.id} options={tariff.options} price={tariff.price} title={tariff.title} />)}
    </Box>
  )
}

export default Tariffs;