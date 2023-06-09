import { Button , Box ,createTheme, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";
import LoginDialog from "../login/LoginDialog";
import {  useState , useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from './Profile';
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
const Wrapper = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    margin:'0 0 0 auto',
    '& > button , & > p , & > div' :{
    fontSize:'14px',
    marginLeft:35,
},
    cursor:'pointer',
    [theme.breakpoints.down('md')]:
    {
        // display:'none'
        display:'block',
        '& > p , & > div  ':{
            margin:0,
            marginTop:10,
            fontSize:16
        },
        '& > button':{
            marginRight:20,
            marginLeft:0,
            background:'#ff9f00',
            color:'#fff'
        }

        
        

    }
}))
const LoginButton = styled(Button)`
padding:5px 40px;
height:32px;
color:#2874f0;
background:#fff;
text-transform:none;
border-radius:2px;
box-shadow:none;
&:hover{
    background:#fff ;
}
font-weight:bold;
`
const CustomButtons = () => {
    const [open , setOpen] = useState(false)
    const {account, setAccount} = useContext(DataContext)
    return (<>
       <Wrapper theme= {theme}>
        {
            account ? <Profile account = {account} setAccount = {setAccount}/> : <LoginButton variant="contained" onClick={() => setOpen(true)}>Login</LoginButton>
        }
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box style = {{display:'flex' }}>
            <ShoppingCartIcon style={{height:'18px' , width:'18px' , marginRight:2}}/>
            <Typography style={{fontSize:'14px'}}>Cart</Typography>

        </Box>
       </Wrapper>
       <LoginDialog open = {open} setOpen = {setOpen}/>
    </>)
}
export default CustomButtons