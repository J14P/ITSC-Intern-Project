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
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: `Assessments`,
        columns: [
          {
            header: `id`,
            accessorKey: `id`,
          },
          {
            header: `instrument_type`,
            accessorKey: `instrument.type`,
          },
          {
            header: `score`,
            accessorKey: `score`,
          },
          {
            header: `risk_level`,
            accessorKey: `risk.level`,
          },
          {
            header: `cat_name`,
            accessorKey: `cat.name`,
          },
          {
            header: `cat_date_of_birth`,
            accessorKey: `cat.date.of.birth`,
          },
          {
            header: `created_at`,
            accessorKey: `created.at`,
          },
          {
            header: `updated_at`,
            accessorKey: `updated.at`,
          },
          {
            header: `deleted_at`,
            accessorKey: `deleted.at`,
          },

        ],
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
