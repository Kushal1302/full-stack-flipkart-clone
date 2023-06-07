import { Box } from "@mui/material";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import DataProvider from "./context/DataProvider";
function App() {
  
  return (
    <>
    <DataProvider>
      <Header/>
      <Box style={{marginTop:'56px'}}>
        <Home/>

      </Box>
    </DataProvider>
    </>
  );
}

export default App;
