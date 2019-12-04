import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {data: ""};
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({data: res}))
        .catch(console.error);
  }

  callApi = async () => {
    
    const resp = await fetch(`http://${window.location.hostname}:8080/api`);

    alert(`http://${window.location.hostname}:8080/api`)

    window._resp = resp;

    let text = await resp.text();

    let data = null;

    try {
      data = JSON.parse(text);
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default App;
