import React, { Component } from "react";
import "./App.css";
import Erconn from "./Erconn";
import * as ReactDOM from "react-dom";
<<<<<<< HEAD
import Split from "react-split";
=======
import SplitPane from "react-split-pane";
>>>>>>> 7c4de8d1a0bde6aed37bf4ff72a4ddd78f540458

class App extends Component {
  state = {
    data: [],
    res: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:7890/api/getnode");
    const val = await response.json();
    if (response.status !== 200) {
      throw Error(val.message);
    }
    this.setState({ data: val });
  }

  async display(val) {
    const response = await fetch("http://localhost:7891/api/getdata");
    const value = await response.json();
    console.log(val);
    this.setState({ res: value });
    let n = [];
    let nodesdata = {};
    for (let i in this.state.res) {
      n.push(this.state.res[i].name);
      if (val === n[i]) {
        console.log(this.state.res[i]);
        let name = this.state.res[i].name;
        let blades = this.state.res[i].no_of_blades;
        let ccm = this.state.res[i].ccm_status;
        let eac = this.state.res[i].eac_status;
        let eas = this.state.res[i].eas_switches;
        let nru = this.state.res[i].nru_switches;
        console.log(name, blades, ccm, eac, eas, nru);
        nodesdata["blades"] = blades;
        nodesdata["ccm"] = ccm;
        nodesdata["eac"] = eac;
        nodesdata["eas"] = eas;
        nodesdata["nru"] = nru;
        return nodesdata;
      }
    }
  }
  clickHandler = async (e) => {
    e.preventDefault();
    console.log("clicked");
    let a = await this.display(e.target.id);
    const el = document.getElementById("bottom");
    ReactDOM.render(<Erconn data={a} />, el);
  };
<<<<<<< HEAD
  toggle = async (e) => {
    e.preventDefault();
    console.log("toggle clicked");
  };
  render() {
=======
 render() {
>>>>>>> 7c4de8d1a0bde6aed37bf4ff72a4ddd78f540458
    return (
      <div className="header">
        <header className="App-header">
          <h1 className="App-title">CHECK MK</h1>
        </header>
        <div className="App">
<<<<<<< HEAD
          <Split
            // className="split"
            // // allowResize={false}
            // primary="first"
            // maxSize={100}
            // height={100}
            // width={25}
            sizes={[20, 70]}
            direction="horizontal"
            className="split"
            snapOffset={2}
            gutterSize={5}
            cursor="col-resize"
          >
            <div className="Node_link">
              <React.Fragment>
                <nav className="nav" header="Null">
                  <h1 className="nodes">NODES DATA</h1>
=======
          <SplitPane
            split="vertical"
            minSize={250}
            defaultSize={200}
            maxSize={400}
            type="Resizer"
            attribute="vertical">
            <div className="Node_link">
              {this.state.data.map((value) => (
                <>
                  <a
                    onClick={this.clickHandler}
                    id={value}
                    href={value}
                  
                    className="section-values"
                  >
                    {value}
                  </a>
>>>>>>> 7c4de8d1a0bde6aed37bf4ff72a4ddd78f540458

                  {this.state.data.map((value) => (
                    <>
                      <a
                        onClick={this.clickHandler}
                        id={value}
                        href={value}
                        className="section-values"
                      >
                        {value}
                      </a>
                    </>
                  ))}
                </nav>
              </React.Fragment>
            </div>

            {<div className="split-inline" id="bottom"></div>}
          </Split>
        </div>
      </div>
    );
  }
}

export default App;
