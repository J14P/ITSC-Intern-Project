/* eslint-disable no-shadow */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import dayjs from 'dayjs';
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
  const [ show, setShow ] = useState();
  const [ disabled, setDisabled ] = useState(false);

  // Fetch all assessments using AssessmentService.getList function
  useEffect(() => {
    const fetchAssessments = async () => {
      if (show === true) {
        const response = await AssessmentService.getAll();
        const allAssessments = response.assessments.filter(assessment => assessment);
        setAssessments(allAssessments || []);
      } else {
        try {
          setLoading(true);
          const response = await AssessmentService.getList();
          setDisabled(false);
          const nonDeletedAssessments = response.assessments.filter(assessment => !assessment.deleted); // Only return non-deleted assessments
          setAssessments(nonDeletedAssessments || []);
        } catch (err) {
          console.error(`Failed to fetch assessments:`, err.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchAssessments();
  }, [ show ]);

  // Delete assessment function
  const deleteAssessment = async (assessmentId) => {
    try {
      await AssessmentService.deleteAssessment(assessmentId);
      // Remove the deleted assessment from the list
      setAssessments(assessments.filter(assessment => assessment.id !== assessmentId));
    } catch (err) {
      console.error(`Failed to delete the assessment:`, err.message);
    }
  };

  const toggleDeletedAssessment = (event) => {
    if (event.target.checked === true)
    {
      setShow(true);
    } else
    {
      setShow(false);
    }
  };

  // Define columns for the table
  const columns = React.useMemo(() => [
    {
      Header: `Assessment ID`, accessor: `id`,
    },
    {
      Header: `Instrument Type`, accessor: `instrumentType`,
    },
    {
      Header: `Risk Score`, accessor: `score`,
    },
    {
      Header: `Risk Level`, accessor: `riskLevel`,
    },
    {
      Header: `Cat Name`, accessor: `catName`,
    },
    {
      Header: `Cat D.O.B.`, accessor: row => dayjs(row.CatDateOfBirth).format(`MMM D, YYYY`),
    },
    {
      Header: `Created At`, accessor: row => dayjs(row.createdAt).format(`MMM D, YYYY`),
    },
    {
      Header: `Updated At`, accessor: row => dayjs(row.updatedAt).format(`MMM D, YYYY`),
    },
    {
      Header: `Deleted At`, accessor: row => dayjs(row.deletedAt).format(`MMM D, YYYY`),
    },
    {
      Cell: ({ value }) =>
        <Button variant="danger" disabled={disabled} onClick={() => deleteAssessment(value)}>
          Delete
        </Button>,
      Header: `Actions`,
      accessor: `id`,
      id: `delete`,
    },
  ], [ assessments ]);

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
    state,
  } = useTable(
    { columns, data: assessments, initialState: { sortBy: [{ desc: false, id: `id` }] } },
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
          <div className="toggleContainer">
            <input
              type="checkbox"
              value="false"
              className="toggleBox"
              onClick={(e) => toggleDeletedAssessment(e)}
            />
            <p className="toggleP">
              Toggle Show Deleted Assessments
            </p>
          </div>
          <div className="tableDiv">
            <table className={`tableWrapper`} {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => {
                  const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={key} {...restHeaderGroupProps}>
                      {headerGroup.headers.map((column) => {
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
