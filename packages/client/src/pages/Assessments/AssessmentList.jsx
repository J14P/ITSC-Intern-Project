/* eslint-disable sort-keys */

import React, { useEffect, useMemo, useState } from 'react';
import { AssessmentService } from '../../microservices/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      if (await AssessmentService.getList()) {
        setAssessments(await AssessmentService.getList());
      }
      else {
        setAssessments([{
          id: 1,
          instrument_type: `Cat Behavioral Assessment`,
          score: 3,
          risk_level: `Medium`,
          cat_name: `Test`,
          cat_date_of_birth: `1/1/2000`,
          created_at: new Date().toString(),
        }]);
      }

    };
    fetchAssessments();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: `Assessment ID`,
        accessor: `id`,
      },
      {
        Header: `Instrument Type`,
        accessor: `instrument_type`,
      },
      {
        Header: `Score`,
        accessor: `score`,
      },
      {
        Header: `Risk Level`,
        accessor: `risk_level`,
      },
      {
        Header: `Cat Name`,
        accessor: `cat_name`,
      },
      {
        Header: `Cat DOB`,
        accessor: `cat_date_of_birth`,
      },
      {
        Header: `Created At`,
        accessor: `created_at`,
      },
      {
        Header: `Updated At`,
        accessor: `updated_at`,
      },
      {
        Header: `Deleted At`,
        accessor: `deleted_at`,
      },
    ],
    []
  );

  return (
    <><h1>Assessment List</h1> <hr />
      <div>
        {/*
        List goes here
        Please use the library react-table https://www.npmjs.com/package/react-table
        */
          <Table columns={columns} data={assessments} />
        }
      </div>
    </>
  );
};
