import React from 'react';
import './App.css';
import Base from './Base.js';

class Bases extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number) {
    this.setState({ number });
  }

  render() {
    const bases = [2, 8, 10].map((base, index) => (
      <Base
        number={this.state.number}
        onChange={this.handleChange}
        base={base}
        key={index}
      />
    ));
    return <div>{bases}</div>;
  }
}
export default Bases;
