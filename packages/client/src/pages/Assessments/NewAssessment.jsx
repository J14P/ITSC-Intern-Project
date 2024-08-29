/* eslint-disable max-len */

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { AssessmentService } from '../../microservices/AssessmentService';
import Questions from '../../components/questions';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const instrumentType = `Cat Behavioral Instrument`;
  let score = 0;
  let riskLevel = `Low`;
  let catName = ``;
  let catDateOfBirth = new Date();
  let createdAt = new Date();

  const [ nameValue, setNameValue ] = useState(``);
  const [ dateValue, setDateValue ] = useState(``);
  const [ scoreValue, setScoreValue ] = useState(``);

  const getScoreData = (val) => {
    setScoreValue(val);
  };

  const onSubmit = async (data) => {

    await AssessmentService.submit(data);
  };

  function Submit() {
    score = scoreValue;
    catName = nameValue;
    catDateOfBirth = dateValue;
    createdAt = createdAt.getDate();

    riskLevel = `test`;

    if (score >= 0 && score <= 1) {
      riskLevel = `Low`;
    } else if (score >= 2 && score <= 3) {
      riskLevel = `Medium`;
    } else if (score >= 4 && score <= 5) {
      riskLevel = `High`;
    }

    console.log(catName);
    console.log(catDateOfBirth);
    console.log(score);

    onSubmit(instrumentType, score, riskLevel, catName, catDateOfBirth, createdAt);
  }

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  return <Form name="CatAssessmentForm">
    <h1>New Assessment</h1>
    <p>Current Risk Level: {riskLevel}</p>
    <h2>Instrument</h2>
    <label>
      Instrument Name:
      <input type="text" name="instrumentType" value={instrumentType} readOnly={true} />
    </label><br />
    <h2>Cat Details</h2>
    <label>
      Cat Name:
      <input type="text" name="catName" value={nameValue} placeholder="Cat Name" onChange={handleNameChange} /></label><br />
    <label>
      Date of Birth:
      <input type="date" value={dateValue} onChange={handleDateChange} />
    </label>
    <Questions sendToParent={getScoreData} /><br />
    <Button variant="primary" type="submit" onClick={() => Submit}>Submit</Button>
  </Form>;
};
