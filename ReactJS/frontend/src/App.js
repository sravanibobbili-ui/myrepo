import React, { Component } from "react";
import "./App.css";
import Erconn from "./Erconn";
import * as ReactDOM from "react-dom";
// import Split from "react-split";
import SplitPane from "react-split-pane";
// import display from "./Erconn";
// import "./navbar.jsx";

class App extends Component {
  state = {
    data: [],
    res: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:7890/api/getnode");
    const val = await response.json();
    // console.log(val);
    if (response.status !== 200) {
      throw Error(val.message);
    }
    this.setState({ data: val });
    // console.log(this.state.data);
  }

  async display(val) {
    const response = await fetch("http://localhost:7891/api/getdata");
    // console.log(response);
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
        // ReactDOM.render(<Erconn data={blades} />);
      }
      // console.log(n);
    }
  }
  clickHandler = async (e) => {
    // this.setState({ res: e.target.id });

    // console.log(e.target.id);
    e.preventDefault();
    console.log("clicked");
    let a = await this.display(e.target.id);
    // console.log(a);
    let msg = e.target.id;
    const el = document.getElementById("bottom");
    ReactDOM.render(<Erconn data={a} />, el);
    // <Erconn msg={e.target.id} />;
    // console.log(msg);
  };

  // console.log(e.target.id);
  // this.setState({ res: e.target.id });
  // console.log(this.props.res);
  // console.log(this.state.res);
  //api call  --- set data to pps

  render() {
    return (
      <div className="header">
        <header className="App-header">
          <h1 className="App-title">CHECK MK</h1>
        </header>

        <div className="App">
          <SplitPane
            split="vertical"
            minSize={250}
            defaultSize={200}
            maxSize={400}
            type="Resizer"
            attribute="vertical"

            // className="split"
            // cursor="col-resize"
            // snapOffset={2}
            // gutterSize={5}
            // style={{ height: `calc(100vh - 4rem)` }}
          >
            <div className="Node_link">
              {this.state.data.map((value) => (
                <>
                  <a
                    onClick={this.clickHandler}
                    id={value}
                    href={value}
                    // onClick={this.clickHandler}
                    className="section-values"
                  >
                    {value}
                  </a>

                  <br />
                  <br />
                  <br />
                </>
              ))}
            </div>

            {<div className="split-inline" id="bottom"></div>}
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default App;
