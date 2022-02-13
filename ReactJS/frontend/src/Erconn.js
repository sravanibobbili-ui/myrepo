import React, { Component } from "react";
<<<<<<< HEAD
=======

import App from "./App";
import * as ReactDOM from "react-dom";
>>>>>>> 7c4de8d1a0bde6aed37bf4ff72a4ddd78f540458
class Erconn extends Component {
  resetHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    const el = document.getElementById("reset");
    el.value = "";
    const el1 = document.getElementById("reset1");
    el1.value = "";
    const el2 = document.getElementById("reset2");
    el2.value = "";
    const el3 = document.getElementById("reset3");
    el3.value = "";
    const el4 = document.getElementById("reset4");
    el4.value = "";
  };
  render() {
    return (
      <div className="comp">
        <h1>HEALTH STATUS OF NODES</h1>
        <label>Number_of_blades: </label>
        <input
          type="textarea"
          name="text"
          value={this.props.data.blades}
          id="reset"
        />
        <br />
        <br />
        <br />
        <label>CCM_status: </label>
        <input
          type="textarea"
          name="textValue"
          value={this.props.data.ccm}
          id="reset1"
        />
        <br />
        <br />
        <br />
        <label>EAC_status: </label>
        <input
          type="textarea"
          name="textValue"
          value={this.props.data.eac}
          id="reset2"
        />
        <br />
        <br />
        <br />
        <label>Number_of_EAS_Switches: </label>
        <input
          type="textarea"
          name="text"
          value={this.props.data.eas}
          id="reset3"
        />
        <br />
        <br />
        <br />
        <label>Number_of_NRU_Switches: </label>
        <input
          type="textarea"
          name="text"
          value={this.props.data.nru}
          id="reset4"
        />
        <br />
        <br />
        <br />
        <button onClick={this.resetHandler} value=" ">
          RESET
        </button>
        &nbsp;
        <a href=" " value={this.props.toggle}>
          Close
        </a>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Erconn;
