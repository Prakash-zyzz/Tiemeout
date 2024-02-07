import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import Payment from './Payment';
import Review from './Review';
import Logo from '../../assets/TO.png';
import { useNavigate } from "react-router-dom";
import { Divider } from '@mui/material';



// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const steps = ['Shipping address', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Payment />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      
      <Box display="flex" justifyContent="center">
        <img onClick={() => navigate("/")} style={{ width: '18%', height: 'auto',cursor:"pointer" }} src={Logo} alt="Logo" />
      </Box>
      
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4,marginTop:"-100px" }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, marginTop:"-500px" }}>
          <Typography component="h1" variant="h2" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    fontSize: index === activeStep ? '100px' : '160px', // Set the desired font size
                    color: index === activeStep ? 'green' : 'pink', // Change color when active
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom sx={{textAlign:"center"}}>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1" sx={{textAlign:"center"}}>
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1,borderRadius:"0",backgroundColor:'black',color:"white" }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  
                  onClick={handleNext}
                  
                  sx={{ mt: 3, ml: 1,borderRadius:"0",backgroundColor:"transparent",color:"black",border: '2px solid black',
                  transition: 'background 0.5s',
                  background: 'linear-gradient(to right, #C8F902, #C8F902 50%, white 50%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '100% 0',
                  '&:hover': {
                    backgroundPosition: '0 0',
                  },padding:"10px 50px" }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
      <Divider />
    </React.Fragment>
  );
}