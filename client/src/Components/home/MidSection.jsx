import { Grid , createTheme } from "@mui/material"
import {imageURL} from '../../constants/data'
import styled from "@emotion/styled"

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



const Wrapper = styled(Grid)`
    margin-top:10px;
    background:#fff;
    
`
const Image = styled('img')(({theme}) => ({
    width:'100%',
    marginTop:10,
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}))
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper container lg={12} md={12} sm={12} xs={12}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt=""  width='100%'/>
                        </Grid>
                    ))
                }
        </Wrapper>
        
        
            <Image src={url} alt="covid" theme={theme}/>
       
        </>
    )
}
export default MidSection