import { useEffect } from "react";
import Banner from "./Banner"
import Navbar from "./Navbar"
import Slide from "./Slide";
import {styled , Box} from '@mui/material';
import {useDispatch , useSelector} from 'react-redux'
import MidSlide from "./MidSlide";

import {getProducts} from '../../redux/actions/productActions'
import MidSection from "./MidSection";
const Component = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`
const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.getProducts)
    console.log(products)
    useEffect(() => {
        document.title = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
        dispatch(getProducts())
    } , [dispatch])
    return (<>
    
    <Navbar/>
    <Component>
        <Banner/>
        <MidSlide products = {products} title = "Deal of the day" timer={true}/>
        <MidSection/>
        <Slide products = {products} title = "Suggested Items" />
    </Component>
    
    </>)
}
export default Home