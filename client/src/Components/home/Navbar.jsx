import { Box , Typography, styled , createTheme } from "@mui/material"
import { navData } from "../../constants/data"
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
const Component = styled(Box)(({theme}) => ({
    display:'flex',
    margin: '55px 130px 0 130px',
    justifyContent:'space-between',
    [theme.breakpoints.down('lg')]:{
        margin:0,
        overflow:'hidden'
    }
}))


const Container = styled(Box)`
padding:12px 8px;
text-align:center;
cursor:pointer;
`
const Text = styled(Typography)`
   font-size:14px;
   font-weight:600;
`
const Navbar = () => {
    return (<>
        <Component theme={theme}>
            {
                navData.map((val) => {
                    return <Container>
                        <img src={val.url} alt="" style={{width:64}} />
                        <Text>{val.text}</Text>
                    </Container>
            })
            }
        </Component>
    
    </>)
}
export default Navbar