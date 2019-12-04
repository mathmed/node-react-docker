import React, { Component } from 'react';
import logo from "./logo.svg";

class App extends Component {
  
  constructor() {
  
    super();
    this.state = {data: ""};
  
  }

  componentDidMount() {
    
    this.callApi().then(response => this.setState({data: response}))
  
  }

  callApi = async () => {

    let response = await fetch("http://localhost:8080/api");

    let text = await response.json();

    return text.message;

  }

  render() {
    return (
      <div style = {styles.container}>
        <div style = {styles.center}>
          <img style = {styles.img} src = {logo}></img>
        </div>
        <div style = {styles.center}>
          <label style = {styles.text}>{this.state.data}</label>
        </div>
      </div>
    )
  }
}

const styles = {

  container: {padding: 20, backgroundColor: "white"},
  center: {justifyContent: "center", alignItems: "center", display: "flex"},
  img: {width: 300, height: 300},
  text: {fontWeight: "bold", color: "#000080", fontSize: 30}

}

export default App;
