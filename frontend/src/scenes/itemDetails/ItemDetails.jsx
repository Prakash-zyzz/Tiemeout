import React,{ useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Box, Button, IconButton, Typography, Tabs, Tab, Divider} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item";
import Logo from '../../assets/TO.png';
import { useNavigate } from "react-router-dom";


const ItemDetails = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const {itemId} = useParams();
 const [value,setValue] = useState("description");
 const [count,setCount]= useState(1);
 const [item,setItem]=useState(null);
 const [items,setItems]=useState([]);

 const handleChange = (event,newValue)=>{
  setValue(newValue);
 }

 async function getItem(){
  const item = await fetch(
    `http://localhost:1337/api/items/${itemId}?populate=image`,
    { method: "GET"}
  );
   const itemJson = await item.json();
   setItem(itemJson.data);
 }

 async function getItems(){
  const items = await fetch (
    "http://localhost:1337/api/items?populate=image",
    {method:"GET"}
  );
  const itemsJson = await items.json();
  setItems(itemsJson.data);
 }

 useEffect(()=>{
  getItem();
  getItems();
 },[itemId])
 

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <img onClick={() => navigate("/")} style={{ width: '18%', height: 'auto',cursor:"pointer" }} src={Logo} alt="Logo" />
      </Box>

      <Box width="80%" m="-65px auto 80px">

     
      <Box
       display="flex"
       flexWrap="wrap"
       columnGap="40px"
      >
       {/* IMAGES */}

       <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
            style={{ objectFit: "contain" }}
          />
       </Box>
        
        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
        {/* <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box> */}

          <Box m="65px 0 25px 0">
           <Typography   variant="h3" fontWeight="bold">{item?.attributes?.name}</Typography>
           <Typography fontSize="30px" paddingTop="20px">${item?.attributes?.price}</Typography>
           <Box display="flex" alignItems="center" minHeight="50px">
            <Box
             display="flex"
             alignItems="center"
             border={`1.5px solid ${shades.neutral[300]}`}
             mr="20px"
             mt="10px"
             p="2px 3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{p:"0 5px"}}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box marginTop="10px">
              <Button
                sx={{
                  backgroundColor:"#222222",
                  color:"white",
                  borderRadius:0,
                  minWidth:"150px",
                  padding:"12px 40px",
                  
                }}
                onClick={()=>dispatch(addToCart({item:{...item,count}}))}
              >
                ADD TO CART
              </Button>
            </Box> 
          </Box>
           
           <Typography p="30px 0" >
             <Divider />
             <h3 style={{fontSize:"20px"}}> About this item<br/> </h3>
             <div style={{ padding: "10px 0", fontSize:"15px" }}>
                {Array.isArray(item?.attributes?.description) ? (
                <ul>
                {item?.attributes?.description.map((paragraph, index) => (
                <li key={index}>{paragraph.children[0].text}</li>
                ))}
                </ul>
               ) : (
               item?.attributes?.description
               )}
              </div>
            </Typography>
            <Divider />
            <Typography sx={{ mt: "20px" }}>
              <h3 style={{fontSize:"20px"}}>Product details<br/></h3>
              <div style={{ padding: "10px",fontSize:"15px" }}>
              {Array.isArray(item?.attributes?.details) ? (
                <ul>
                {item?.attributes?.details.map((paragraph, index) => (
                <li key={index}>{paragraph.children[0].text}</li>
                ))}
                </ul>
               ) : (
               item?.attributes?.details
               )}
              </div>
            </Typography>
          </Box>

             
          
        </Box>
      </Box>
      {/* <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab sx={{fontSize:"15px"}} label="DESCRIPTION" value="description" />
          <Tab sx={{fontSize:"15px"}} label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
         {value ==="description" &&
           <div fontSize="15px">{item?.attributes?.shortDescription}</div>
         }

         {value === "review" &&
          <div>Review</div>
         }
      </Box> */}
      <Box>
      <Divider sx={{ width: '125.9%', marginLeft:"-170px" }} />
      </Box>
      
      <Box mt="50px" width="100%" position="relative">
        <Typography fontFamily="Archivo Black" variant="h3" fontWeight="bold" display="flex" justifyContent="center">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
          overflow="auto"
          Position= "absolute"

        >
         {items.slice(0,3).map((item,i)=>(
          <Item key={`${item.name}-${i}`} item={item} />
         ))}
        </Box>
      </Box>
      
    </Box>
    <Divider  />
    </Box>

  )
}

export default ItemDetails