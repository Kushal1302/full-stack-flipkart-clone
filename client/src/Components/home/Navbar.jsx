import { Box , Typography, styled } from "@mui/material"
import { navData } from "../../constants/data"

const Component = styled(Box)`
display:flex;
margin: 55px 130px 0 130px;
justify-content:space-between;
`
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
cursor:pointer;
`
const Text = styled(Typography)`
   font-size:14px;
   font-weight:600;
`
const Navbar = () => {
    return (<>
        <Component>
            {
                navData.map((val) => {
                    return <Container>
                        <img src={val.url} alt="" style={{width:64}} />
                        <Text>{val.text}</Text>
                    </Container>
            })
            }
        </Component>
    
    </>)
}
export default Navbar