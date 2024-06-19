import React from 'react';
import DataTable from "react-data-table-component";
import '../components/Table.css';
import { TiArrowUnsorted } from "react-icons/ti";


const TableData = ({data,columns}) => {
  return (
    <DataTable
      columns={columns}
      data={data} // Paginated data
      noHeader
      defaultSortField="id"
      sortIcon={<TiArrowUnsorted />}
      defaultSortAsc={true}
      pagination
      paginationPerPage={5} // Number of rows per page
      paginationRowsPerPageOptions={[5, 10, 15, 20]} // Options for rows per page
      paginationTotalRows={data.length} // Total rows for pagination
      highlightOnHover
      dense
    />
  );
}

export default TableData;
