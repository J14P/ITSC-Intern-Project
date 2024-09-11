/* eslint-disable max-len */

import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Questions from '../../components/questions';
import { AssessmentService } from '../../microservices/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/color.scss';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const instrumentType = 0;

  const [ catName, setNameValue ] = useState(``);
  const [ catDateOfBirth, setDateValue ] = useState(``);
  const [ score, setScore ] = useState(0);
  const [ riskLevel, setRiskLevel ] = useState(`Low`);
  const [ colorClass, setColorClass ] = useState(`Green`);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  useEffect(() => {
    if (score >= 0 && score <= 1) {
      setRiskLevel(`Low`);
      setColorClass(`Green`);
    } else if (score >= 2 && score <= 3) {
      setRiskLevel(`Medium`);
      setColorClass(`Yellow`);
    } else if (score >= 4 && score <= 5) {
      setRiskLevel(`High`);
      setColorClass(`Red`);
    }
  },
  [ score ]);

  const handleSubmit = () => {
    // eslint-disable-next-line sort-keys
    onSubmit({ instrumentType, score, riskLevel, catName, catDateOfBirth });
  };

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form name="CatAssessmentForm">
    <h1>New Assessment</h1>
    <p>Current Risk Level: <input type="text" className={colorClass} value={riskLevel} readOnly={true} /></p>
    <p>Current Score Level: <input type="text" className={colorClass} value={score} readOnly={true} /></p>
    <div className="instrument">
      <h2>Instrument</h2>
      <div className="instrumentNameContainer">
        <p className="pp">
          Instrument Name:
        </p>
        <input type="text" className="instrumentName" name="instrumentType" value="Cat Behavioral Instrument" readOnly={true} />
      </div>
    </div>
    <div className="catDetails">
      <h2>Cat Details</h2>
      <label className="catName">
        Cat Name:
        <input type="text" name="catName" value={catName} placeholder="Cat Name" onChange={handleNameChange} /></label><br />
      <label className="catName">
        Date of Birth:
        <input type="date" value={catDateOfBirth} onChange={handleDateChange} />
      </label>
    </div>
    <Questions setScore={setScore} /><br />
    <Button variant="primary" onClick={() => { handleSubmit(); }}>Submit</Button>
  </Form>;
};
