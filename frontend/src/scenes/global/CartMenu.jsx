import React from 'react'
import {Box, Typography, Divider, Button, IconButton} from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import{
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);
    const isCartOpen = useSelector((state)=>state.cart.isCartOpen);

    const totalPrice = cart.reduce((total,item) => {
        return total + item.count * item.attributes.price;
    },0);

  return (

    // overlay

    <Box
     display= {isCartOpen ? "block" : "none"}
     backgroundColor = "rgba(0, 0, 0, 0.4)"
     position="fixed"
     zIndex={10}
     width="100%"
     height="100%"
     left="0"
     top="0"
     overflow="auto"
    >

       {/* Modal */}

      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >

        <Box padding="30px" height="100%" overflow="auto">
           <FlexBox mb="15px">
             <Typography variant='h3'>
                you have {cart.length} item in your Shopping Bag
             </Typography>
             <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
            <CloseIcon style={{fontSize:"20px"}}/>
             </IconButton>
           </FlexBox>
           <Divider />
           <Box>
            {cart.map((item)=>(
                <Box key={`${item.attributes.name}-${item.id}`}>
                   <FlexBox p="15px 0">
                     <Box flex="1 1 40%">
                        <img
                         alt={item?.name}
                         width="123px"
                         height="164px"
                         src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
                        />
                     </Box>
                     <Box flex="1 1 60%">
                       <FlexBox mb="5px">
                         <Typography fontWeight="bold" fontSize="15px">
                            {item.attributes.name}
                         </Typography>
                         <IconButton onClick={() => dispatch(removeFromCart({id:item.id}))}>
                            <DeleteOutlineIcon  style={{ fontSize: '25px' }} />
                         </IconButton>
                       </FlexBox>
                       <FlexBox m="15px 0">
                           <Box
                             display="flex"
                             alignItems="center"
                             border={`1.5px solid ${shades.neutral[500]}`}
                             
                           >
                             <IconButton onClick={() => dispatch(decreaseCount({id:item.id}))}>
                               <RemoveIcon  />
                             </IconButton>
                             <Typography >{item.count}</Typography>
                             <IconButton onClick={() => dispatch(increaseCount({id:item.id}))}>
                               <AddIcon  />
                             </IconButton>
                           </Box>
                           <Typography fontWeight="bold" fontSize= '18px'>${item.attributes.price}</Typography>
                       </FlexBox>

                      
                     </Box>
                   </FlexBox>
                   <Divider />
                </Box>
            ))}
           </Box>

           <Box m="20px 0">
             <FlexBox m="20px 0">
               <Typography fontWeight="bold" fontSize= '18px'>
                  SUBTOTAL
               </Typography>
               <Typography fontWeight="bold" fontSize= '18px'>
                  ${totalPrice}
               </Typography>
             </FlexBox>
             <Button
               sx={{
                backgroundColor: 'white',
                fontSize:"12px",
                fontWeight:"bold",
                color: 'black',
                border: '2px solid black',
                borderRadius: 0,
                minWidth: '100%',
                padding: '20px 40px',
                margin: '20px 0',
                transition: 'background 0.5s',
                background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                '&:hover': {
                  backgroundPosition: '0 0',
                },
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
             >
                CHECKOUT
             </Button>
           </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default CartMenu