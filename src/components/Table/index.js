import React from "react";
import { Table } from 'react-bootstrap';
import { useTable, useSortBy } from "react-table";
import { Container } from "./styles";
import Star from "../Star";

export default function TableComp({ columns, data }) {
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable(
      {
        columns,
        data
      },
      useSortBy
    );
    
    return (
      <Container>
        
        <Table {...getTableProps()} className="striped bordered hover" id="tblRanking">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, j) => {
                    return (
                      <td {...cell.getCellProps()} >{
                        cell.column.id === 'classificacao' 
                        ? <Star data={cell.value} key={i} />
                        : cell.render("Cell")
                      }</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }