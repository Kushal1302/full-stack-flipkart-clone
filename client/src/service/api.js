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