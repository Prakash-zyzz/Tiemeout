import { Box, Typography, Button, Input,Divider } from "@mui/material";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box>
    <Box width="80%" margin="80px auto" textAlign="center">
      <Typography variant="h3" fontWeight="bold" fontSize="20px" fontFamily="Archivo Black">
        SUBSCRIBE TO OUR NEWSLETTER
      </Typography>
      <Box
        p="20px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Input
          placeholder="Email Address"
          sx={{
            borderBottom: "3px solid black",
            fontSize: "18px", // Adjust the font size
            width: "350px", // Adjust the width as needed
            marginBottom: "3px",
            padding:"10px 10px" // Add some space between Input and Button
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "0px",
            fontSize: "18px", // Adjust the font size
            width: "200px",
            fontWeight:"bold",
            padding:"10px 30px",
            ":hover": { cursor: "pointer",backgroundColor:"grey" } // Adjust the width as needed
          }}
        >
          SUBSCRIBE
        </Button>
        
      </Box>
      
      
    </Box>

    <Box>
    <Divider />
    </Box>
    </Box>
      
      
   
  );
};

export default Subscribe;
