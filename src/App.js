import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null); // Initialize weather as null

  const searchPressed = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=f16f533981bd0e20d9d6c0075dcf6a4b`)
      .then(res => res.json())
      .then(result => setWeather(result));
  }

  return (
    <div className='weather'>
      <h1>Weather app</h1>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex">
            <input
              type="text"
              placeholder="location"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={searchPressed}>Search</Button>
          </Form>
        </Container>
      </Navbar>
      {weather && ( // Render weather data only if it exists
        <div className='data'>
          <p>Temperature: {weather.main.temp}</p>
          <p>Feels Like: {weather.main.feels_like}</p>
          <p>Min Temperature: {weather.main.temp_min}</p>
          <p>Max Temperature: {weather.main.temp_max}</p>
          <p>Pressure: {weather.main.pressure}</p>
          <p>Humidity: {weather.main.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
