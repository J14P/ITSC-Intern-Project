/* eslint-disable no-console */
/* eslint-disable sort-keys */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { AssessmentService } from '../../microservices/AssessmentService';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) =>
  <span>
    Search/Filter:{` `}
    <input
      value={globalFilter || ``}
      onChange={e => setGlobalFilter(e.target.value || undefined)}
      placeholder="Enter values to filter the table..."
      className="globalFilterInput"
    />
  </span>;
export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        let response;
        setLoading(true);
        if (await AssessmentService.getList()) {
          response = await AssessmentService.getList();
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
        const nonDeletedAssessments = response.assessments.filter(assessment => !assessment.deleted);
        setAssessments(nonDeletedAssessments || []);
      } catch (err) {
        console.error(`Failed to fetch assessments:`, err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAssessments();
  }, []);

  const deleteAssessment = useCallback(async (assessmentId) => {
    try {
      await AssessmentService.deleteAssessment(assessmentId);
      setAssessments(assessments.filter(assessment => assessment.id !==
        assessmentId));
    }
    catch (err) {
      console.error(`Failed to delete the assessment`, err.message);
    }
  }, [ assessments ]);

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
    ], [ assessments ]
  );

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
    state,
  } = useTable(
    { columns, data: assessments },
    useGlobalFilter,
    useSortBy,
  );

  return (
    <div>
      {loading ?
        <div>Loading...</div> :
        <>
          <h1>Assessments List</h1>
          <div className="globalFilter">
            <GlobalFilter
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter} />
          </div>
          <div>
            <table className={`tableWrapper`} {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => {
                  const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={key} {...restHeaderGroupProps}>
                      {headerGroup.headers.map((column) => {
                        // eslint-disable-next-line no-shadow
                        const { key, ...restColumn } = column.getHeaderProps();
                        return (
                          <th key={key} {...restColumn}>
                            {column.render(`Header`)}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps}>
                {rows.map((row) => {
                  prepareRow(row);
                  const { key, ...restRowProps } = row.getRowProps();
                  return (
                    <tr key={key} {...restRowProps}>
                      {row.cells.map((cell) => {
                        // eslint-disable-next-line no-shadow
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                          <td key={key} {...restCellProps}>
                            {cell.render(`Cell`)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>}
    </div>
  );
};
