import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SimpleImageSlider from '../dist';
import Input from '@material-ui/core/Input';
import './app.scss';

const IMAGES = [{ url: 'images/1.jpg' }, { url: 'images/2.jpg' }, { url: 'images/3.jpg' }, { url: 'images/7.jpg' }];

type SliderOptions = {
  useGPURender: boolean;
  showNavs: boolean;
  showBullets: boolean;
  loop: boolean;
  autoPlay: boolean;
  autoPlayDelay: number;
  startIndex: number;
  navStyle: 1 | 2;
  navSize: number;
  navMargin: number;
  duration: number;
  bgColor: string;
};

const App: React.FC = () => {
  const [sliderOptions, setSliderOptions] = useState<SliderOptions>({
    useGPURender: true,
    showNavs: true,
    showBullets: true,
    loop: true,
    autoPlay: true,
    autoPlayDelay: 2,
    startIndex: 3,
    navStyle: 1,
    navSize: 50,
    navMargin: 30,
    duration: 0.5,
    bgColor: '#000'
  });

  const [slideIndexText, setSlideIndexText] = useState<string>('');

  const onClick = useCallback((idx: number, event: React.SyntheticEvent) => {
    console.log(`[App onClick] ${idx} ${event.currentTarget}`);
  }, []);

  const onClickNav = useCallback((toRight: boolean) => {
    console.log(`[App onClickNav] ${toRight}`);
  }, []);

  const onClickBullets = useCallback((idx: number) => {
    console.log(`[App onClickBullets] ${idx}`);
  }, []);

  const onStartSlide = useCallback((idx: number, length: number) => {
    console.log(`[App onStartSlide] ${idx}/${length}`);
    setSlideIndexText(`${idx} / ${length}`);
  }, []);

  const onCompleteSlide = useCallback((idx: number, length: number) => {
    console.log(`[App onCompleteSlide] ${idx}/${length}`);
    setSlideIndexText(`${idx} / ${length}`);
  }, []);

  const updateOptions = useCallback(
    (key: string, value: boolean | number | string) => () => {
      console.log(`[App updateOptions] ${key} ${value}`);
      switch (key) {
        case 'navStyle':
          setSliderOptions({ ...sliderOptions, navStyle: value as 1 | 2 });
          break;
        default:
          setSliderOptions({ ...sliderOptions, [key]: value });
          break;
      }
    },
    [sliderOptions]
  );

  const onChangeSelect = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: string | number }>) => {
      event.target.name && updateOptions(event.target.name, event.target.value)();
    },
    [updateOptions]
  );

  return (
    <div style={{ textAlign: 'center' }} className="root">
      <CssBaseline />
      <AppBar style={{ position: 'relative', height: 140, textAlign: 'center' }}>
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
        style={{ margin: '0 auto', marginTop: '50px' }}
        width={896}
        height={504}
        images={IMAGES}
        showBullets={sliderOptions.showBullets}
        showNavs={sliderOptions.showNavs}
        loop={sliderOptions.loop}
        autoPlay={sliderOptions.autoPlay}
        autoPlayDelay={sliderOptions.autoPlayDelay}
        startIndex={sliderOptions.startIndex}
        useGPURender={sliderOptions.useGPURender}
        navStyle={sliderOptions.navStyle}
        navSize={sliderOptions.navSize}
        navMargin={sliderOptions.navMargin}
        slideDuration={sliderOptions.duration}
        onClick={onClick}
        onClickNav={onClickNav}
        onClickBullets={onClickBullets}
        onStartSlide={onStartSlide}
        onCompleteSlide={onCompleteSlide}
      />

      <div style={{ margin: '10px' }}>{slideIndexText || `${sliderOptions.startIndex + 1} / ${IMAGES.length}`}</div>

      <List
        subheader={
          <ListSubheader>
            <h1>Slider Settings</h1>
          </ListSubheader>
        }
        style={{ margin: '0 auto 100px auto', width: 900, textAlign: 'left' }}>
        {Object.entries(sliderOptions)
          .filter((item) => typeof item[1] === 'boolean')
          .map((item: [string, boolean]) => (
            <ListItem key={item[0]} button onClick={updateOptions(item[0], !item[1])}>
              <Checkbox checked={item[1]} disableRipple />
              <ListItemText primary={`${item[0]}`} />
            </ListItem>
          ))}
        <ListItem>
          <FormControl>
            <InputLabel>NavStyle</InputLabel>
            <Select value={sliderOptions.navStyle} onChange={onChangeSelect} inputProps={{ name: 'navStyle' }}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>slideDuration</InputLabel>
            <Select value={sliderOptions.duration} onChange={onChangeSelect} inputProps={{ name: 'duration' }}>
              <MenuItem value={0.3}>0.3</MenuItem>
              <MenuItem value={0.5}>0.5</MenuItem>
              <MenuItem value={0.7}>0.7</MenuItem>
              <MenuItem value={1.2}>1.2</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>autoPlayDelay</InputLabel>
            <Select value={sliderOptions.autoPlayDelay} onChange={onChangeSelect} inputProps={{ name: 'autoPlayDelay' }}>
              <MenuItem value={1.5}>1.5</MenuItem>
              <MenuItem value={2.0}>2</MenuItem>
              <MenuItem value={2.5}>2.5</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>Navigation Size</InputLabel>
            <Input
              value={sliderOptions.navSize}
              type="number"
              name="navSize"
              onChange={(event) => updateOptions(event.target.name, event.target.value)()}
            />
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel>Navigation Margin</InputLabel>
            <Input
              value={sliderOptions.navMargin}
              type="number"
              name="navMargin"
              onChange={(event) => updateOptions(event.target.name, event.target.value)()}
            />
          </FormControl>
        </ListItem>
      </List>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('App'));
