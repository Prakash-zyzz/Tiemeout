import React from 'react';
import { Box, Typography, Button,useMediaQuery,Divider  } from "@mui/material";
import Logo from "../../assets/TO.png";
import Hero from "../../assets/hero.jpeg";
import SecondImage from "../../assets/TD.jpg";
import ThirdImage from "../../assets/hero-mens.jpeg";
import FourthImage from "../../assets/herowo.jpg";
import FifthImage from "../../assets/feature.jpg"
import { useNavigate } from "react-router-dom";

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  return (
    <Box>
      {/* TIMEOUT LOGO */}
      <Box
        display="flex"
        justifyContent="center"
        onClick={() => navigate("/")}
        sx={{"&:hover":{ cursor:"pointer"}}}
      >
        <img onClick={() => navigate("/")}
        sx={{"&:hover":{ cursor:"pointer"}}} style={{ width: '18%', height: 'auto' }} src={Logo} alt="Logo" />
      </Box>

      {/* HERO IMAGE */}

      <Box display="flex" justifyContent="center" alignItems="center" p='20px 50px' marginLeft="-20px" marginTop="-70px">
        <Box p="0 25px" marginLeft="-20px"> {/* Adjust the padding as needed */}
          <img
            src={Hero}
            alt="Hero"
            style={{ width: '80%', height: 'auto' }}
          />
        </Box>

        <Box p="0 70px"  sx={{ whiteSpace: 'nowrap' }}> {/* Adjust the padding as needed */}
          <Typography sx={{marginLeft:"-330px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black"}}>PARTY</Typography>
          <Typography sx={{marginLeft:"-330px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black",marginTop:"-20px"}}>SEASON</Typography>
          <Typography sx={{marginLeft:"-330px", fontSize:"19px"}}>The winter collection has arrived.</Typography>
          <Typography sx={{marginLeft:"-330px", fontSize:"19px"}}>Discover the latest styles and trends from T|O.</Typography>
          <Button 
            sx={{marginTop:"30px",
            marginLeft:"-330px",
            border: '3px solid black',
            transition: 'background 0.5s',
            background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
            backgroundSize: '200% 100%',
            backgroundPosition: '100% 0',
            '&:hover': {
              backgroundPosition: '0 0',
            },
            fontWeight:"bold",
            fontSize:"15px",
            size:"15px",
            padding: '10px 80px',
            borderRadius:"0px",
          }}
          
          >
          SHOP NOW
          </Button>
        </Box>
      </Box>

      
      {/* SHOWCASE IMAGE */}
      
      <Box display="flex" justifyContent="center" marginBottom="-5px">
        <img 
        src={SecondImage} 
        alt='SecondImage'
        style={{ width: '95.5%', height: 'auto', marginTop: '10px', paddingBottom:"20px" }}
        />
      </Box>
      
      {/* MEN'S COLLECTION */}
     
     <Box sx={{display:"flex", flexDirection: isNonMobile ? "row" : "column",alignItems:"center",justifyContent:"center",p:'20px 0 20px 50px', marginLeft:"20px"}}>

      <Box marginLeft="50px">
        <Typography sx={{marginLeft:"225px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black"}}>MEN'S</Typography>
        <Typography sx={{fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black",marginTop:"-20px"}}>COLLECTION</Typography>
        <Button
          sx={{
            fontWeight:"bold",
            fontSize:"15px",
            size:"15px",
            padding: '10px 80px',
            borderRadius:"0px",
            marginTop:"30px",
            border: '3px solid black',
            transition: 'background 0.5s',
            background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
            backgroundSize: '200% 100%',
            backgroundPosition: '100% 0',
            '&:hover': {
              backgroundPosition: '0 0',
            },
            marginLeft:"188px"
          }}
          onClick={() => {
            navigate("/mens");
          }}
        >
          SHOP NOW
        </Button>
      </Box>
      
      <Box>
        <img
          src={ThirdImage}
          alt='ThirdImage'
          style={{width: '95.12%', height: 'auto',marginLeft:"14px" }}
        />
      </Box>

     </Box>

     {/* WOMEN'S COLLECTION */}
     <Box display="flex" flexDirection={isNonMobile ? "row" : "column"}  justifyContent="center" alignItems="center" p='20px 50px' marginLeft="-20px" marginTop="-10px">
        <Box p="0 25px" marginLeft="-20px"> {/* Adjust the padding as needed */}
          <img
            src={FourthImage}
            alt="FourthImage"
            style={{ width: '80%', height: 'auto' }}
          />
        </Box>

        <Box p="0 70px"  sx={{ whiteSpace: 'nowrap' }}> {/* Adjust the padding as needed */}
          <Typography sx={{marginLeft:"-325px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black"}}>WOMEN'S</Typography>
          <Typography sx={{marginLeft:"-325px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black",marginTop:"-20px"}}>COLLECTION</Typography>
          {/* <Typography sx={{marginLeft:"-330px", fontSize:"19px"}}>The winter collection has arrived.</Typography>
          <Typography sx={{marginLeft:"-330px", fontSize:"19px"}}>Discover the latest styles and trends from T|O.</Typography> */}
          <Button 
            sx={{marginTop:"30px",
            marginLeft:"-320px",
            border: '3px solid black',
            transition: 'background 0.5s',
            background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
            backgroundSize: '200% 100%',
            backgroundPosition: '100% 0',
            '&:hover': {
              backgroundPosition: '0 0',
            },
            fontWeight:"bold",
            fontSize:"15px",
            size:"15px",
            padding: '10px 80px',
            borderRadius:"0px",
          }}
          onClick={() => {
            navigate("/womens");
          }}
          >
          SHOP NOW
          </Button>
        </Box>
      </Box>

      {/* KID'S COLLECTION */}
<Box sx={{display:"flex",flexDirection: isNonMobile ? "row" : "column",alignItems:"center",justifyContent:"center",p:'20px 0 50px 50px', marginLeft:"20px",marginTop:"-10px"}}>

<Box marginLeft="50px">
  <Typography sx={{marginLeft:"254px",fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black"}}>KID'S</Typography>
  <Typography sx={{fontWeight:"bold", fontSize:"60px", fontFamily:"Archivo Black",marginTop:"-20px"}}>COLLECTION</Typography>
  <Button
    sx={{
      fontWeight:"bold",
      fontSize:"15px",
      size:"15px",
      padding: '10px 80px',
      borderRadius:"0px",
      marginTop:"30px",
      border: '3px solid black',
      transition: 'background 0.5s',
      background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '100% 0',
      '&:hover': {
        backgroundPosition: '0 0',
      },
      marginLeft:"188px"
    }}
    onClick={() => {
      navigate("/kids");
    }}
  >
    SHOP NOW
  </Button>
</Box>

<Box>
  <img
    src={FifthImage}
    alt='FifthImage'
    style={{width: '95.12%', height: 'auto',marginLeft:"14px" }}
  />
</Box>

</Box>
<Divider/>
</Box>
  );
};

export default MainCarousel;
