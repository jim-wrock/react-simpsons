import React, { Component } from "react";
import logo from "./working.gif";
import logo2 from "./notworking.gif";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";
// import Quote from "./Quote";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Simpsons Quotes</h1>
//         </header>
//         <Quote
//           quote="I believe the children are the future... Unless we stop them now!"
//           character="Homer Simpson"
//           image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
//         />
//         <Quote
//           quote="Me fail English? That's unpossible"
//           character="Ralph Wiggum"
//           image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
//         />
//       </div>
//     );
//   }
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  handleClick = () => {
    console.log('Button clicked');
    this.setState({ working: !this.state.working });
  };

  render() {
    const isWorking = this.state.working ? 'on' : 'off';
    const HisWorking = this.state.working ? 'Homer is working' : 'Homer isn\'t working';
    return (
      <React.Fragment>
        <div className="Lamp">

          <button
            onClick={this.handleClick}
            // onClick={() => alert('Button clicked')}
            className={isWorking}
          >
            {isWorking.toUpperCase()}
          </button>

          {/* <button className={light}>{light.toUpperCase()}</button> */}
          <figure className={isWorking} />
        </div>



        <div className="App">

          <header className="App-header">
            <img src={this.state.working ? logo : logo2} className="App-logo" alt="logo" />
            <p> {HisWorking} </p>

          </header>

          <Quotes />
          <Lamp on />
          <Lamp />
        </div>
      </React.Fragment>

    );
  }
}




export default App;
