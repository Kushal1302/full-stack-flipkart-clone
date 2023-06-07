import styled from '@emotion/styled'
import {Box, Button, Dialog, TextField, Typography} from '@mui/material'
import { DataContext } from '../../context/DataProvider'
import { useState , useContext } from 'react'
import { addUser } from '../../service/api'
import { checkLoginUser } from '../../service/api'
const Component = styled(Box)`
height:70vh;
width:90vh;
display:flex;

`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)   center 85% no-repeat;
    height:82%;
    width:28%;
    padding:45px 35px;
    & > p , & > h5{
        font-weight:600;
        color:#fff;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    flex:1;
    padding:25px 35px;
    & > div , & > p , & > button{
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    height:48px;
    background:#fb641b;
    color:#fff;
    border-radius:2px;
    text-transform:none;
    &:hover{
        background:#fb641b; 
    }
`
const RequestOTP = styled(Button)`
    text-transform:none;
    height:48px;
    background:#fff;
    color:#2874fo;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb( 0 0 0 /20%) 
`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;

`
const CreateAccount = styled(Typography)`
    font-size:14px;
    color:#2874f0;
    text-align:center;
    font-weight:600;
    cursor:pointer;
    `
    const accountInitialAccount  = {
        login:{
            view:'login',
            heading:'Login',
            subHeading:"Get access to your Orders, Wishlist and Recommendations"
        },
        signup:{
            view:'signup',
            heading:"Looks like you're new here!",
            subHeading:"Sign up with your mobile number to get started"
        }
    }
    const initialSignUpValues = {
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:''
    }
    const initialLoginValues = {
        username:'',
        password:''
    }
    const Error = styled(Typography)`
    font-size:10px;
    line-height:0;
    color:#ff6161;
    margin-top:10px;
    font-weight:600;
    `
const LoginDialog = ({open , setOpen}) => {
    const [signup , setSignup] = useState(initialSignUpValues)
    const [account , toggleAccount] = useState(accountInitialAccount.login)
    const {setAccount} = useContext(DataContext)
    const [login , setLogin] = useState(initialLoginValues)
    const [error , setError] = useState(false)
    const onInputChange = (e) => {
        console.log(signup)
        setSignup({...signup , [e.target.name] : e.target.value})

    }
    const signUpUser = async () => {
        const res = await addUser(signup) 
        window.alert(res.data.message)
        handleClose()
        setAccount(signup.firstname)
    }
    const handleClose = () => {
        setOpen(false) 
        toggleAccount(accountInitialAccount.login)
        setError(false)
        
    }
    const onValueChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        }

        )
        console.log(login)
    }
    const loginUser = async () => {
        const res = await checkLoginUser(login)
        if(res.data.message === 'Login Successfull'){
            setAccount(res.data.user.firstname)
            handleClose()
        }else{
            setError(true)
            
        }
    }
    return (
        <Dialog open={open} onClose = {() => handleClose()} 
        PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>

                    </Image>
                {
                    account.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' label='Enter Username' name='username' onChange={onValueChange}  />
                        {error && <Error>Please enter valid username or password</Error>}
                        <TextField variant='standard' label='Enter Password' name='password' onChange={onValueChange}  />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Text>
                        <LoginButton onClick={loginUser}>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={() => toggleAccount(accountInitialAccount.signup)}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    
                :
                <>
                    
                <Wrapper>
                    <TextField variant='standard' label='Enter Firstname' onChange={onInputChange} name='firstname' />
                    <TextField variant='standard' label='Enter Lastname' onChange={onInputChange} name='lastname'/>
                    <TextField variant='standard' label='Enter Username' onChange={onInputChange} name='username'/>
                    <TextField variant='standard' label='Enter Email' onChange={onInputChange} name='email'/>
                    <TextField variant='standard' label='Enter Password' onChange={onInputChange} name='password'/>
                    <TextField variant='standard' label='Enter Phone' onChange={onInputChange} name='phone'/>
                    <LoginButton onClick={signUpUser}>Continue</LoginButton> 
                    

                </Wrapper>
                </>
                }
            </Component>
        </Dialog>

    )
}
export default LoginDialog