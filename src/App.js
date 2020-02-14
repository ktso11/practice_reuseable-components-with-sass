import React, { Component } from 'react'; 
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div>

        <Button onClick={() => {console.log("clicked")}}
          type ="button"
          btnStyle = "primary"
          btnSize = "large"
        >Button</Button>
      </div>
    );
  }
}

export default App;
