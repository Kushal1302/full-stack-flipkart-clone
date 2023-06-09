import axios from "axios"
import { GET_PRODUCTS_SUCCESS , GET_PRODUCTS_FAIL , GET_PRODUCT_DETAIL_FAIL , GET_PRODUCT_DETAIL_SUCCESS , GET_PRODUCT_DETAIL_REQUEST } from "../constants/productConstant"



export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('/product')
        console.log(res)
        dispatch({type:GET_PRODUCTS_SUCCESS , payload:res.data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL , payload:error.message})
    }
}
export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_DETAIL_REQUEST });
        const { data } = await axios.get(`/product/${id}`);
        
        dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCT_DETAIL_FAIL, payload: error.message});
    }
}