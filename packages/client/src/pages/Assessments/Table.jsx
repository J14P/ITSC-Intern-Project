import React from 'react';
import { useTable } from 'react-table';

export default function Table({ columns, data }) {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  });

  return (

    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup =>
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column =>
              <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
          </tr>)}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
