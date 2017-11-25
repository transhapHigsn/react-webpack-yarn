import  React from 'react'

export default class NameForm extends React.Component {
  constructor(){
    super()
    this.state = {
      data : [],
      value : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    alert("Are you sure? Once done there is no going back. Name submitted : " + this.state.value)
    event.preventDefault()
  }

  handleChange(event){
    this.setState({value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
