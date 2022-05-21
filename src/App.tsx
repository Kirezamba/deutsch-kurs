import { Container } from "@mui/material";
import ResponsiveDrawer from "./components/Drawer";
import { Main } from "./components/Main";

function App() {

  return (
    <Container sx={{ padding: 0, bgcolor: '#ded2b8' }} maxWidth='md' >
      <Main />
      <ResponsiveDrawer />
    </Container>
  );
}

export default App;
