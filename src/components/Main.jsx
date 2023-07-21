import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { Button, Container, Card, Input, CardHeader, CardBody, Heading, Stack, Box, Text, Spinner } from '@chakra-ui/react';
import bgImage from '../assets/bgImage.jpg';

const Main = () => {
  const { handleSubmit, control, setValue } = useForm();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = '0a486f8d82e287a035cf7b02398a52f6';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const kelvinConvertCelsius = 273;

  useEffect(() => {
    // Display default city on page load (you can change this as per your requirement)
    const defaultCity = 'London';
    setValue('city', defaultCity);
    setWeatherData(null); // Clear weather data when the default city is set
    fetchWeatherData(defaultCity);
  }, [setValue]);

  const fetchWeatherData = async (cityName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setIsLoading(false);
  };

  const onSubmit = ({ city }) => {
    setWeatherData(null); // Clear previous weather data
    fetchWeatherData(city);
  };

  const renderWeatherInfo = () => {
    if (!weatherData) {
      return null;
    }

    const { name, main, weather } = weatherData;
    const tempCelsius = Math.floor(main.temp - kelvinConvertCelsius);
    const cloud = weather[0].main;
    const description = weather[0].description.toString().toUpperCase();

    return (
      <Card textAlign='center' bgImg={`url(${bgImage})`} bgPosition='center' bgRepeat='no-repeat' bgSize='cover'>
        <CardHeader>
          <Heading size='md'>{name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                {tempCelsius}°C
              </Heading>
              {/* Display other weather data here */}
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                {cloud}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {description}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );
  };

  return (
    <Container marginTop='50px' display='flex' flexDir='column' gap='10px'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='city'
          control={control}
          defaultValue=''
          render={({ field }) => <Input {...field} placeholder='Enter city name' />}
        />
        <Button type='submit' colorScheme='green' disabled={isLoading}>
          {isLoading ? <Spinner size='md' /> : 'Get Weather'}
        </Button>
      </form>
      {renderWeatherInfo()}
    </Container>
  );
};

export default Main;
