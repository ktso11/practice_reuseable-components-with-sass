import React, { Component } from 'react'; 
import Button from './components/Button';
import Tabcard from './components/Tabcard';


class App extends Component {
  render() {
    return (
      <div>

        <Button onClick={() => {console.log("clicked")}}
          type ="button"
          btnStyle = "primary"
          btnSize = "large"
        >Button</Button>
        <Tabcard></Tabcard>
      </div>
    );
  }
}

export default App;
