import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const h = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiMessage: ''
    };

    this.pingApi = this.pingApi.bind(this);
  }

  pingApi() {
    fetch("/api")
      .then(response => {
        response.text().then(text => {
          this.setState({ apiMessage: text });
        });
      });
  }

  render () {
    return (
      h("div", { className: "container" },
        h("p", null, this.state.apiMessage),
        h("input", {
          type: "button",
          value: "Ping API",
          onClick: this.pingApi
        })
      )
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
