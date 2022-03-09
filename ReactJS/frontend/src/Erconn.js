import React, { Component } from "react";
import App from "./App";
// import { conndata } from "./NodeReact/NodeJS/data";
class Erconn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    b: [],
    // res: [],
  };
  async componentDidMount() {
    //   // const response = await fetch("http://localhost:7891/api/getdata");
    //   // const value = await response.json();

    //   // if (response.status !== 200) {
    //   //   throw Error(value.message);
    //   // }
    // this.setState({ data: value });
    // console.log(this.state.data);
    //   console.log("from ErConn");
    // this.setState({ b: this.props.data });
    console.log(this.props.data.ccm);
  }
  resethandler = (e) => {
    // this.setState({ res: e.target.id });

    // console.log(e.target.id);
    e.preventDefault();
    console.log("clicked");
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
          id="blade"
        />
        <br />
        <br />
        <label>CCM_status: </label>
        <input type="textarea" name="textValue" value={this.props.data.ccm} />
        <br />
        <br />
        <label>EAC_status: </label>
        <input type="textarea" name="textValue" value={this.props.data.eac} />
        <br />
        <br />
        <div className="switches">
          <label>Number_of_EAS_Switches: </label>
          <input type="textarea" name="text" value={this.props.data.eas} />
          <br />
          <br />
          <label>Number_of_NRU_Switches: </label>
          <input type="textarea" name="text" value={this.props.data.nru} />
          <br />
          <br />
          <button onclick={this.resethandler}>Reset</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Erconn;
