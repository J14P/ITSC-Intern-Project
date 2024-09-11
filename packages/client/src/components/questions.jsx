/* eslint-disable max-len */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectRowsFn } from '@tanstack/react-table';

/* class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      selectedOption2: 0,
      selectedOption3: 0,
      selectedOption4: 0,
      selectedOption5: 0,
    };
  }

  render() {
    const { value, value2, value3, value4, value5 } = this.state;

    return (
    );
  }
}

export default Questions;*/

export default function Questions() {

  const [ value, setValue ] = useState(`0`);
  const [ value2, setValue2 ] = useState(`0`);
  const [ value3, setValue3 ] = useState(`1`);
  const [ value4, setValue4 ] = useState(`1`);
  const [ value5, setValue5 ] = useState(`1`);

  function handleOptionChange(e) {
    setValue(e.target.value);
  }

  function handleOptionChange2(e) {
    setValue2(e.target.value);
  }

  function handleOptionChange3(e) {
    setValue3(e.target.value);
  }

  function handleOptionChange4(e) {
    setValue4(e.target.value);
  }

  function handleOptionChange5(e) {
    setValue5(e.target.value);
  }

  return (
    <>
      <h2>Questions & Responses</h2>
      <ol>
        <li><p>Previous contact with the Cat Judicial System</p>
          <ul>
            <li><label><input type="radio" value="0" name="value" checked={value === `0`} onChange={handleOptionChange} /> No (score = 0)</label></li>
            <li><label><input type="radio" value="1" name="value" checked={value === `1`} onChange={handleOptionChange} /> Yes (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Physical altercations with other cats</p>
          <ul>
            <li><label><input type="radio" name="value2" value="0" checked={value2 === `0`} onChange={handleOptionChange2} /> 0-3 altercations (score = 0)</label></li>
            <li><label><input type="radio" name="value2" value="1" checked={value2 === `1`} onChange={handleOptionChange2} /> 3+ altercations (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
          <ul>
            <li><label><input type="radio" name="value3" value="1" checked={value3 === `1`} onChange={handleOptionChange3} /> 10+ altercations (score = 1)</label></li>
            <li><label><input type="radio" name="value3" value="0" checked={value3 === `0`} onChange={handleOptionChange3} /> 0-10 altercations (score = 0)</label></li><br />
          </ul>
        </li>
        <li><p>Plays well with dogs</p>
          <ul>
            <li><label><input type="radio" name="value4" value="1" checked={value4 === `1`} onChange={handleOptionChange4} /> No (score = 1)</label></li>
            <li><label><input type="radio" name="value4" value="0" checked={value4 === `0`} onChange={handleOptionChange4} /> Yes (score = 0)</label></li><br />
          </ul>
        </li>
        <li><p>Hisses at strangers</p>
          <ul>
            <li><label><input type="radio" name="value5" value="1" checked={value5 === `1`} onChange={handleOptionChange5} /> Yes (score = 1)</label></li>
            <li><label><input type="radio" name="value5" value="0" checked={value5 === `0`} onChange={handleOptionChange5} /> No (score = 0)</label></li><br />
          </ul>
        </li>
      </ol>
    </>
  );
}
