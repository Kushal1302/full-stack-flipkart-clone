import styled from "@emotion/styled"
import { Box, Button ,  createTheme} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
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
    minWidth:'40%',
    margin:'40px 0 0 80px',
    
    [theme.breakpoints.down('sm')]:
    {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        margin:'10px 0 0 30px'
        

    },
    

}))
    
    const Image = styled('img')({
        background:'#fff',
        
        width:'90%'
    
    })
    const StyledButton = styled(Button)(({theme}) => ({
        width:'48%',
        height:'50px',
        borderRadius:'2px',
        [theme.breakpoints.down('md')]:
    {
        width:'90%',
        margin:'0 0 8px 0'
        

    }
    }))
        
    
const ActionItem = ({product}) => {
    return (
        <LeftComponent theme={theme}>
            <Box style={{ width:'90%' , padding:'15px'}} >
                <Image src={product.detailUrl} alt="" />
            </Box>
            <StyledButton theme={theme} variant="contained" style={{marginRight:10 , background:'#ff9f00'}}>
                <ShoppingCartIcon style={{marginRight:5}}/>
                Add to Cart
            </StyledButton>
            <StyledButton theme={theme}  variant="contained" style={{background:'#fb641b'}}>
                <FlashOnIcon style={{marginRight:5}}/>
                Buy Now
            </StyledButton>
        </LeftComponent>
    )
}
export default ActionItem