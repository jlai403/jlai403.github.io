import React from 'react';
import { Link } from 'react-scroll'

import './About.scss';
import 'font-awesome/css/font-awesome.css'



async function getGeoData() {
  let response = await fetch('https://geolocation-db.com/json/')
  return await response.json()
}

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    console.log(`TEST VAR: ${process.env.TEST_VAR}`)
    let yearsExperience = new Date().getFullYear() - 2011
    let geoData = await getGeoData()


    console.log(geoData)
    this.setState({
      yearsExperience: yearsExperience,
      vistorCountry: geoData.country,
      vistorState: geoData.state,
      vistorCity: geoData.city,
      visitorPostal: geoData.postal,
      vistorLat: geoData.latitude,
      vistorLong: geoData.longitude
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
              Some paragraph here
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
