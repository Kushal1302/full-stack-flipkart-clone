import { Box , createTheme } from "@mui/material"
import Slide from "./Slide"

import styled from "@emotion/styled";
const Component = styled(Box)`
    display:flex;
`
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
const LeftComponent = styled(Box)(({theme}) => ({
    width:'83%',
    [theme.breakpoints.down('md')]:
    {
        width:'100%'
    }
}))
const RightComponent  = styled(Box)(({theme}) => ({
    width:'17%',
    marginTop:'10px',
    background:'#fff',    
    padding:'5px',
    marginLeft:'10px',
    textAlign:'center',
    [theme.breakpoints.down('md')]:
    {
        display:'none'
    }
}))
    
    


const MidSlide = ({ products ,title , timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/c403e95f9584da6b.jpg?q=70';

    return (<>
    <Component>
        <LeftComponent theme={theme}>
            <Slide products={products} title={title} timer={timer} />
        </LeftComponent>
        <RightComponent theme={theme}>
            <img src={adURL} alt="Ad" width={217} />
        </RightComponent>
    </Component>
    </>)
}
export default MidSlide