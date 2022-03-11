import React, { Component } from "react";

import App from "./App";
import * as ReactDOM from "react-dom";
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
        <label>CCM_status: </label>
        <input
          type="textarea"
          name="textValue"
          value={this.props.data.ccm}
          id="reset1"
        />
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
        <div className="switches" id="reset">
          <label>Number_of_EAS_Switches: </label>
          <input
            type="textarea"
            name="text"
            value={this.props.data.eas}
            id="reset3"
          />
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
          <button onClick={this.resetHandler} value=" ">
            RESET
          </button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Erconn;
