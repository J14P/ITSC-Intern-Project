/* eslint-disable max-len */

import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { AssessmentService } from '../../microservices/AssessmentService';
import Questions from '../../components/questions';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const instrumentType = `Cat Behavioral Instrument`;
  const currentDate = new Date();

  const [ catName, setNameValue ] = useState(``);
  const [ catDateOfBirth, setDateValue ] = useState(``);
  const [ score, setScoreValue ] = useState(`0`);
  const [ riskLevel, setRiskLevel ] = useState(`Low`);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  function getScoreData(data) {
    setScoreValue(data);
  }

  const handleRiskLevel = (level) => {
    if (score >= 0 && score <= 1) {
      level = `Low`;
    } else if (score >= 2 && score <= 3) {
      level = `Medium`;
    } else if (score >= 4 && score <= 5) {
      level = `High`;
    }
    setRiskLevel(level);
  };

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  const handleSubmit = () => {
    console.log(`something is happening`);
    const createdAt = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    // eslint-disable-next-line sort-keys
    onSubmit({ instrument_type: instrumentType, score, risk_level: riskLevel, cat_name: catName, cat_date_of_birth: catDateOfBirth, created_at: createdAt });
  };

  return <Form name="CatAssessmentForm">
    <h1>New Assessment</h1>
    <p>Current Risk Level: <input type="text" value={riskLevel} readOnly={true} /></p>
    <p>Current Score Level: <input type="text" value={score} readOnly={true} /></p>
    <h2>Instrument</h2>
    <label>
      Instrument Name:
      <input type="text" name="instrumentType" value={instrumentType} readOnly={true} />
    </label><br />
    <h2>Cat Details</h2>
    <label>
      Cat Name:
      <input type="text" name="catName" value={catName} placeholder="Cat Name" onChange={handleNameChange} /></label><br />
    <label>
      Date of Birth:
      <input type="date" value={catDateOfBirth} onChange={handleDateChange} />
    </label>
    <Questions /><br />
    <Button variant="primary" onClick={() => { handleSubmit(); }}>Submit</Button>
  </Form>;
};
