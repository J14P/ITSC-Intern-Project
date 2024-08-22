
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';
import AssessmentTitle from '../../components/AssessmentTitle';
import Instrument from '../../components/instrument';
import CatDetails from '../../components/catdetails';
import Questions from '../../components/questions';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const score = 0;
  let riskLevel = `Low`;
  let timeCreated = new Date();

  const onSubmit = async (data) => {
    timeCreated = timeCreated.getDate();

    if (score >= 0 && score <= 1) {
      riskLevel = `Low`;
    } else if (score >= 2 && score <= 3) {
      riskLevel = `Medium`;
    } else if (score >= 4 && score <= 5) {
      riskLevel = `High`;
    }

    console.log(timeCreated);

    await AssessmentService.submit(data);
  };

  return <Form>
    <AssessmentTitle />
    <h2>Instrument</h2>
    <Instrument /><br />
    <CatDetails /><br />
    <Questions /><br />
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
