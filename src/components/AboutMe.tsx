import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import about from '../assets/newnewMain.jpg'
import { EnumColors } from '../types/colors';
import { NewButton } from './NewButton';

export function AboutMe() {
  return (
    <Box sx={{ minWidth: '100%', mb: '20px', bgcolor: EnumColors.BACKGROUND }}>
      <a style={{ fontSize: 0, textDecoration: 'none' }} href='123' id='aboutMe'>a</a>
      <CardMedia
        component="img"
        alt="its me"
        src={about}
        height="100%"
        width='100%'
      />
      <CardContent sx={{ width: '100%', }}>
        <Typography sx={{ textAlign: 'center', }} gutterBottom variant="h5" component="div">
          Привет!
        </Typography>
        <Typography variant="body2" >
          Меня зовут Катя, и я преподаю немецкий язык уже 5 лет!
          Здесь ты найдёшь подробное описание моего курса! Если у тебя есть вопросы, пиши мне, и я с удовольствием отвечу на них✨
        </Typography>
      </CardContent>
      <Box sx={{ width: '100%', mb: '15px', textAlign: 'center', }}>
        <NewButton text='Написать' />
      </Box>
    </Box>
  );
}
