
App Overview:-
This is a simple weather app built using React and the OpenWeather API. The app allows users to search for the weather in a specific city and see the current temperature, description, and a 5-day forecast. Users can also toggle between Celsius and Fahrenheit temperature units.

***************************************************************************************************************************************************************************************

Usage:-
To use the app, simply type the name of a city into the search box and press enter or click the "Search" button. The app will fetch the current weather data and display it on the screen, along with a 5-day forecast.

To toggle between Celsius and Fahrenheit temperature units, click the "Convert to Fahrenheit" or "Convert to Celsius" button.

***************************************************************************************************************************************************************************************

How the app is working:-
This app is created by using create-react-app along with Axios(Axios is a popular JavaScript library that is used to make HTTP requests) 
and openWeatherMap Api.

Q1. Why 'axios' is used?
Ans:- Axios is used to make a GET request to the OpenWeatherMap API, which provides weather information for a specific city. The query (city name) is passed as part of the URL, and the API key is also provided as a query parameter to authenticate the request. The response from the API is in JSON format, which is then processed and used to update the state of the React component, which then triggers a re-render of the UI to show the weather information for the queried city.

***************************************************************************************************************************************************************************************

Installation and Setup:-
For run this file locally follow the steps-
1. To run the app, first clone the repository: 
    "git clone https://github.com/subhajit889/Weather-App.git"
    
2. Then, navigate to the project directory and install the dependencies:
    "cd Weather-App" & "npm install"
    
3. To run the app in development mode, use the following command:
    npm start

***************************************************************************************************************************************************************************************

API Keys:-
This app uses the OpenWeather API to fetch weather data. To use the API, you'll need to sign up for a free API key.
SignUp link :- https://home.openweathermap.org/users/sign_in

Once you have your API key, create a ".env.local" file in the project root directory and add the following line:
    REACT_APP_WEATHER_API_KEY="Your Api Keys"

This will allow the app to access your API key in the "process.env.process.env.REACT_APP_WEATHER_API_KEY" variable.

***************************************************************************************************************************************************************************************

You can use my API key for reference :- 47d323bf2e70ff4a52e00dcbb5fe07bf
but for future use you need a API key.
