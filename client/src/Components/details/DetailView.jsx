import { useEffect } from 'react'
import {Box, Grid,  styled , createTheme} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductDetail } from '../../redux/actions/productActions'
import ActionItem from '../details/ActionItem'
import ProductDetail from './ProductDetail'
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
const Component = styled(Box)`
    margin-top:55px;
    background:#f2f2f2;
`
const Container = styled(Grid)(({theme}) => ({
    background:'#fff',
    display:'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
    
const RightContainer = styled(Grid)(({theme}) => ({
    marginTop:50,
    [theme.breakpoints.down('md')]:{
    }
}))
const DetailView = () => {
    const {id} = useParams() 
    
    const {product , loading} = useSelector(state => state.getProductDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetail(id));
    }, [dispatch, product, id, loading]);
    return (
        <Component>
            {
                product && Object.keys(product).length &&
                            <Container theme={theme} container >
                                <Grid item lg={4} md={4} sm={6} xs={12}>
                                    <ActionItem product={product}/> 
                                </Grid >
                                <RightContainer theme={theme} item lg={8} md={8} sm={6} xs={12}>
                                    <ProductDetail product={product}/>
                                </RightContainer>
                            </Container>
            }
        </Component>
    )
}
export default DetailView