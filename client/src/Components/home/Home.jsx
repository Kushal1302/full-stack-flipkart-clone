import { useEffect } from "react";
import Banner from "./Banner"
import Navbar from "./Navbar"
import Slide from "./Slide";
import {styled , Box} from '@mui/material';
import {useDispatch , useSelector} from 'react-redux'

import {getProducts} from '../../redux/actions/productActions'
const Component = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`
const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.getProducts)
    console.log(products)
    useEffect(() => {
        dispatch(getProducts())
    } , [dispatch])
    return (<>
    
    <Navbar/>
    <Component>
        <Banner/>
        <Slide products = {products}/>
    </Component>
    
    </>)
}
export default Home