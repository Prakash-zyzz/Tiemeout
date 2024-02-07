import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Typography, Box, Tab, Tabs, useMediaQuery, Divider } from '@mui/material';
import Man from '../assets/man.jpg';
import Logo from '../assets/TO.png';
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import { setItems } from '../state';
import Subscribe from '../scenes/home/Subscribe';




const Mens = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("menWatches");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  console.log("items",items)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const menWatchesItems = items.filter(
    (item) => item.attributes.category === "menWatches"
  );

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <img onClick={() => navigate("/")} style={{ width: '18%', height: 'auto',cursor:"pointer" }} src={Logo} alt="Logo" />
      </Box>

      <Box display="flex" justifyContent="center">
        <img
          style={{ maxWidth: '100%', height: 'auto', width: '100%', maxHeight: '280px', marginTop:"-60px" }}
          src={Man}
          alt="Man"
        />
      </Box>
      <Box width="80%" margin="80px auto">
      
      <Box
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        {/* <Tab label="WOMEN WATCHES" value="menWatches" /> */}
        <Box display="flex">
        <Typography
          sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          display: "inline-block",
          borderBottom: "4px solid black",
          fontSize: "20px",
          fontFamily: "Archivo Black",
          fontWeight:"bold" // Set the borderBottom style here
        }}
>
HOMINES
</Typography>
</Box>

      </Box>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="50px"
        columnGap="2%"
      
      >
        {/* Display menWatchesItems by default */}
        {menWatchesItems.map((item) => (
          <Item  item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
    <Divider  />
    <Subscribe />
    <Divider  />
    </Box>
  );
};

export default Mens;
