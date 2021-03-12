import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "30df9f5393aa566f16e22d41965ca25a"

class App extends React.Component{

  state= {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    eror: undefined,
  }



  gettingWeather = async (e) => {
    e.preventDefault();
    const city =e.target.elements.city.value;
    const api_url = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=30df9f5393aa566f16e22d41965ca25a')
    const data = await api_url.json();

    var sunset =data.sys.sunset;
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.county,
    pressure: data.main.pressure,
    sunset: sunset_date,
    erros:  ""
    });
  }




  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5">
              <Info />
              </div>
              <div className="col-xs-7">
              <Form weatherMethod={this.gettingWeather} />
              <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunset={this.state.sunset}
                error={this.state.error}
                />
                </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}



export default App;
