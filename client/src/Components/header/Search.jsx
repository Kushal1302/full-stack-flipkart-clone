import styled from "@emotion/styled"
import { Box , InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)({
    background:'#fff',
    width:'38%',
    marginLeft:'10px',
    borderRadius:'2px',
    display:'flex',
    alignItems:'center',
    height:'36px'
})
const InputSearch = styled(InputBase)({
    width:'100%',
    paddingLeft:'16px  ',
    fontSize:'14px'

})
const Search = () => {
    return (<>
        <SearchContainer >
            <InputSearch placeholder="Search for products,brands and more"/>

            <SearchIcon style={{color:'#2874f0' ,marginRight:'12px' , cursor:'pointer'}}/>
        </SearchContainer>
    </>)
}
export default Search