import React from "react"; 
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APi_KEY = "2a90f5f1ee34e9b487d666710284d501";

class App extends React.Component{

    state = {
        tempreture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APi_KEY}&lang=ru&units=metric`)
        const data = await api_call.json();
        console.log(data)
        if(city && country){
            console.log(data);
            this.setState({                
                tempreture: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
        })}else{
            this.setState({                
                tempreture: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Введите город и страну..."
        })
        }
    }
    render(){
        return(
            <div>
                <div class="wrapper">
                    <div class="main">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div class="col-xs-7 form-container">
                                    <Form getWeather = {this.getWeather}/>
                                    <Weather 
                                    tempreture  = {this.state.tempreture}
                                    city = {this.state.city}
                                    country = {this.state.country}
                                    humidity = {this.state.humidity}
                                    description = {this.state.description}
                                    error = {this.state.error} 
                                    /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        );
    }
}


export default App;

