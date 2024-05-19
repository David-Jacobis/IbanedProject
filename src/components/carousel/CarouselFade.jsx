import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PrLeal from '../../assets/images/PrLeal.png';
import PrEber from '../../assets/images/PrEber.png';
import PrLuciano from '../../assets/images/PrLuciano.png';
import PrMarcos from '../../assets/images/PrMarcos.png';
import PrFabio from '../../assets/images/PrFabio.png'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Pastor Leal',
    imgPath: PrLeal,
  },
  {
    label: 'Pastor Eber Leal',
    imgPath: PrEber,
  },
  {
    label: 'Pastor Luciano',
    imgPath: PrLuciano,
  },
  {
    label: 'Pastor Marcos',
    imgPath: PrMarcos,
  },
  {
    label: 'Pastor Fábio',
    imgPath: PrFabio,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Box alignItems="center"
    sx={{
      maxWidth: 500,
      flexGrow: 1,
      }}>
      <Paper
        square
        elevation={16}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Próximo
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
    </ThemeProvider>
  );
}

export default SwipeableTextMobileStepper;
