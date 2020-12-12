
import React, { Component } from 'react'
import './App.css';

import { World } from './World/World.js';

class App extends Component {

  main = async () => {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);

    // complete async tasks
    await world.init();

    // start the animation loop
    world.start();
  }

  componentDidMount() {
    this.main().catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="view">
          <div id="scene-container"></div>
        </div>
        <div className="view">
          <div id="fill-container"></div>
        </div>
      </React.Fragment>
    )
  }
}


export default App;
