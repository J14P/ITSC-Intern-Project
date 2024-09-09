import React, { useEffect, useState } from 'react';
import { AssessmentService } from '../../microservices/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  return (
    <><h1>Assessment List</h1> <hr />
      <div>
        {/*
        List goes here
        Please use the library react-table https://www.npmjs.com/package/react-table
        */}
      </div>
    </>
  );
};
