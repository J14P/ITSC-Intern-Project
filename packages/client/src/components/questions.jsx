/* eslint-disable max-len */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Questions extends Component {
  state = {
    value: `0`,
    value2: `0`,
    value3: `0`,
    value4: `0`,
    value5: `0`,
  };

  onChange = (e, score) => {
    this.setState({ [e.target.name]: e.target.value });
    score = this.value + this.value2 + this.value3 + this.value4 + this.value5;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.sendToParent(score);
  };

  render() {
    const { value, value2, value3, value4, value5 } = this.state;
    return (
      <>
        <h2>Questions & Responses</h2>
        <ol>
          <li><p>Previous contact with the Cat Judicial System</p>
            <ul>
              <li><label><input type="radio" value="0" name="value" checked={value === `0`} onChange={this.onChange} /> No (score = 0)</label></li>
              <li><label><input type="radio" value="1" name="value" checked={value === `1`} onChange={this.onChange} /> Yes (score = 1)</label></li>
            </ul>
          </li>
          <li><p>Physical altercations with other cats</p>
            <ul>
              <li><label><input type="radio" name="value2" value="0" checked={value2 === `0`} onChange={this.onChange} /> 0-3 altercations (score = 0)</label></li>
              <li><label><input type="radio" name="value2" value="1" checked={value2 === `1`} onChange={this.onChange} /> 3+ altercations (score = 1)</label></li>
            </ul>
          </li>
          <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
            <ul>
              <li><label><input type="radio" name="value3" value="1" checked={value3 === `1`} onChange={this.onChange} /> 10+ altercations (score = 1)</label></li>
              <li><label><input type="radio" name="value3" value="0" checked={value3 === `0`} onChange={this.onChange} /> 0-10 altercations (score = 0)</label></li>
            </ul>
          </li>
          <li><p>Plays well with dogs</p>
            <ul>
              <li><label><input type="radio" name="value4" value="1" checked={value4 === `1`} onChange={this.onChange} /> No (score = 1)</label></li>
              <li><label><input type="radio" name="value4" value="0" checked={value4 === `0`} onChange={this.onChange} /> Yes (score = 0)</label></li>
            </ul>
          </li>
          <li><p>Hisses at strangers</p>
            <ul>
              <li><label><input type="radio" name="value5" value="1" checked={value5 === `1`} onChange={this.onChange} /> Yes (score = 1)</label></li>
              <li><label><input type="radio" name="value5" value="0" checked={value5 === `0`} onChange={this.onChange} /> No (score = 0)</label></li>
            </ul>
          </li>
        </ol>
      </>
    );
  }
}

export default Questions;
