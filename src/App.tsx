import { Container } from "@mui/material";
import ResponsiveDrawer from "./components/Drawer";
import { Main } from "./components/Main";
import { EnumColors } from "./types/colors";

function App() {

  return (
    <Container sx={{ padding: 0, bgcolor: EnumColors.BACKGROUND, textAlign: 'center' }} maxWidth='md' >
      <Main />
      <ResponsiveDrawer />
    </Container>
  );
}

export default App;
