import {AppBar , Toolbar , Box , styled, Typography} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
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
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (<>
    <StyledHeader>
        <Toolbar style={{minHeight:56}}>
            <BoxStyle>
                <img src={logoURL} alt="logo" style={{width:75}} />
                <Box style={{display:'flex'}}>
                    <Typography style={{fontSize:'10px' , fontStyle:'italic'}}>Explore&nbsp;
                     <Box component='span' style={{color:'#ffe500'}}>Plus</Box>
                     </Typography>
                     <PlusImage src={subURL} alt="plus" />
                </Box>
            </BoxStyle>
            <Search/>
            <CustomButtons/>
        </Toolbar>
    </StyledHeader>
    </>)
}
export default Header