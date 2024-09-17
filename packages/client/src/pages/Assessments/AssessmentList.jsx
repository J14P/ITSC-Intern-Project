/* eslint-disable no-console */
/* eslint-disable sort-keys */

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../microservices/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) =>
  <span>
    Search/Filter:{` `}
    <input
      value={globalFilter || ``}
      onChange={e => setGlobalFilter(e.target.value || undefined)}
      placeholder="Enter values to filter the table..."
      className="globalFilter"
    />
  </span>;

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      if (await AssessmentService.getList()) {
        try {
          setLoading(true);
          const response = await AssessmentService.getList();
          const nonDeletedAssessments = response.assessments.filter(assessment => !assessment.deleted);
          setAssessments(nonDeletedAssessments || []);
        } catch (err) {
          console.error(`Failed to fetch assessments:`, err.message);
        } finally {
          setLoading(false);
        }
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

  const deleteAssessment = async (assessmentId) => {
    try {
      await AssessmentService.delete(assessmentId);
      setAssessments(assessments.filter(assessment => assessment.id !==
        assessmentId));
    }
    catch (err) {
      console.error(`Failed to delete the assessment`, err.message);
    }
  };

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
      {
        Cell: ({ value }) =>
          <Button variant="danger" onClick={() =>
            deleteAssessment(value)}>
            Delete
          </Button>,
        Header: `Actions`,
        accessor: `delete`,
      },
    ], [ deleteAssessment ]
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
