import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import ImageSlider from "..";

// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
class App extends React.Component {
    constructor() {
        super();
        console.log("[App constructor]");
        this.state = {};
    }

    componentDidMount() {
        console.log("[App componentDidMount]");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[App getDerivedStateFromProps]");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[App getSnapshotBeforeUpdate]");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App componentDidUpdate]");
    }

  	render() {
        return (
        	<div style={{ textAlign: "center" }}>
                <CssBaseline/>
                <AppBar position="stickey" style={{ height: 100, textAlign: "center" }}>
                    <h1>Image Slider Example</h1>
                </AppBar>
            	<ImageSlider/>
        	</div>
    	);
  	}
}

ReactDOM.render(<App/>, document.getElementById("App"));