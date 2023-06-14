import { Typography , Box, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from "@emotion/styled";
const SmallText = styled(Box)`
    verticle-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }    
`
const Badge = styled(LocalOfferIcon)`
    font-size:16px;
    margin-right:10px;
    color:#388e3c;
    
`
const ColumnText = styled(TableRow)`
    font-size:14px;
    verticle-align:baseline;
    
    & > td {
        font-size:14px;
        border:none;
        
    }
`
const ProductDetail = ({product}) => {
    const date = new Date(new Date().getTime() + (5*24*60*60*1000))
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
                <Typography>{product.title.longTitle}</Typography>
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                    8 Ratings & 1 Reviews
                    <span><img src={fassured} style={{width: 77, marginLeft: 20}} alt='' /></span>
                </Typography>
                <Typography>
                    <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;
                    <Box component='span' style={{color:'#878787' , textDecoration:'line-through'}}>₹{product.price.mrp}</Box>&nbsp;&nbsp;
                    <Box component='span' style={{color:'green'}}>{product.price.discount}</Box>
                </Typography>
                <Typography style={{fontWeight:'500'}}>Available offers</Typography>
                <SmallText>
                    <Typography><Badge/>Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C</Typography>
                    <Typography><Badge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                    <Typography><Badge/>Buy this product and get upto ₹500 off</Typography>
                    <Typography><Badge/>Purchase now & get 1 surprise cashback coupon in Future</Typography>
                </SmallText>
                <Table style={{overflow:'auto'}}>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                            <TableCell >No Warranty</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color:'#878787'}}>Seller</TableCell>
                            <TableCell >
                                <Box component='span'>
                                    <Typography>SVPeripherals</Typography>
                                    <Typography>7 Days Service Center Replacement/Repair</Typography>
                                    <Typography>GST invoice available</Typography>
                                </Box>
                            </TableCell>
                            
                        </ColumnText>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <img src={adURL} style={{ width: 390 }} alt="" />
                            </TableCell>
                        </TableRow>
                        <ColumnText>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </ColumnText>

                    </TableBody>
                </Table>
        </>
    )
}
export default ProductDetail