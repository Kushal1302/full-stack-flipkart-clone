import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import Carousel from "react-multi-carousel"
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  const Component = styled(Box)`
    margin-top:10px;
    background:#fff;
  `
  const Deal = styled(Box)`
    padding:15px 20px;
    display:flex;
    

  `
  const Timer = styled(Box)`
    margin-left:10px;
    display:flex;
    align-items:center;
    color:#7f7f7f;
  `
  const DealText = styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:32px;
  `
  const ViewAllButton = styled(Button)`
    background:#2874f0;
    border-radius:2px;
    margin-left:auto;
    box-shadow:none;
    &:hover{
        background:#2874f0;
    }
    font-size:13px;
    font-weight:600;
  `
  const renderer = ({hours , minutes , seconds}) => {
    return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>
  }
  const Image = styled('img')({
    width:'auto',
    height:150
  })
  const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
  
  `
const Slide = ({products , title , timer}) => {
  
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                  timer && <Timer>
                              <img src={timerURL} alt="" width={24} />
                              <Countdown date={Date.now() + 4.32e+7} renderer={renderer}/>
                          </Timer>
                }
                <ViewAllButton variant="contained" component={Link} to={'/viewall'}>View All</ViewAllButton>
            </Deal>
            <Divider/>
            <Carousel
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                slidesToSlide={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
            {
                products.map(product => (
                    <Box textAlign='center' style={{padding:'25px 15px' , textDecoration:'none' , display:'flex' , alignItems:'center' , flexDirection:'column'}} component={Link} to={`/product/${product.id}`}>
                        <Image src={product.url} alt="Product" />
                        <Text color={"black"} fontWeight='600'>{product.title.shortTitle}</Text>
                        <Text color='green'>{product.discount}</Text>
                        <Text color='#7f7f7f'>{product.tagline}</Text>
                    </Box>
                ))
            }

            </Carousel>
        </Component>
    )
}
export default Slide