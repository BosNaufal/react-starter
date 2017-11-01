
import React from 'react'
import PropTypes from 'prop-types'

class Anak extends React.Component {

  static propTypes = {
    msg: PropTypes.string.isRequired,
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickDocument, false)
  }

  // DOM nya masih ada, tapi akan hilang
  componentWillUnmount() {
    console.log("Aku akan pergi...", document.getElementById("anak"));
    document.removeEventListener("click", this.handleClickDocument, false)
  }

  handleClickDocument = () => {
    console.log("Click Dokumen");
  }

  render () {
    return (
      <div id="anak">
        <h1>Jangan Lupa Sholat Dhuhur Gaes</h1>
        <span>Aku anak hebat tubuhku kuat~</span>
        <h2>{this.props.msg}</h2>
      </div>
    )
  }

}

export default Anak;
