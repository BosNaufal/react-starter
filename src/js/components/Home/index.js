import React, { PropTypes } from 'react'

import style from '../../../sass/scoped/Home.sass'

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h3 className={ style.title }>Home Page</h3>
      </div>
    );
  }

}

export default HomePage;
