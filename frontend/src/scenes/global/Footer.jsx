import { useTheme } from "@emotion/react";
import { Box, Divider, Typography,IconButton } from "@mui/material";
import { shades } from "../../theme";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";




function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box flexWrap="wrap">
    <Box  padding="40px 0px" backgroundColor="white" fontFamily="Archivo Black" marginLeft="10px">
        
      <Box
        width="95%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        
      >
        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
           CUSTOMER CARE
          </Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Contact us</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">My Order</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">My Account</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Payment</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Authenticity</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Our Services</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Holiday Orders</Typography>
        </Box>

        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            SHIPPING & RETURNS
          </Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Shipping</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Track your order</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Returns and exchanges</Typography>
          
        </Box>

        <Box>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            LEGAL AREA
          </Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Terms and Conditions of Sale</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Privacy Policy</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Accessibility</Typography>
          <Typography sx={{":hover":{cursor:"pointer"}}} fontSize="16px" fontWeight="bold" mb="30px">Cookie Policy</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h3" fontWeight="bold" mb="30px">
            FOLLOW US
          </Typography>
         <Box display="flex" justifyContent="space-between">
            <IconButton >
                <FacebookOutlinedIcon style={{ fontSize: '40px',color:"black",padding:"0 2px" }} />
            </IconButton>
            <IconButton >
                <InstagramIcon style={{ fontSize: '40px',color:"black",padding:"0 2px" }} />
            </IconButton>
            <IconButton >
                <TwitterIcon style={{ fontSize: '40px',color:"black",padding:"0 2px" }} />
            </IconButton>
            <IconButton >
                <YouTubeIcon style={{ fontSize: '40px',color:"black",padding:"0 2px" }} />
            </IconButton>
            </Box>
           <Typography variant="h3" fontWeight="bold" mb="30px" marginTop="100px">
             PAYMENT METHODS
           </Typography>
            <Box display="flex" justifyContent="space-between">
            <IconButton sx={{color:"black"}}>
                <RiVisaLine style={{ fontSize: '40px' }} />
            </IconButton>
            <IconButton sx={{color:"black"}}>
                <FaCcPaypal style={{ fontSize: '40px' }}  />
            </IconButton>
            <IconButton sx={{color:"black"}}>
                <SiPaytm style={{ fontSize: '40px' }}  />
            </IconButton>
            {/* <IconButton sx={{color:"black"}}>
                <SiAmericanexpress style={{ fontSize: '40px' }}  />
            </IconButton> */}
            <IconButton sx={{color:"black"}}>
                <FaCcMastercard style={{ fontSize: '40px' }}  />
            </IconButton>
            </Box>
        </Box>
      </Box>
      
    </Box>

    <Box
       width="100%"
       height="100px"
       backgroundColor="#111111"
       color="white"
      >
         <Box display="flex" flexWrap="wrap">
            <Typography sx={{ alignItems:"center",justifyContent:"center",fontSize:"18px",padding:"35px 25px 0",fontWeight:"bold"}}>SHOP IN: INDIA</Typography>
            <Typography sx={{ alignItems:"center",justifyContent:"center",fontSize:"18px",padding:"35px 0 0",borderBottom:"2px solid white",display:"inline",marginLeft:"130px",fontWeight:"bold",":hover":{cursor:"pointer"}}}>Change Location/ Language</Typography>
            
         </Box>
            <Typography marginLeft="1350px" marginTop="-25px" color="#B2BEB5">Powered by REACT- FRAMEWORK</Typography>
            <Typography marginLeft="1250px" color="#B2BEB5" sx={{":hover":{cursor:"pointer",color:"#D9DDDC"}}} borderBottom="1px solid #B2BEB5" display="inline-block">Copyright © 2023 Time Out S.p.A. - AllRights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default Footer;