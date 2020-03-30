import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SimpleImageSlider from "..";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            useGPURender: true,
            showNavs: true,
            showBullets: true,
            navStyle: 1,
            slideDuration: 0.5,
            bgColor: "#000000",
            slideIndexText: "",
        };
    }

    componentDidMount() {
        console.log("[App componentDidMount]");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App componentDidUpdate]");
    }

    onClickNav = (toRight) => {
        console.log(`[App onClickNav] ${toRight}`);
    }

    onClickBullets = (idx) => {
        console.log(`[App onClickBullets] ${idx}`);
    }

    onStartSlide = (idx, length) => {
        console.log(`[App onStartSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}`});
    }

    onCompleteSlide = (idx, length) => {
        console.log(`[App onCompleteSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}`});
    }

    onToggleOptions = value => () => {
        console.log(`[App onToggleOptions] ${value}`);
        const updateValue = !this.state[value];
        this.setState({ [value]: updateValue });
    }

    onChangeSelect = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        const listSubHeader = <ListSubheader><h1>Slider Settings</h1></ListSubheader>;
        const toggleOptions = ["useGPURender", "showNavs", "showBullets"];
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];
        const slideText = this.state.slideIndexText || `${1} / ${images.length}`;

        return (
            <div style={{ textAlign: "center" }}>
                <CssBaseline />
                <AppBar style={{ position: "relative", height: 140, textAlign: "center" }}>
                    <h1 style={{ marginBottom: 5 }}>React Simple Image Slider Example</h1>
                    <p>simple image slider component for react</p>
                    <div>
                        <iframe
                            title="git icon"
                            src="https://ghbtns.com/github-btn.html?user=kimcoder&repo=react-simple-image-slider&type=star"
                            frameBorder="0"
                            width="51px"
                            height="30px"
                        />
                    </div>
                </AppBar>
                <SimpleImageSlider
                    style={{ margin: "0 auto", marginTop: "50px" }}
                    width={200}
                    height={200}
                    images={images}
                    showBullets={this.state.showBullets}
                    showNavs={this.state.showNavs}
                    useGPURender={this.state.useGPURender}
                    navStyle={this.state.navStyle}
                    slideDuration={this.state.slideDuration}
                    onClickNav={this.onClickNav}
                    onClickBullets={this.onClickBullets}
                    onStartSlide={this.onStartSlide}
                    onCompleteSlide={this.onCompleteSlide}
                />

                <div style={{ margin: "10px" }}>
                    {slideText}
                </div>

                {
                    // Slide Settings
                }
                <List subheader={listSubHeader} style={{ margin: "0 auto 100px auto", width: 900, textAlign: "left" }}>
                    {toggleOptions.map(value => (
                        <ListItem key={value} button onClick={this.onToggleOptions(value)}>
                            <Checkbox checked={this.state[value]} disableRipple />
                            <ListItemText primary={`${value}`} />
                        </ListItem>
                    ))}
                    <ListItem>
                        <FormControl component="fieldset">
                            <InputLabel>NavStyle</InputLabel>
                            <Select
                                value={this.state.navStyle}
                                onChange={this.onChangeSelect}
                                inputProps={{ name: "navStyle" }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <FormControl>
                            <InputLabel>slideDuration</InputLabel>
                            <Select
                                value={this.state.slideDuration}
                                onChange={this.onChangeSelect}
                                inputProps={{ name: "slideDuration" }}
                            >
                                <MenuItem value={0.3}>0.3</MenuItem>
                                <MenuItem value={0.5}>0.5</MenuItem>
                                <MenuItem value={0.7}>0.9</MenuItem>
                                <MenuItem value={1.2}>1.2</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>
                </List>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("App"));
