import React from "react";


class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info">
                {
                    this.props.city && this.props.country && <p className= "weather__key">Расположение:  
                    <span className= "weather__value" > {this.props.city} ,{this.props.country}</span>
                    </p>
                    }
                {
                    this.props.tempreture && <p className= "weather__key">Температура:  
                    <span className= "weather__value"> { this.props.tempreture}&deg; C</span>
                    </p>
                    }   
                {
                    this.props.humidity && <p className= "weather__key">Влажность: 
                         <span className= "weather__value"> { (this.props.humidity) + "%"}</span>
                         </p>
                    }
                {
                    this.props.description && <p className= "weather__key">Погодные условия: 
                         <span className= "weather__value"> { (this.props.description)[0].toUpperCase() + (this.props.description).slice(1) }</span>
                         </p>
                    }
                {
                    this.props.error && <p className= "weather__key">
                    <span className= "weather__error"> {this.props.error}</span>
                    </p>
                    } 
            </div>
        )
    }
}

export default Weather;