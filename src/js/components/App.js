
import React from 'react';

require('../../sass/main.sass')

class App extends React.Component {

  render() {

    let { children } = this.props

    return (
      <div>
        <h1>React Starter</h1>
        { children }
      </div>
    );
  }

}

export default App;
