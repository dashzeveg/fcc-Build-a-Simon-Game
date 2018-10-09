var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement(Main, null),
          React.createElement(Author, null)));


    } }]);return App;}(React.Component);var


Main = function (_React$Component2) {_inherits(Main, _React$Component2);
  function Main(props) {_classCallCheck(this, Main);var _this2 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this,
    props));
    _this2.state = { power: false,
      strict: false,
      display: '',
      count: 0,
      arr: [],
      currentIndex: 0,
      bg1: { background: '#ff3333' },
      bg2: { background: '#009900' },
      bg3: { background: '#ffd700' },
      bg4: { background: '#3333ff' },
      clickable: 'nonclickable' };


    _this2.setInt = 0;
    _this2.setInt1 = 0;
    _this2.n = 0;
    _this2.timeleft = 5;

    _this2.power = _this2.power.bind(_this2);
    _this2.strict = _this2.strict.bind(_this2);
    _this2.start = _this2.start.bind(_this2);
    _this2.saveArr = _this2.saveArr.bind(_this2);
    _this2.displayCount = _this2.displayCount.bind(_this2);
    _this2.btn = _this2.btn.bind(_this2);
    _this2.click = _this2.click.bind(_this2);
    _this2.blinkDisplay = _this2.blinkDisplay.bind(_this2);
    _this2.playLoop = _this2.playLoop.bind(_this2);
    _this2.play = _this2.play.bind(_this2);return _this2;
  }_createClass(Main, [{ key: 'power', value: function power()

    {

      clearInterval(this.downloadTimer);
      clearInterval(this.setInt1);

      if (this.state.power === true) {
        this.setState({
          power: false,
          strict: false,
          display: '',
          count: 0,
          arr: [],
          currentIndex: 0,
          bg1: { background: '#ff3333' },
          bg2: { background: '#009900' },
          bg3: { background: '#ffd700' },
          bg4: { background: '#3333ff' },
          clickable: 'nonclickable' });

      } else {
        this.setState({
          power: true,
          strict: false,
          display: '--',
          count: 0,
          arr: [],
          currentIndex: 0,
          bg1: { background: '#ff3333' },
          bg2: { background: '#009900' },
          bg3: { background: '#ffd700' },
          bg4: { background: '#3333ff' },
          clickable: 'nonclickable' });

      }
    } }, { key: 'strict', value: function strict()

    {
      if (this.state.power === true) {
        if (this.state.strict === true) {
          this.setState({ strict: false });
        } else {
          this.setState({ strict: true });
        }
      }
    } }, { key: 'start', value: function start()

    {
      if (this.state.power === true) {

        var c = 1;
        this.setState({ count: c, clickable: 'nonclickable' });

        this.saveArr(c);

        this.n = 4;
        this.setInt = setInterval(function () {this.blinkDisplay('--', true);}.bind(this), 300);

      }
    } }, { key: 'blinkDisplay', value: function blinkDisplay(

    sym, p) {
      this.setState({ display: this.state.display === '' ? sym : '' });
      this.n--;
      if (this.n <= 0) {
        clearInterval(this.setInt);
        if (p === true) {
          this.setState({ display: this.state.count });
          this.playLoop();
        }
      }
    } }, { key: 'btn', value: function btn(

    n) {
      this.timeleft = 5;

      var a = this.state.arr.slice();
      //console.log("currentIndex"+this.state.currentIndex);
      if (n == a[this.state.currentIndex]) {
        this.click(n, 200);
        this.setState({ currentIndex: ++this.state.currentIndex });



        if (this.state.count == this.state.currentIndex) {
          if (this.state.count >= 21) {
            clearInterval(this.downloadTimer);
            clearInterval(this.setInt1);
            this.setState({
              count: 0,
              arr: [],
              currentIndex: 0,
              clickable: 'nonclickable',
              display: 'WON' });

          } else {
            setTimeout(function () {
              var c = this.state.count + 1;
              this.setState({ count: c, display: c, currentIndex: 0 });
              this.saveArr(c);
              this.playLoop();
            }.bind(this), 1000);
          }
        }

      } else {
        this.click(5, 500);

        if (this.state.strict === true) {
          this.setState({
            count: 0,
            arr: [],
            currentIndex: 0,
            clickable: 'nonclickable' });


          this.n = 6;
          this.setInt = setInterval(function () {this.blinkDisplay('!!', false);}.bind(this), 300);

        } else {
          this.n = 4;
          this.setInt = setInterval(function () {this.blinkDisplay('--', true);}.bind(this), 300);
        }
      }
    } }, { key: 'playLoop', value: function playLoop()

    {
      this.setState({ clickable: 'nonclickable' });
      this.setInt1 = setInterval(this.play, 1000);
    } }, { key: 'play', value: function play()

    {
      clearInterval(this.downloadTimer);

      if (this.state.power === true) {

        var a = this.state.arr.slice();
        this.click(a[this.state.currentIndex], 1000);

        this.setState({ currentIndex: ++this.state.currentIndex });
        //console.log("count:"+this.state.count);
        //console.log("currentIndex:"+this.state.currentIndex);
        if (this.state.count == this.state.currentIndex) {
          clearInterval(this.setInt1);
          this.setState({ currentIndex: 0 });
          if (this.state.clickable === 'nonclickable')
          this.setState({ clickable: 'clickable' });

          this.timeleft = 5;
          this.downloadTimer = setInterval(function () {
            this.timeleft--;
            if (this.timeleft <= 0) {
              clearInterval(this.downloadTimer);
              this.btn(5);
            }
          }.bind(this), 1000);
        }
      }
    } }, { key: 'click', value: function click(

    n, t) {
      if (n == 1) {
        this.audioBeep.src = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';

        this.setState({ bg1: { background: '#ff0000' } });
        setTimeout(function () {this.setState({ bg1: { background: '#ff3333' } });}.bind(this), t);
      } else if (n == 2) {
        this.audioBeep.src = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';

        this.setState({ bg2: { background: '#00cc00' } });
        setTimeout(function () {this.setState({ bg2: { background: '#009900' } });}.bind(this), t);
      } else if (n == 3) {
        this.audioBeep.src = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';

        this.setState({ bg3: { background: '#ffff00' } });
        setTimeout(function () {this.setState({ bg3: { background: '#ffd700' } });}.bind(this), t);
      } else if (n == 4) {
        this.audioBeep.src = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';

        this.setState({ bg4: { background: '#0000ff' } });
        setTimeout(function () {this.setState({ bg4: { background: '#3333ff' } });}.bind(this), t);
      } else {
        this.audioBeep.src = 'https://www.soundjay.com/misc/fail-buzzer-01.mp3';
      }

      this.audioBeep.play();

    } }, { key: 'saveArr', value: function saveArr(

    n) {
      var a = [];
      for (i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random() * 4) + 1;
      }

      this.setState({ arr: a });

      //arr.push(a);
      //this.setState({arr: arr});

      //console.log('saveArr:');
      //console.log(a);
    } }, { key: 'displayCount', value: function displayCount(

    n) {
      if (n != '' && n != '--') {
        if (n < 10)
        n = '0' + n;

        return n;
      }
      return n;
    } }, { key: 'render', value: function render()

    {var _this3 = this;
      return (
        React.createElement('div', { className: 'main' },
          React.createElement('div', { className: 'line1' }),
          React.createElement('div', { className: 'line2' }),



          React.createElement('div', { className: 'bgcircle1' }),



          React.createElement('div', { className: 'bgcircle2' }),



          React.createElement('div', { className: 'center' },
            React.createElement('div', { className: 'item1' }, React.createElement('h1', { className: 'brand' }, 'Simon', React.createElement('span', { className: 'small' }, '\xAE'))),
            React.createElement('div', { className: 'item2' }),
            React.createElement('div', { className: 'item3' }),
            React.createElement('div', { className: 'item4' }, React.createElement('button', { className: this.state.strict === true ? 'button3 button3bg1' : 'button3 button3bg2' })),
            React.createElement('div', { className: 'item5' },
              React.createElement('div', { className: 'count' }, this.displayCount(this.state.display))),

            React.createElement('div', { className: 'item6' }, React.createElement('button', { className: 'button1', onClick: this.start })),
            React.createElement('div', { className: 'item7' }, React.createElement('button', { className: 'button2', onClick: this.strict })),
            React.createElement('div', { className: 'item8' }, 'COUNT'),
            React.createElement('div', { className: 'item9' }, 'START'),
            React.createElement('div', { className: 'item10' }, 'STRICT'),
            React.createElement('div', { className: 'item11' },
              React.createElement('div', { className: 'power1' }, 'OFF'),
              React.createElement('div', { className: 'power2' },
                React.createElement('label', { className: 'switch' },
                  React.createElement('input', { type: 'checkbox', checked: this.state.power, onClick: this.power }),
                  React.createElement('span', { className: 'slider round' }))),


              React.createElement('div', { className: 'power3' }, ' ON'))),



          React.createElement('svg', { height: '520', width: '520', className: 'bgcircle' },
            React.createElement('circle', { cx: '260', cy: '260', r: '260', stroke: 'black', 'stroke-width': '0', fill: '#333' })),


          React.createElement('ul', { className: 'menu' },
            React.createElement('li', { className: 'one', style: this.state.bg1 },
              React.createElement('div', { className: "btn " + this.state.clickable, onClick: function onClick() {_this3.btn(1);} })),

            React.createElement('li', { className: 'two', style: this.state.bg2 },
              React.createElement('div', { className: "btn " + this.state.clickable, onClick: function onClick() {_this3.btn(2);} })),

            React.createElement('li', { className: 'three', style: this.state.bg3 },
              React.createElement('div', { className: "btn " + this.state.clickable, onClick: function onClick() {_this3.btn(3);} })),

            React.createElement('li', { className: 'four', style: this.state.bg4 },
              React.createElement('div', { className: "btn " + this.state.clickable, onClick: function onClick() {_this3.btn(4);}, ref: function ref(div) {return _this3.btnFour = div;} }))),


          React.createElement('audio', { id: 'beep', preload: 'auto',
            src: 'https://goo.gl/65cBl1', ref: function ref(audio) {_this3.audioBeep = audio;} })));




    } }]);return Main;}(React.Component);var


Author = function (_React$Component3) {_inherits(Author, _React$Component3);function Author() {_classCallCheck(this, Author);return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));}_createClass(Author, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'author' }, 'Designed and Coded By',
          React.createElement('br', null),
          React.createElement('a', { target: '_blank', href: 'https://codepen.io/dashzeveg' }, 'Dashzeveg')));


    } }]);return Author;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/*
                                                                                 $(document).ready(function(){
                                                                                   $('#app').click(function() {
                                                                                     $(this).css('color', 'red');
                                                                                   });
                                                                                 });
                                                                                 */