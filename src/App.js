import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Sreya",
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          {/* <p>Hey Sreya💕🫂</p>
          <p>I Love You😚🥺💕🫂</p> */}
          <p>Hey {this.state.name}</p>
          <button
            onClick={() => {
              this.state.name = "Sreya_yousuf🫂";
              console.log(this.state.name);
            }}
          >
            change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
