import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
    
        <p>Город: {this.props.city} </p>
        <p>Температура: {this.props.temp} </p>
        <p>Давление: {this.props.pressure} </p>
        <p>Заход солнца: {this.props.sunset} </p>
      </div>
    );
  }
}


export default Weather;
