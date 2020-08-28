import React from 'react';

const convert = function (number, base) {
  return number.toString(base);
};

const isValid = function (number, base) {
  console.log(number, base, number % 10 < base);
  return number % 10 < base;
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = +event.target.value;
    const number = isValid(value, this.props.base)
      ? parseInt(value, this.props.base)
      : this.props.number;

    this.props.onChange(number);
  }

  render() {
    return (
      <div>
        <label>Base {this.props.base}</label>
        <input
          value={convert(this.props.number, this.props.base)}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Base;
