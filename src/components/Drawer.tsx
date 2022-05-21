import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { EnumColors } from '../types/colors';
import MoodSharpIcon from '@mui/icons-material/MoodSharp';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import CurrencyRubleSharpIcon from '@mui/icons-material/CurrencyRubleSharp';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import { Socials } from './Socials';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const iconColor: string = EnumColors.SECONDARY
  const drawerOptions = [{ text: 'Обо мне', href: '#aboutMe', icon: <MoodSharpIcon htmlColor={iconColor} /> }, { text: 'О курсе', href: '#aboutCourse', icon: <ImportContactsSharpIcon htmlColor={iconColor} /> }, { text: 'Тарифы', href: '#tariffs', icon: <CurrencyRubleSharpIcon htmlColor={iconColor} /> }, { text: 'Контакты', href: '#socials', icon: <ContactsSharpIcon htmlColor={iconColor} /> }]
  const drawer = (
    <Box sx={{ height: '100vh', bgcolor: EnumColors.PRIMARY }}>
      <Toolbar />
      <Divider />
      <List >
        {drawerOptions.map((opt) => (
          <ListItem key={opt.text} disablePadding>
            <a onClick={handleDrawerToggle} style={{ position: 'absolute', zIndex: 10000, width: '100%', opacity: 0, textDecoration: 'none' }} href={opt.href} >a</a>
            <ListItemButton href={opt.href} onClick={handleDrawerToggle}>
              <ListItemIcon>
                {opt.icon}
              </ListItemIcon>
              <ListItemText sx={{ color: EnumColors.SECONDARY }} primary={opt.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Socials main />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: EnumColors.PRIMARY
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Навигация
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}
