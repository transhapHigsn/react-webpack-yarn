import React from 'react';

function NumberList(props){
  const numbers = props.numbers
  const listItems = numbers.map( (number) =>
    <li key={number.toString()}>
      {number}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      num : 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  handleClick (){
    console.log("The link is clicked.");
  }

  setStateHandler(){
    console.log("The link is clicked.");
    const value = "Clicked!!! ";
    const myarr = this.state.data.slice()
    myarr.push(value)
    this.setState({data : myarr, num : this.state.num + 1})
    console.log(this.state.num)
  }

  render(){
    const numbers = [1,2,3,4,5]
    return (
      <div style={{textAlign:'center'}}>
        <h1>Hello World {this.props.data.name} {this.props.data.age}</h1>
        <a href="#" onClick={this.setStateHandler}> Click Me </a>
        <h4>State set : {this.state.num} {this.state.data}</h4>
        <NumberList numbers={numbers} />
      </div>
      );
  }
}
