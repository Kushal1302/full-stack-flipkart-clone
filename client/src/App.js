import { Box } from "@mui/material";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
function App() {
  return (
    <>
    <Header/>
    <Box style={{marginTop:'56px'}}>
      <Home/>

    </Box>
    </>
  );
}

export default App;
