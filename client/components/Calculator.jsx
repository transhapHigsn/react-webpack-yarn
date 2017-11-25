import React from 'react'

function Boiler(props){
  const ans = props.temperature >= 100 ? "Voila, You are scientist now." : "Science or Commerce?"
  return (<h2> {ans} </h2>)
}

function toFahrenheit(temp){
  const a = temp * (9/5) + 32
  return a
}

function toCelsius(temp){
  const a = (temp - 32) * (5/9)
  return a
}

function tryConvert(temperature, convert) {
  const inp = parseFloat(temperature)
  if (Number.isNaN(inp)) {
    return '';
  }
  const out = convert(inp)
  const round = Math.round(out * 1000) / 1000

  return round.toString()
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.props.handleTemperatureChange(event.target.value)
    //this.setState({value:event.target.value})
  }

  render(){
    const temperature = this.props.value
    const scale = this.props.scale
    return(
      <fieldset>
        <legend>
          Enter temperature in {scaleNames[scale]}:
        </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}


export default class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value:'',
      scale:'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange(temperature){
    this.setState({scale:'c',value:temperature})
  }

  handleFahrenheitChange(temperature){
    this.setState({scale:'f',value:temperature})
  }
  render(){
    const scale = this.state.scale
    const value = this.state.value
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value
    return (
      <div>
        <TemperatureInput
          scale="f"
          handleTemperatureChange={this.handleFahrenheitChange}
          value={fahrenheit}
        />
        <TemperatureInput
           scale="c"
           handleTemperatureChange={this.handleCelsiusChange}
           value={celsius}
         />

        <Boiler temperature={parseFloat(celsius)} />
      </div>
    )
  }
}
