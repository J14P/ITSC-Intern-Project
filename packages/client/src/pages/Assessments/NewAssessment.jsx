/* eslint-disable max-len */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form>
    <h1>Cat Assessment Info</h1>
    <h2>Instrument</h2>
    <label for="behavioralInstrument">
      Instrument Name:
      <input type="text" name="behavioralInstrument" id="behavioralInstrument" value="Cat Behavioral Instrument" readOnly="true" /></label><br />
    <h2>Cat Details</h2>
    <label for="catName">
      Cat Name:
      <input type="text" name="catName" id="catName" placeholder="Cat Name" /></label><br />
    <input type="text" placeholder="01-01-1901" /><br />
    <h2>Questions & Responses</h2>
    <ol>
      <li><p>Previous contact with the Cat Judicial System</p>
        <ul>
          <li><input type="radio" value="0" name="previousContact" /> No</li>
          <li><input type="radio" value="1" name="previousContact" /> Yes</li>
        </ul>
      </li>
      <li><p>Physical altercations with other cats</p>
        <ul>
          <li><input type="radio" value="0" name="altercationsCats" /> 0-3 altercations (score = 0)</li>
          <li><input type="radio" value="1" name="altercationsCats" /> 3+ altercations (score = 10)</li>
        </ul>
      </li>
      <li><p>Physical altercations with owner (scratching, biting, etc...)</p>
        <ul>
          <li><input type="radio" value="1" name="altercationsOwner" /> 10+ altercations (score = 1)</li>
          <li><input type="radio" value="0" name="altercationsOwner" /> 0-10 altercations (score = 0)</li>
        </ul>
      </li>
      <li><p>Plays well with dogs</p>
        <ul>
          <li><input type="radio" value="1" name="playsWellWithDogs" /> No (score = 1)</li>
          <li><input type="radio" value="0" name="playsWellWithDogs" /> Yes (score = 0)</li>
        </ul>
      </li>
      <li><p>Hisses at strangers</p>
        <ul>
          <li><input type="radio" value="1" name="hissesAtStrangers" /> Yes (score = 1)</li>
          <li><input type="radio" value="0" name="hissesAtStrangers" /> No (score = 0)</li>
        </ul>
      </li>
    </ol>

    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
