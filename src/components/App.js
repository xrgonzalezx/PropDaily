import React, { Component } from 'react';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>

        <ParentComponent />

        </BaseLayout>
      </div>
    );
  }
}

render() {
  return (
<div className='main'>
      <div>
        <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
      </div>
      <div>
        <ChildComponent onClick={"FILL_ME_IN"}/>
        <DisplayComponent sayWhat={"FILL_ME_IN"} />
      </div>
</div>
  );
}
}



  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: this.state.whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  //
  // <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
  // </div>
  //









export default App;
