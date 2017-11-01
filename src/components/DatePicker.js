
import React, { PropTypes } from 'react'
import Pikaday from 'pikaday'
import 'pikaday/css/pikaday.css'
import './style.sass'
// import '../../node_modules/pikaday/css/pikaday.css'


class DatePicker extends React.Component {

  componentDidMount() {
    // Ready DOM
    this.picker = new Pikaday({
      field: this.inputEl,
      onSelect: () => {
        // Destructure
        const { value } = this.inputEl
        this.props.onSelect(value)
      }
    });
  }

  componentWillUnmount() {
    this.picker.destroy()
  }



  render () {
    return (
      <div>
        <h1 className="DatePicker-title">Date Picker</h1>
        <input ref={(el) => this.inputEl = el} type="text" id="datepicker" />
      </div>
    )
  }
}

export default DatePicker;
