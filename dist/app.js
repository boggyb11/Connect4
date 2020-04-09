(function (React, ReactDOM) {
    'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    var Grid = function Grid() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Connect 4 Grid"), /*#__PURE__*/React.createElement("div", {
        className: "GameBoard"
      }, "ss"));
    };

    var App = function App() {
      return /*#__PURE__*/React.createElement(Grid, null);
    };

    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

}(React, ReactDOM));
