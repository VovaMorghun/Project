import React from "react";


class Form extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.getWeather}>
                <input type = "text" name = "city" placeholder = "Город..."></input>
                <input type = "text" name = "country" placeholder = "Страна..."></input>
                <button>Узнать</button>
            </form>
        )
    }
}

export default Form;