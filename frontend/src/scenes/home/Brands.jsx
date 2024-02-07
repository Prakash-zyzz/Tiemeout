import { Typography, Box, Divider } from '@mui/material'
import React from 'react'
import CASIO from "../../assets/Casio.png"
import TITAN from "../../assets/titan.png"
import TIMEX from "../../assets/timexs.png"
import FASTRACK from "../../assets/Fastrack.png"
import TISSOT from "../../assets/tissot.png"

const Brands = () => {
  return (
    <Box >
    <Box margin="80px 0" >
        <Box >
            <Typography
               sx={{
                display:"flex",
                fontFamily:"Archivo Black",
                fontSize:"30px",
                fontWeight:"bold",
                justifyContent:"center"
            }}
            >
                OUR BRANDS
            </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" width="50%" margin="auto" padding="80px 0" marginRight="450px">
        <Box>
            <img
              src={CASIO}
              alt='casio'
              style={{
              width:"200px",
              display:"flex",
              justifyContent:"space-between"
              
              }}
            />
        </Box>
        <Box>
            <img
              src={TITAN}
              alt='titan'
              style={{
              width:"200px",
              display:"flex",
              justifyContent:"space-between",
              marginRight:"180px",
              marginLeft:"180px"
              }}
            />
        </Box>
        <Box>
            <img
              src={TIMEX}
              alt='timex'
              style={{
              width:"200px",
              display:"flex",
              justifyContent:"space-between",
              }}
            />
        </Box>
        </Box>
        <Box  display="flex" justifyContent="center" width="70%" margin="auto">
            <Box>
            <img
              src={FASTRACK}
              alt='fastrack'
              style={{
              width:"200px",
              display:"flex",
              justifyContent:"space-between",
              marginRight:"180px"
              }}
            />
            </Box>
            <Box>
            <img
              src={TISSOT}
              alt='tissot'
              style={{
              width:"200px",
              display:"flex",
              justifyContent:"space-between",
              marginTop:"30px"
              }}
            />
            </Box>
        </Box>
     <Divider sx={{marginTop:"100px"}} />
    </Box>
    </Box>
  )
}

export default Brands