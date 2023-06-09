import styled from "@emotion/styled"
import { Box , InputBase,createTheme, List, ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect , useState} from 'react';
import {useSelector , useDispatch } from 'react-redux';
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
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
const ListWrapper = styled(List)(({theme}) => ({
    position:'absolute',
    background:'#fff',
    color:'#000',
    marginTop:36,
    
    
}))
const Search = () => {
    const [text , setText] = useState('')
    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    const getText = (text) => {
        setText(text)
        console.log(text)
    }
    useEffect(() => {
        dispatch(getProducts())
    } , [dispatch])
    return (<>
        <SearchContainer >
            <InputSearch placeholder="Search for products,brands and more" value={text} onChange = {(e) => getText(e.target.value)}/>
            {
                text && 
                <ListWrapper theme={theme} style={{ }}>
                    
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem  >
                                    <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{textDecoration:'none' , color:'#000' , fontSize:14}}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    
                </ListWrapper>
            }

            <SearchIcon style={{color:'#2874f0' ,marginRight:'12px' , cursor:'pointer'}}/>
        </SearchContainer>
    </>)
}
export default Search