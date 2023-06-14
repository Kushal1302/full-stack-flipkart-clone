import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import {useSelector } from 'react-redux'
import { getDataFromCart } from "../../redux/actions/cartproductAction";
import { useDispatch } from "react-redux";
import { Box , Grid, Table, TableBody, TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
const Row = styled(TableRow)({
    '& > td':{
        border:'none'
    }
})
const Cart = () => {
    const {cartProduct , loading} =  useSelector(state => state.cart)
    const [price , setPrice] = useState(0)
    
    const dispatch = useDispatch()
    useEffect( () =>  {
       
        dispatch(getDataFromCart())
        
    }, [dispatch , loading  ])
    
    return (<>
    <Box style = {{ width:'100%' ,  background:"#e4e7ed" , overflowY:'auto' }}>
        <Grid container lg={10} md={10} sm={10} xs={10} style={{margin:'auto'   }}>
        
                {
                    cartProduct && Object.keys(cartProduct).length && cartProduct.data.map((product) => {
                        
                    return <>
                            
                            <Grid item lg = {8} md={12} style={{display:'flex' , background:'#fff' , margin:'10px 0 0 0'  , padding:'20px' , overflow:'auto' , borderRadius:5 }}>
                                <CartItem product = {product} setPrice={setPrice}/>

                            </Grid>
                        
                        
                    </>
                    })
                }
          
            <Grid item lg={4} md={2}>
                        <Box style={{background:'#fff' , margin:10,  padding:10}}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>PRICE DETAILS</TableCell>
                                    </TableRow>
                                    <Row>
                                        <TableCell>Price (8 items)</TableCell>
                                        <TableCell>₹{price}</TableCell>
                                    </Row>
                                    <Row>
                                        <TableCell>Discount</TableCell>
                                        <TableCell>₹31,361</TableCell>
                                    </Row>
                                    <Row>
                                        <TableCell>Coupons for you</TableCell>
                                        <TableCell>₹63</TableCell>
                                    </Row>
                                    <Row>
                                        <TableCell>Delivery Charges</TableCell>
                                        <TableCell>₹87</TableCell>
                                    </Row>
                                    <Row>
                                        <TableCell>Secured Packaging Fee</TableCell>
                                        <TableCell>₹198</TableCell>
                                    </Row>
                                    
                                </TableBody>
                            </Table>
                        </Box>
                        {/* 
                        Discount
                                − ₹31,361
                                Coupons for you

                                − ₹63
                                Delivery Charges
                                ₹87
                                Secured Packaging Fee
                                ₹198
                                Total Amount
                                ₹1,41,601 */}

            </Grid>
          
          </Grid>
          </Box>
        
        
    </>)
}
export default Cart;