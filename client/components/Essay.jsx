import React from 'react'

export default class EssayForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : 'Enter some text here...'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    alert('Ready to submit?')
    event.preventDefault()
  }

  handleChange(event){
    this.setState({value:event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
