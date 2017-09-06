import '../../theme/site/assets/main.less'
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Welcome to my website Davide Crestini</h1>
        <button className="ui button">
          Button
        </button>
      </div>);
  }
}
