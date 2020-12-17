import React from 'react';
import ReactDOM from 'react-dom';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
        id: props.id,
        birthdate:props.birthdate,
        first_name: props.first_name,
        last_name: props.last_name,
        email:props.email,
        sex:props.sex
    };

    _this.create = _this.create.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // get all entities - GET

    }
  }, {
    key: 'create',
    value: function create(e) {
      // add entity - POST
      e.preventDefault();

      // creates entity
      fetch("https://o79z9jqhb0.execute-api.us-west-2.amazonaws.com/production/patients", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          id: this.state.id,
          birthdate: this.state.birthdate,
          first_name: this.state.first,
          last_name: this.state.last_name,
          email: this.state.email,
          sex: this.state.sex
        })
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log(response);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(changeObject) {
      this.setState(changeObject);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'h1',
              { className: 'display-4 text-center' },
              'Dialogue Coding Challenge'
            ),
            React.createElement(
              'form',
              { className: 'd-flex flex-column' },
              React.createElement(
                'legend',
                { className: 'text-center' },
                'By: Srikar Kovvali'
              ),
              React.createElement(
                'label',
                { htmlFor: 'id' },
                'ID:',
                React.createElement('input', {
                  name: 'id',
                  id: 'id',
                  type: 'number',
                  className: 'form-control',
                  value: this.state.id,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ name: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'email' },
                'Email:',
                React.createElement('input', {
                  name: 'email',
                  id: 'email',
                  type: 'string',
                  className: 'form-control',
                  value: this.state.email,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ notes: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'first_name' },
                'First Name:',
                React.createElement('input', {
                  name: 'first_name',
                  id: 'first_name',
                  type: 'string',
                  className: 'form-control',
                  value: this.state.first_name,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ id: e.target.value });
                  }
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'last_name' },
                'Last Name:',
                React.createElement('input', {
                  name: 'last_name',
                  id: 'last_name',
                  type: 'string',
                  className: 'form-control',
                  value: this.state.last_name,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ id: e.target.value });
                  }
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'birthdate' },
                'Birthdate:',
                React.createElement('input', {
                  name: 'birthdate',
                  id: 'birthdate',
                  type: 'date',
                  className: 'form-control',
                  value: this.state.birthdate,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ id: e.target.value });
                  }
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'sex' },
                'Sex:',
                React.createElement('input', {
                  name: 'sex',
                  id: 'sex',
                  type: 'string',
                  className: 'form-control',
                  value: this.state.sex,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ id: e.target.value });
                  }
                })
              ),
              React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'button', onClick: function onClick(e) {
                    return _this2.create(e);
                  } },
                'Add/Update'
              ),
              React.createElement(
                'button',
                { className: 'btn btn-info', type: 'button', onClick: function onClick(e) {
                    return _this2.componentDidMount(e);
                  } },
                'Show Values'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);
export default App;