
import React from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'components/DatePicker';

class Hello extends React.Component {
  // method = () => {}
  // attributes = selain function

  state = {
    tanggalYangPilih: "",
    show: true,
  }

  handleDateSelected = (value) => {
    this.setState({ tanggalYangPilih: value })
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render () {
    return (
      <div>
        <h1>Juga</h1>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.show?
          <div>
            <DatePicker
              onSelect={this.handleDateSelected}
            />
          </div>
        :false}
        <h1>{this.state.tanggalYangPilih}</h1>
      </div>
    )
  }

}

export default Hello;
