import React from 'react';
import { Link } from 'react-scroll'

import './About.scss';
import 'font-awesome/css/font-awesome.css'



async function getGeoData() {
  let response = await fetch('https://geolocation-db.com/json/')
  return await response.json()
}

async function getWeatherData(lat, long) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6961a843d1a2d12f6cc9f4668124a762`)
  return await response.json()
}

function getWeatherText(weatherCode) {
  switch (weatherCode.toString()[0]) {
    case '2':
      return `Looks like there's thunderstorms currently`
    case '3':
      return `Looks like there's some drizzlies currently`
    case '5':
      return `Looks like it's raining currently`
    case '6':
      return `Looks like it's snowing currently`
    case '7':
      return `Its clear skies currently`
    case '8':
      return `Its currently cloudy`
    default:
      return 'Hi'
    }
}

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    let currentTime = new Date()
    let geoData = await getGeoData()
    let weatherData = await getWeatherData(geoData.latitude, geoData.longitude)

    console.log(geoData)
    this.setState({
      currentTimeOfDay: currentTime.getHours() < 12 ? 'Morning' : currentTime.getHours() < 16 ? 'Afternoon' : currentTime.getHours() < 20 ? 'Evening' : 'Night',
      yearsExperience: currentTime.getFullYear() - 2011,
      vistorCountry: geoData.country,
      vistorState: geoData.state,
      vistorCity: geoData.city,
      visitorPostal: geoData.postal,
      vistorLat: geoData.latitude,
      vistorLong: geoData.longitude,
      weatherText: getWeatherText(weatherData.weather[0].id),
      city: geoData.city,
      state: geoData.state
    })
  }

  render() {
    return (
      <div id="about" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="intro row">
            <div className="hello">Hello, my name is</div>
            <div className="name">Joey Lai</div>
            <div className="title">and I build products</div>
          </div>

          <div className="bio row">
            <p>
              Good {this.state.currentTimeOfDay}, <br/><br/>
              {this.state.weatherText} in {this.state.city}, {this.state.state}
            </p>
          </div>

          <div className="row">
            <Link href="" to="skills" spy={true} smooth={true} offset={-65}>
              <div className="bouncing learn-more">
                Learn More <br/>
                <i className="fa fa-chevron-down"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>)
  }

}

export default About;
