import axios from "axios"
import { GET_PRODUCTS_SUCCESS , GET_PRODUCTS_FAIL } from "../constants/productConstant"



export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('/product')
        console.log(res)
        dispatch({type:GET_PRODUCTS_SUCCESS , payload:res.data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL , payload:error.message})
    }
}