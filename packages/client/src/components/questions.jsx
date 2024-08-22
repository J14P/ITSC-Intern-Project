/* eslint-disable max-len */
import React, { Component } from 'react';

class Questions extends Component {
  state = {
    value: `No`,
    value2: `0-3 altercations`,
    value3: `0-10 altercations`,
    value4: `Yes`,
    value5: `No`,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { value, value2, value3, value4, value5 } = this.state;
    return (
      <>
        <h2>Questions & Responses</h2>
        <ol>
          <li><p>Previous contact with the Cat Judicial System</p>
            <ul>
              <li><label><input type="radio" value="No" name="value" checked={value === `No`} onChange={this.onChange} id="prevContactNo" /> No (score = 0)</label></li>
              <li><label><input type="radio" value="Yes" name="value" checked={value === `Yes`} onChange={this.onChange} id="prevContactYes" /> Yes (score = 1)</label></li>
            </ul>
          </li>
          <li><p>Physical altercations with other cats</p>
            <ul>
              <li><label><input type="radio" name="value2" value="0-3 altercations" checked={value2 === `0-3 altercations`} onChange={this.onChange} /> 0-3 altercations (score = 0)</label></li>
              <li><label><input type="radio" name="value2" value="3+ altercations" checked={value2 === `3+ altercations`} onChange={this.onChange} /> 3+ altercations (score = 1)</label></li>
            </ul>
          </li>
          <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
            <ul>
              <li><label><input type="radio" name="value3" value="10+ altercations" checked={value3 === `10+ altercations`} onChange={this.onChange} /> 10+ altercations (score = 1)</label></li>
              <li><label><input type="radio" name="value3" value="0-10 altercations" checked={value3 === `0-10 altercations`} onChange={this.onChange} /> 0-10 altercations (score = 0)</label></li>
            </ul>
          </li>
          <li><p>Plays well with dogs</p>
            <ul>
              <li><label><input type="radio" name="value4" value="No" checked={value4 === `No`} onChange={this.onChange} /> No (score = 1)</label></li>
              <li><label><input type="radio" name="value4" value="Yes" checked={value4 === `Yes`} onChange={this.onChange} /> Yes (score = 0)</label></li>
            </ul>
          </li>
          <li><p>Hisses at strangers</p>
            <ul>
              <li><label><input type="radio" name="value5" value="Yes" checked={value5 === `Yes`} onChange={this.onChange} /> Yes (score = 1)</label></li>
              <li><label><input type="radio" name="value5" value="No" checked={value5 === `No`} onChange={this.onChange} /> No (score = 0)</label></li>
            </ul>
          </li>
        </ol>
      </>
    );
  }
}

export default Questions;
