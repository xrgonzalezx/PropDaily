import React, { Component } from 'react';
import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'




class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(event) {
    event.preventDefault();
    //set the state on input change
    //the target.value is being stored in whatToSay in the this.state
    this.setState({whatToSay: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }

// Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.

  render() {
    return (
      <div>
        <div>
      {/*  //what is typed in the value will be displayed after the handleSubmit function*/}
          <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
