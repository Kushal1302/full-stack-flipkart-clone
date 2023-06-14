import { Box } from "@mui/material";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import DataProvider from "./context/DataProvider";
import { Route, Routes } from "react-router-dom";
import DetailView from "./Components/details/DetailView";
import ViewAllProduct from "./Components/home/ViewAllProduct";
import Cart from "./Components/home/Cart";
function App() {
  
  
  return (
    <>
    <DataProvider>
      <Header/>
      <Box style={{marginTop:'56px'}}>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/product/:id" element = {<DetailView/>} />
          <Route path="/viewall" element={<ViewAllProduct/>}/>
          <Route path = '/cart' element={<Cart/>}/>
          <Route/>
        </Routes>

      </Box>
    </DataProvider>
    </>
  );
}

export default App;
