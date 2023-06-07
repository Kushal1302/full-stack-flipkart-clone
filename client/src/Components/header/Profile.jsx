import styled from "@emotion/styled"
import { Box, Menu, MenuItem, Typography } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react"
const Component = styled(Menu)`
    margin-top:10px;
`
const Logout = styled(Typography)`
    margin-left:15px;
    font-size:14px;
`
const Profile = ({account , setAccount}) => {
    const [open , setOpen] = useState(false)
    const [anchorEl , setAnchorE1] = useState(null)
    const handleClick = (e) => {
        
        setAnchorE1(e.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setAnchorE1(null)
    }
    const logoutUser = () => {
        setAccount('')
    }
    return (<>
        <Box onClick = {handleClick}><Typography style={{marginTop:'2px'}}>{account}</Typography></Box>
        <Component
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose} 
        >
        <MenuItem onClick={() => { handleClose(); logoutUser()}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
        </Component>
         </> )
}
export default Profile