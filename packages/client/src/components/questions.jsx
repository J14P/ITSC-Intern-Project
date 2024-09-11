/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Questions({ setScore }) {

  const [ value, setValue ] = useState(0);
  const [ value2, setValue2 ] = useState(0);
  const [ value3, setValue3 ] = useState(0);
  const [ value4, setValue4 ] = useState(0);
  const [ value5, setValue5 ] = useState(0);

  function handleOptionChange(e) {
    switch (e.target.name) {
      case `value`:
        setValue(parseInt(e.target.value));
        break;
      case `value2`:
        setValue2(parseInt(e.target.value));
        break;
      case `value3`:
        setValue3(parseInt(e.target.value));
        break;
      case `value4`:
        setValue4(parseInt(e.target.value));
        break;
      case `value5`:
        setValue5(parseInt(e.target.value));
        break;
      default:
        console.log(`no matching case`);
        break;
    }
  }

  useEffect(() => {
    setScore(parseInt(value) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5));
  }, [ value, value2, value3, value4, value5, setScore ]);

  return (
    <>
      <h2>Questions & Responses</h2>
      <ol>
        <li><p>Previous contact with the Cat Judicial System</p>
          <ul>
            <li><label><input type="radio" value={0} name="value" checked={value === 0} onChange={handleOptionChange} /> No (score = 0)</label></li>
            <li><label><input type="radio" value={1} name="value" checked={value === 1} onChange={handleOptionChange} /> Yes (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Physical altercations with other cats</p>
          <ul>
            <li><label><input type="radio" name="value2" value={0} checked={value2 === 0} onChange={handleOptionChange} /> 0-3 altercations (score = 0)</label></li>
            <li><label><input type="radio" name="value2" value={1} checked={value2 === 1} onChange={handleOptionChange} /> 3+ altercations (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
          <ul>
            <li><label><input type="radio" name="value3" value={0} checked={value3 === 0} onChange={handleOptionChange} /> 0-10 altercations (score = 0)</label></li>
            <li><label><input type="radio" name="value3" value={1} checked={value3 === 1} onChange={handleOptionChange} /> 10+ altercations (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Plays well with dogs</p>
          <ul>
            <li><label><input type="radio" name="value4" value={0} checked={value4 === 0} onChange={handleOptionChange} /> Yes (score = 0)</label></li>
            <li><label><input type="radio" name="value4" value={1} checked={value4 === 1} onChange={handleOptionChange} /> No (score = 1)</label></li><br />
          </ul>
        </li>
        <li><p>Hisses at strangers</p>
          <ul>
            <li><label><input type="radio" name="value5" value={0} checked={value5 === 0} onChange={handleOptionChange} /> No (score = 0)</label></li>
            <li><label><input type="radio" name="value5" value={1} checked={value5 === 1} onChange={handleOptionChange} /> Yes (score = 1)</label></li><br />
          </ul>
        </li>
      </ol>
    </>
  );
}
