(function (React, ReactDOM) {
    'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    var Header = function Header() {
      return /*#__PURE__*/React.createElement("header", {
        className: "shadow"
      }, /*#__PURE__*/React.createElement("h1", null, "Connect four"));
    };

    var Grid = function Grid() {
      var slots = Array(6 * 7).fill(null);
      return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("ul", {
        className: "game-board reset-list flex theme-blueberry"
      }, slots.map(function (x, i) {
        return /*#__PURE__*/React.createElement("li", {
          className: "slot",
          key: i
        });
      })));
    };

    var App = function App() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Grid, null));
    };

    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

}(React, ReactDOM));
