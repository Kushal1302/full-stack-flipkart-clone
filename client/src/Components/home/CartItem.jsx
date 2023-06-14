import { useState } from "react";
import { Box, Button,  Table, TableBody, TableCell, TableRow, Typography  } from "@mui/material"
import styled from "@emotion/styled";
import {Link} from 'react-router-dom' 
import { removeItem } from "../../service/api";



// const theme = createTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 900,
//         lg: 1200,
//         xl: 1536,
//       },
//     },
//   });
  const Row = styled(TableRow)`
    
   & > td {
    border:none;
    padding-top:0px;
    padding-bottom:0;
    
   }
`
const IncDec = styled('span')({
    width:28,
    height:28,
    border:'1px solid #c2c2c2',
    cursor:'pointer',
    borderRadius:'50%',
    textAlign:'center',
    
    
})
const CartItem = ({product , setPrice}) => {
    const [value , setValue] = useState(1);
    
    
    const removeFromCart = async(id) => {
         console.log(id)
         await removeItem(id)
         
         
        
       
    }
    
    
    
    const decVal = () => {
        if(value <= 0){
            setValue(0)
        }else{
            setValue(value => value - 1)
        }
    }
    const incVal = () => {
        setValue(value => value + 1)
    }
    const date = new Date(new Date().getTime() + 5*24*60*60*1000)

    
    return(
    
        
            <>                 {/* left container*/ }
                    <Box style={{padding:10}}>
                        <img src={product.url} alt="" width={100} style={{cursor:'pointer'}}  />
                        <Typography style={{display:"flex" , alignItems:'center ' , marginTop:20}}>
                            <IncDec  onClick={() => decVal()}>-</IncDec>
                            <IncDec >{value}</IncDec>
                            <IncDec onClick={() => incVal()}>+</IncDec>
                        </Typography>
                    </Box>
                    <Box style={{padding:10}}>
                        
                        <Table style={{overflow:'auto'}}>
                            <TableBody>
                                <Row>
                                    <TableCell style={{textDecoration:'none ' , fontWeight:600  , border:'none'}} component={Link} to={`/product/${product.id}`}>{product.title.longTitle} </TableCell>
                                    <TableCell style={{paddingLeft:100}}>Delivery by {date.toDateString()} | Free ₹40 </TableCell>
                                </Row>
                                <Row >
                                    <TableCell >
                                        <span style={{color:'#787878'}}>Seller:BTPLD</span>
                                        <span style={{marginLeft:10}}>
                                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" width={55} alt="" />
                                        </span>    
                                     </TableCell>

                                </Row>
                                <Row>
                                    <TableCell>
                                        <span style={{textDecoration:'line-through' , fontSize:'14px' , color:'#787878'}}>₹{product.price.mrp}</span>&nbsp;&nbsp;
                                        <span style={{fontSize:18 , fontWeight:600}}>₹{product.price.cost}</span>&nbsp;&nbsp;
                                        <span style={{color:'green'}}>{product.price.discount}</span>
                                    </TableCell>
                                </Row>
                                <Row>
                                    <TableCell style={{color:'green'}}>
                                        {product.discount}
                                    </TableCell>
                                </Row>
                                <Row>
                                    <TableCell>
                                    + ₹99 Secured Packaging Fee
                                    </TableCell>
                                </Row>
                                <Row>
                                    <TableCell>
                                        <Button style={{color:'#000' }}>Save For Later</Button>
                                        <Button style={{color:'#000' }} onClick={() => removeFromCart(product.id)}>Remove</Button>
                                    </TableCell>
                                </Row>
                            </TableBody>
                        </Table>
                        
                    </Box> 
                    

                
                
                 {/* right container*/ }
                 
            
                 </>

    
    );
}
export default CartItem