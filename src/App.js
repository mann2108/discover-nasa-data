import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      nasaData: {}
    };
  }

  
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=KOAVjU96q4a8PWary2YJQewHCgf2e9HbhSxCq20c")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            nasaData:result               
          });
        }
      )
  }


  render() {
    
    const imgStyle = {
        height: "180px",
        width: "320px"

    }

    const hideUnwanted = {
        display : "none"
    }

    return (
      <div className="App">
        
        <header id="home">
          <ParticlesBg type="circle" bg={true} />
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{this.state.nasaData.title}</h1>
              <img src="./images/nasa-logo-web-rgb.png" style={imgStyle}/>
              <h3>Nasa Astronomy Picture of the Day</h3>
              <h3>{this.state.nasaData.date}</h3>
              <hr />
            </div>
          </div>
        </header>
        

        <section id="about">
          
          <div className="row">
             <div >
                <center><h2>{this.state.nasaData.title}</h2></center>
                <img src={this.state.nasaData.hdurl} alt="Nasa APOD Image" />
             </div>
             <div className="nine columns main-col">
                <h2>Explanation - {this.state.nasaData.title}</h2>
                <p>{this.state.nasaData.explanation}</p>
             </div>
          </div>
        
          <ul className="social">
            <center>
            <a href="" style={hideUnwanted} className="button btn project-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            <a href="https://www.linkedin.com/in/mann-mehta-b3633b172/" className="button btn project-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            <a href="https://github.com/mann2108" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            <a href="https://www.instagram.com/manuu2108/" className="button btn project-btn"><i className="fa fa-instagram"></i>Instagram</a>
            </center>
          </ul>

          <center>
            <pre>
            Note - In case there is no image visible then its due to data api request limit overflow, I suggest you to check after sometime.
            </pre>
            <pre>
            
            <a href="mailto:mannmehta2199@gmail.com">
            Mann Mehta
            (mannmehta2199@gmail.com)</a>
            </pre>
          </center>
        </section>
      </div>
    );
  }
}

export default App;
