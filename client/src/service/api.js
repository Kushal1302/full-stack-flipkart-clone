import axios from 'axios'

export const addUser = async(data) => {
    try{
        return await axios.post('/signup' , data)
    }catch(e){
        console.log(e.message)
    }
}
export const checkLoginUser = async (data) => {
    try {
        return await axios.post('/login' , data)
    } catch (error) {
        console.log(error.message)
    }
}
export const addToCart = async(product) => {
    try {
        return await axios.post('/cart' , product)

    } catch (error) {
        console.log(error.message)
    }
}
export const removeItem = async (id) => {
    try {
        return await axios.delete(`/deleteItem/${id}`)
        
    } catch (error) {
        console.log(error.message)
    }
}