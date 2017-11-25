import React from 'react'

function Boiler(props){
  const ans = props.temperature >= 100 ? "Voila, You are scientist now." : "Science or Commerce?"
  return (<h2> {ans} </h2>)
}


export default class Calculator extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({value:event.target.value})
  }

  render(){
    return(
      <fieldset>
        <legend>
          Enter temperature in celsius:
        </legend>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Boiler temperature={parseFloat(this.state.value)}/>
      </fieldset>
    )
  }
}
