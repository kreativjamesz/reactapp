import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import MainContent from './components/MainContent';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Laravel 5.6',
      name: 'James Billy Vasig',
      checked: true
    };

    this.onClick = this.onClick.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck(){
    this.setState({ checked: !this.checked });
  }
  onClick(e){
    this.setState({
      title: "I wanna love na yung forever",
      name: "Melanie Rizabal"
    });
  }
  
  render() {

    return (
      <div className="App">
        <NavigationBar/>
        <input 
          type="checkbox"
          onChange={this.updateCheck}
          checked={this.state.checked}
        />
        <MainContent
          title={this.state.title}
          name={this.state.name}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
