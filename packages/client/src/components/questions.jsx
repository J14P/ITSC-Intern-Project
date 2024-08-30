/* eslint-disable max-len */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const options1 = [
  { text: `No (score = 0)`, value: 0 },
  { text: `Yes (score = 1)`, value: 1 },
];

const options2 = [
  { text: `0-3 altercations (score = 0)`, value: 0 },
  { text: `3+ altercations (score = 1)`, value: 1 },
];

const options3 = [
  { text: `10+ altercations (score = 1)`, value: 1 },
  { text: `0-10 altercations (score = 0)`, value: 0 },
];

const options4 = [
  { text: `No (score = 1)`, value: 1 },
  { text: `Yes (score = 0)`, value: 0 },
];

const options5 = [
  { text: `No (score = 0)`, value: 0 },
  { text: `Yes (score = 1)`, value: 1 },
];
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: `0`,
      selectedOption2: `0`,
      selectedOption3: `0`,
      selectedOption4: `0`,
      selectedOption5: `0`,
    };
  }

  render() {
    const { value, value2, value3, value4, value5 } = this.state;
    return (
      <>
        <h2>Questions & Responses</h2>
        <ol>
          <li><p>Previous contact with the Cat Judicial System</p>
            <ul>
              <li><label><input type="radio" value="value" name="value" checked={value === options1.value} onChange={() => this.setState({ selectedOption: options1.value })} /> No (score = 0)</label></li>
              <li><label><input type="radio" value="value" name="value" checked={value === options1.value} onChange={() => this.setState({ selectedOption: options1.value })} /> Yes (score = 1)</label></li><br />
            </ul>
          </li>
          <li><p>Physical altercations with other cats</p>
            <ul>
              <li><label><input type="radio" name="value2" value="0" checked={value2 === options2.value} onChange={() => this.setState({ selectedOption: options2.value })} /> 0-3 altercations (score = 0)</label></li>
              <li><label><input type="radio" name="value2" value="1" checked={value2 === options2.value} onChange={() => this.setState({ selectedOption: options2.value })} /> 3+ altercations (score = 1)</label></li><br />
            </ul>
          </li>
          <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
            <ul>
              <li><label><input type="radio" name="value3" value="1" checked={value3 === options3.value} onChange={() => this.setState({ selectedOption: options3.value })} /> 10+ altercations (score = 1)</label></li>
              <li><label><input type="radio" name="value3" value="0" checked={value3 === options3.value} onChange={() => this.setState({ selectedOption: options3.value })} /> 0-10 altercations (score = 0)</label></li><br />
            </ul>
          </li>
          <li><p>Plays well with dogs</p>
            <ul>
              <li><label><input type="radio" name="value4" value="1" checked={value4 === options4.value} onChange={() => this.setState({ selectedOption: options4.value })} /> No (score = 1)</label></li>
              <li><label><input type="radio" name="value4" value="0" checked={value4 === options4.value} onChange={() => this.setState({ selectedOption: options4.value })} /> Yes (score = 0)</label></li><br />
            </ul>
          </li>
          <li><p>Hisses at strangers</p>
            <ul>
              <li><label><input type="radio" name="value5" value="1" checked={value5 === options5.value} onChange={() => this.setState({ selectedOption: options5.value })} /> Yes (score = 1)</label></li>
              <li><label><input type="radio" name="value5" value="0" checked={value5 === options5.value} onChange={() => this.setState({ selectedOption: options5.value })} /> No (score = 0)</label></li><br />
            </ul>
          </li>
        </ol>
      </>
    );
  }
}

export default Questions;
