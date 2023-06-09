import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const ViewAllProduct = () => {
    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        document.title = "Content Store Online - Buy Content Online at Best Price in India | Flipkart.com"
        dispatch(getProducts())
    } , [dispatch])
    return(<>
        <Box style={{width:'90%'  , margin:'auto'}} >
            <Box style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-around'}}>
                {
                    products.map(product => (
                        <Box style={{flex:'1 1 300px auto' , padding:'15px' , textAlign:'center' , textDecoration:'none', color:'inherit'}} component={Link} to={`/product/${product.id}`}>
                            <img src={product.url} alt="" width={150} height={180}/>
                            <Typography>{product.title.shortTitle}</Typography>
                            <Box >
                                {/* <Typography style={{fontWeight:'500'}}>₹{product.price.cost}</Typography> */}
                                <Typography style={{color:"green"}}> Up to {product.price.discount} off</Typography>
                                <Typography style={{}}>{product.tagline}</Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    </>)
}
export default ViewAllProduct