import React, { Component } from 'react'; 
import Button from './components/Button';


class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => {console.log("clicked")}}
          btnStyle = "primary"
          btnSize = "large"
          text = "Primary"
        />
        <Button onClick={() => {console.log("clicked")}}
          btnStyle = "danger"
          btnSize = "medium"
          text = "Danger"
        />
      </div>
    );
  }
}

export default App;
