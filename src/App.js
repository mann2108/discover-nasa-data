import React, { Component } from 'react';
import ParticlesBg  from 'particles-bg';
import Loader from 'react-loader-spinner';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      nasaData: {},
      content: {
        display: "none"
      },
      loader: {
        display: "block"
      }
    };
  }

  
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=KOAVjU96q4a8PWary2YJQewHCgf2e9HbhSxCq20c")
      .then(res => res.json())
      .then(
        (result) => {
          if(result.hdurl!=undefined) {
          	this.setState({
            nasaData:result,
            content: {
              display: "block",      
            },
            loader: {
              display: "none",      
            }
          });	
          }
        }
      )
  }


  render() {
    
    const imgStyle = {
      height: "180px",
      width: "355px"

    }

    const hideUnwanted = {
      display : "none"
    }

    const headingStyle = {
      fontSize: "50px"
    }

    return (
      <div className="App">

        <div style={this.state.loader}>
          <header id="home">  
            <div className="row banner">
                <Loader type="Watch" color="#00BFFF" height={100} width={100} />
            </div>
          </header>
        </div>

        
        
        <header id="home" style={this.state.content}>  
          <ParticlesBg type="circle" bg={true} />
          <div className="row banner">
            <div className="banner-text">
              <h1 style={headingStyle} className="responsive-headline">Astronomy Picture of the Day</h1>
              <h3> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h3>
              <img src="./images/nasa-logo-web-rgb.png" style={imgStyle}/>
              <h3>Today's Image : {this.state.nasaData.title}</h3>
              <h3>{this.state.nasaData.date}</h3>
              <hr />
            </div>
          </div>
        </header>
        

        <section id="about" style={this.state.content}>
          
          <div className="row">
             <div>
                <center><h2>Image : {this.state.nasaData.title}</h2></center>
                <img src={this.state.nasaData.url} alt="Nasa APOD Image" />
             </div>
             <div>
                <h2>Explanation of image - </h2>
                <p>{this.state.nasaData.explanation}</p>
             </div>
          </div>
        
          <ul className="social">
            <center>
            <a href="" style={hideUnwanted} className="button btn project-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            <a href="https://www.linkedin.com/in/mann-mehta-b3633b172/" className="button btn project-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            <a href="https://github.com/mann2108" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </center>
          </ul>

          <center>
            <pre>
            Note - In case if you are seeing default image is due to image is not publish by NASA APOD for the current date.
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
