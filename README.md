# Weather-App
 The Git repository contains a React application that fetches and displays weather data for a given city using the OpenWeatherMap API. The application allows users to input a city name and retrieve real-time weather information, including the temperature, cloud conditions, and a brief weather description.
The Main component is the main entry point of the application. It uses the Chakra UI library for styling and components, which provides an input field for users to enter a city name and a button to trigger the weather data retrieval.

When the user clicks the "Button" after entering the city name, the application makes an HTTP request to the OpenWeatherMap API using Axios. The API key and base URL are defined as constants at the beginning of the component.

The weather data fetched from the API is then displayed in a Chakra UI Card component with a sky background image. The temperature is converted from Kelvin to Celsius using the kelvinConvertCelsius constant, and other weather data, such as cloud conditions and weather description, is extracted from the API response and displayed accordingly.

The application utilizes useState to manage the city name input, weather data, temperature, cloud conditions, and weather description states. The useEffect hook is used to trigger the API call when the city name changes.

Overall, the application provides a user-friendly interface to check the weather conditions for a specific city and serves as a practical example of integrating an external API and displaying the fetched data in a visually appealing way using Chakra UI components. Developers can refer to this code as a starting point for building weather-related applications or learn how to work with Axios, Chakra UI, and API integration in a React project.
