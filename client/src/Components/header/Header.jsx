import {AppBar , Toolbar , Box , styled, Typography, IconButton , createTheme, Drawer, List, ListItem} from '@mui/material'
import {Menu} from '@mui/icons-material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
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
const StyledHeader = styled(AppBar)({
    background:'#2874f0',
    height:'56px',
    boxShadow:'none'
})
const BoxStyle = styled(Box)({
    marginLeft:'12%',
    lineHeight:0
    
})
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:'3px'
})
const MenuButton = styled(IconButton)(({theme}) => ({
    color:'#fff',
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }

}))
const CustomButtonWrapper = styled(Box)(({theme}) => ({
    margin:'0 auto 0 3%',
    [theme.breakpoints.down('md')]:
    {
        display:'none'
    }
}))

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open , setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const list = () => {
        return <Box style = {{width:200 }} >
                    <List>
                        <ListItem>
                            <CustomButtons/>
                        </ListItem>
                    </List>
                </Box>
    }

    return (<>
    <StyledHeader>
        <Toolbar style={{minHeight:56}}>
            <MenuButton theme ={theme} onClick={handleOpen}>
                <Menu/> 
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {
                    list()
                }
            </Drawer>
            <BoxStyle component={Link} to={'/'} style={{textDecoration:'none'}}>
                <img src={logoURL} alt="logo" style={{width:75}} />
                <Box style={{display:'flex'}}>
                    <Typography style={{fontSize:'10px' , fontStyle:'italic' , color:'#fff'}}>Explore&nbsp;
                     <Box component='span' style={{color:'#ffe500'}}>Plus</Box>
                     </Typography>
                     <PlusImage src={subURL} alt="plus" />
                </Box>
            </BoxStyle>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
    </>)
}
export default Header