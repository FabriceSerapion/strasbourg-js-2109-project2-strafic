import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import '../styles/components/Infos-trafic.css';

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

  const striptags = (str) => {
    if (str === null || str === '') return false;
    return str.toString().replace(/(<([^>]+)>)/gi, '');
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
      <Box
        sx={{
          maxWidth: 300,
          flexGrow: 1,
          boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        }}
      >
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
              bgcolor: '#11101D',
              color: 'white',
            }}
          >
            <Typography>{striptags(currentTitle)}</Typography>
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
              bgcolor: 'gold',
              color: 'black',
            }}
          >
            {striptags(currentDate)}
          </Box>
        ) : null}

        {currentNews ? (
          <Box
            sx={{
              height: 'auto',
              maxWidth: 400,
              width: '100%',
              p: 2,
              bgcolor: '#11101D',
              color: 'white',
            }}
          >
            {striptags(currentNews)}
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
