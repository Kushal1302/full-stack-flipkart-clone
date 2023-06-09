import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS , GET_PRODUCT_DETAIL_SUCCESS , GET_PRODUCT_DETAIL_FAIL , GET_PRODUCT_DETAIL_REQUEST  , GET_PRODUCT_DETAIL_RESET} from "../constants/productConstant"


export const getProductsReducer = (state = {products : []} , action) => {
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {products : action.payload}
        case GET_PRODUCTS_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}
export const getProductDetailReducer = (state = {product : {}} , action) => {
    switch(action.type){
        case GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case GET_PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_PRODUCT_DETAIL_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}
