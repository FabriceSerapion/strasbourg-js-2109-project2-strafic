import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import '../styles/components/Infos-trafic.css';

const randomColor = require('randomcolor');

export default function InfosTrafic() {
  const theme = useTheme();
  const [news, setNews] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [currentTitle, setCurrentTitle] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);
  const maxSteps = news.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/siri/2.0/general-message',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setNews(
          response.data.ServiceDelivery.GeneralMessageDelivery[0].InfoMessage
        );

        setCurrentTitle(
          response.data.ServiceDelivery.GeneralMessageDelivery[0].InfoMessage[
            activeStep
          ].Content.Message[0].MessageText[0].Value
        );

        setCurrentDate(
          response.data.ServiceDelivery.GeneralMessageDelivery[0].InfoMessage[
            activeStep
          ].Content.Message[1].MessageText[0].Value
        );

        setCurrentNews(
          response.data.ServiceDelivery.GeneralMessageDelivery[0].InfoMessage[
            activeStep
          ].Content.Message[2].MessageText[0].Value
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [activeStep]);

  return (
    <div className="global-container">
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />

        {currentTitle ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'auto',
              maxWidth: 400,
              width: '100%',
              p: 2,
              bgcolor: randomColor({
                count: 10,
                hue: 'green',
                luminosity: 'light',
              }),
            }}
          >
            <Typography>{currentTitle}</Typography>
          </Box>
        ) : null}

        {currentDate ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'auto',
              maxWidth: 400,
              width: '100%',
              p: 2,
              bgcolor: randomColor({
                count: 10,
                hue: 'yellow',
                luminosity: 'light',
              }),
            }}
          >
            {currentDate}
          </Box>
        ) : null}

        {currentNews ? (
          <Box
            sx={{
              height: 'auto',
              maxWidth: 400,
              width: '100%',
              p: 2,
              bgcolor: randomColor({
                count: 10,
                hue: 'blue',
                luminosity: 'light',
              }),
            }}
          >
            {currentNews}
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
