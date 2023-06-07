import { Button , Box , Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";
import LoginDialog from "../login/LoginDialog";
import {  useState , useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from './Profile'
const Wrapper = styled(Box)`
display:flex;
align-items:center;
justify-content:space-around;
margin:0 auto 0 3%;
& > button , & > p , & > div{
    font-size:14px;
    margin-left:35px;
}
cursor:pointer;
`
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
       <Wrapper>
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