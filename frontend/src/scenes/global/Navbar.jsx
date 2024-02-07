import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton} from "@mui/material";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
    RoomOutlined
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from '../../state';

const greetings = ['LOGIN TO ACCOUNT TO GET EXITING OFFERS ', 'BLACK FRIDAY OFFERS','AVAIL UPCOMING NEW YEAR & CHRISTMAS OFFERS' ];


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state)=>state.cart.cart);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // Change greeting every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <Box position="fixed" width="100%" zIndex="1" >
  <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="50px"
        backgroundColor="#C8F902"
        color="black"
        top="0"
        left="0"
        zIndex="0"
      >
        <Box
          width="95%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box position="inline-block" borderBottom="2px solid" fontWeight="bold" margin="auto" alignItems="center" color="black" fontSize="15px">
            {greetings[currentGreetingIndex]}
          </Box>
        </Box>
      </Box>
      
      
     
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="50px"
      backgroundColor="#000000"
      color="black"
      top="0"
      left="0"
      
    >
        <Box
         width="95%"
         margin="auto"
         display="flex"
         justifyContent="space-between"
         alignItems="center"
        >
          <Box
            onClick={() => navigate("/")}
            sx={{"&:hover":{ cursor:"pointer"}}}
            color="white"
            // fontWeight="bold"
            fontSize="25px"
            zIndex="1"
          >
            TIMEOUT
          </Box>

          <Box
           display="flex"
           justifyContent="space-between"
           columnGap="20px"
           zIndex="2"
          >
            <IconButton sx={{ color : "white",'&:hover': {color: '#C8F902'}}}>
                <SearchOutlined style={{ fontSize: '25px' }} />
            </IconButton>
            <IconButton sx={{ color : "white",'&:hover': {color: '#C8F902'}}}>
                <PersonOutline style={{ fontSize: '25px' }} />
            </IconButton>
            <IconButton sx={{ color : "white",'&:hover': {color: '#C8F902'}}}>
                <RoomOutlined style={{ fontSize: '25px' }} />
            </IconButton>

            <Badge
            badgeContent={cart.length}
            
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
                color:"#000000",
                backgroundColor:"#C8F902",
              },
            }}
          >
            <IconButton
             onClick={()=>dispatch(setIsCartOpen({}))}
             sx={{ color : "white",'&:hover': {color: '#C8F902'}}}>
                <ShoppingBagOutlined style={{ fontSize: '25px' }} />
            </IconButton>
            </Badge>

            <IconButton sx={{ color : "white","&:hover":{color:"#C8F902"}}}>
                <MenuOutlined style={{ fontSize: '25px' }} />
            </IconButton>




          </Box>
        </Box>

    </Box>
    </Box>

    

    
  )
}

export default Navbar