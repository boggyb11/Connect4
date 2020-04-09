(function (React, ReactDOM) {
    'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    var Grid = function Grid() {
      return /*#__PURE__*/React.createElement("h2", null, "YEET");
    };

    var App = function App() {
      return /*#__PURE__*/React.createElement(Grid, null);
    };

    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

}(React, ReactDOM));
