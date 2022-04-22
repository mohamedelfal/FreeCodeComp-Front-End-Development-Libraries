function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const audioFiles = [
{
  key: 'Q',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  text: 'Heater-1' },

{
  key: 'W',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  text: 'Heater-2' },

{
  key: 'E',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  text: 'Heater-3' },

{
  key: 'A',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  text: 'Heater-4' },

{
  key: 'S',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  text: 'Clap' },

{
  key: 'D',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  text: 'Open-HH' },

{
  key: 'Z',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  text: "Kick-n'-Hat" },

{
  key: 'X',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  text: 'Kick' },

{
  key: 'C',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  text: 'Closed-HH' }];


const App = () => {

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine", className: "container" }, /*#__PURE__*/
    React.createElement("div", { id: "padDisplay", className: "padDisplay" }, /*#__PURE__*/
    React.createElement("h1", null, "Drum Machine"),
    audioFiles.map(file => /*#__PURE__*/React.createElement(DrumPad, { text: file.key, key: file.key, audio: file.url, name: file.text })), /*#__PURE__*/
    React.createElement("div", { id: "display", className: "display" }, " "))));



};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playAudio",


















    () => {
      const id = this.audio.current.id;
      const parent = this.audio.current.parentNode;
      parent.classList.add('active');
      this.audio.current.play();
      // updates the track name on display
      const display = parent.parentNode;
      display.querySelector('#display').innerText = id;
    });this.audio = React.createRef(); // play audio when key is pressed
    document.addEventListener('keydown', e => {const name = e.text;const id = this.audio.current.id;const audio = document.getElementById(e.key.toUpperCase());if (e.key.toUpperCase() === props.text) {const parent = this.audio.current.parentNode;parent.classList.add('active');this.audio.current.play(); // updates the track name on dispaly
        const display = parent.parentNode;display.querySelector('#display').innerText = id;}});}componentDidMount() {
    this.audio.current.addEventListener('ended', () => {
      const parent = this.audio.current.parentNode;
      parent.classList.remove('active');
    });
  }

  render() {
    const { text, audio, name } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", id: text, onClick: this.playAudio },
      text, " ", /*#__PURE__*/React.createElement("audio", { ref: this.audio, className: "clip", id: text, trackName: name, src: audio })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
