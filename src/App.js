import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles/Circles";
import CircleSelector from "./components/CircleSelector/CircleSelector";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: "1" };
  }

  handleCircleChange = (e) => {
    this.setState({ selectedItem: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleCircleChange={this.handleCircleChange}
            clicked={this.state.selectedItem}
          />
          <Circles clicked={this.state.selectedItem} />
        </main>
      </div>
    );
  }
}

export default App;
