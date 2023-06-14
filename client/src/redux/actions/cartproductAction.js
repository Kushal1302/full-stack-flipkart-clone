import axios from "axios";
import { GET_CART_PRODUCT_FAIL , GET_CART_PRODUCT_SUCCESS } from "../constants/cartConstant";
export const getDataFromCart = () => async(dispatch) => {
    try {
        // dispatch({type:GET_PRODUCT_DETAIL_REQUEST })
        const res = await axios.get('/cart')
        dispatch({type:GET_CART_PRODUCT_SUCCESS , payload:res.data})
    } catch (error) {
        dispatch({type:GET_CART_PRODUCT_FAIL , payload:error.message})
    }
}