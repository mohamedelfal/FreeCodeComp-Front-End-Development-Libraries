function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      timerType: 'Session',
      breakLength: 5, // default val: 5
      sessionLength: 25, // default val: 25
      timeRemains: 25 * 60, // default val: 25 * 60
      loop: undefined,
      isRunning: false });_defineProperty(this, "convertToTime",


    count => {
      {/* A method that a count of time remains and returns a string with the time remains*/}
      const minutes = Math.floor(count / 60);
      let seconds = Math.floor(count % 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      if (minutes < 10) {
        return `0${minutes}:${seconds}`;
      } else {
        return `${minutes}:${seconds}`;
      }
    });_defineProperty(this, "playPause",

    () => {
      const {
        timerType,
        timeRemains,
        loop,
        isRunning } =
      this.state;

      if (isRunning) {
        clearInterval(this.state.loop);
        this.setState({
          isRunning: false });


      } else {


        this.setState({
          isRunning: true,
          loop: setInterval(() => {
            const { timeRemains, breakLength, sessionLength, timerType } = this.state;

            timeRemains <= 60 ? $('#time-left').css({ color: 'red' }) : $('#time-left').css({ color: 'white' });

            if (timeRemains === 0) {
              document.getElementById("beep").play();
              this.setState({
                timerType: timerType === 'Session' ? 'Break' : 'Session',
                timeRemains: timerType === 'Session' ? breakLength * 60 : sessionLength * 60 });

            } else {
              this.setState({
                timeRemains: timeRemains - 1 });

            }
          }, 1000) });

      }
    });_defineProperty(this, "reset",

    () => {
      const { sessionLength, timeRemains } = this.state;
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
      $('#time-left').css({ color: 'white' });
      this.setState({
        timerType: 'Session',
        breakLength: 5,
        sessionLength: 25,
        timeRemains: 25 * 60,
        isRunning: false });

      clearInterval(this.state.loop);
    });_defineProperty(this, "handleBreakDecrement",

    () => {
      const { breakLength } = this.state;
      if (1 < breakLength) {
        this.setState({
          breakLength: breakLength - 1 });

      }
    });_defineProperty(this, "handleBreakIncrement",

    () => {
      const { breakLength } = this.state;
      if (breakLength < 60) {
        this.setState({
          breakLength: breakLength + 1 });

      }
    });_defineProperty(this, "handleSessionDecrement",

    () => {
      const { sessionLength } = this.state;
      if (1 < sessionLength) {
        this.setState({
          sessionLength: sessionLength - 1,
          timeRemains: (sessionLength - 1) * 60 });

      }
    });_defineProperty(this, "handleSessionIncrement",

    () => {
      const { sessionLength } = this.state;
      if (sessionLength < 60) {
        this.setState({
          sessionLength: sessionLength + 1,
          timeRemains: (sessionLength + 1) * 60 });

      }
    });}

  render() {

    {/* Break component */}
    const breakControl = {
      type: "break",
      title: "Break Length",
      time: this.state.breakLength,
      handleDecrement: this.handleBreakDecrement,
      handleIncrement: this.handleBreakIncrement };


    {/* Session component */}
    const sessionControl = {
      type: "session",
      title: "Session Length",
      time: this.state.sessionLength,
      handleDecrement: this.handleSessionDecrement,
      handleIncrement: this.handleSessionIncrement };


    return /*#__PURE__*/(

      React.createElement("div", { id: "container" }, /*#__PURE__*/

      React.createElement("h1", null, " Pomodoro Clock "), /*#__PURE__*/
      React.createElement("div", { className: "flex" }, /*#__PURE__*/

      React.createElement(TimerLengthControl, breakControl), /*#__PURE__*/
      React.createElement(TimerLengthControl, sessionControl)), /*#__PURE__*/



      React.createElement("div", { id: "timer-wrap" }, /*#__PURE__*/
      React.createElement("h2", { id: "timer-label" }, " ", this.state.timerType, " "), /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, " ", this.convertToTime(this.state.timeRemains), " ")), /*#__PURE__*/

      React.createElement("button", { id: "start_stop", onClick: this.playPause }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-play" }), /*#__PURE__*/
      React.createElement("i", { className: "fas fa-pause" })), /*#__PURE__*/

      React.createElement("button", { id: "reset", onClick: this.reset }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-sync" })), /*#__PURE__*/


      React.createElement("audio", {
        id: "beep",
        preload: "auto",
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));




  }}


const TimerLengthControl = (props) => /*#__PURE__*/
React.createElement("div", { id: "timer-wrapper" }, /*#__PURE__*/
React.createElement("h2", { id: `${props.type}-label` }, " ", props.title, " "), /*#__PURE__*/
React.createElement("div", { id: `${props.type}-length` }, " ", props.time, " "), /*#__PURE__*/
React.createElement("button", { id: `${props.type}-decrement`, onClick: props.handleDecrement }, " ", /*#__PURE__*/React.createElement("i", { class: "arrow down" }), " "), /*#__PURE__*/
React.createElement("button", { id: `${props.type}-increment`, onClick: props.handleIncrement }, " ", /*#__PURE__*/React.createElement("i", { class: "arrow up" }), " "));



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));