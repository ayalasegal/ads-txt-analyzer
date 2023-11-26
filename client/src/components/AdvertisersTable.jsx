import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { LinearProgress } from '@mui/material';
import { CustomHeader } from './CustomHeader';

function AdvertisersTable({ advertisers }) {
  const [sortModel, setSortModel] = useState([{ field: 'count', sort: 'desc' }]);
  const columns = [
    { field: 'domain', headerName: 'Domain', flex: 1, sortable: false },
    { field: 'count', headerName: 'Count', flex: 1, headerComponent: CustomHeader, sortable: true },
  ];

  const handleSortModelChange = (newSortModel) => {
    setSortModel(newSortModel);
  };

  return (
    <div className="table-container">
      <DataGrid
        disableColumnMenu
        slots={{ loadingOverlay: LinearProgress }}
        columns={columns}
        rows={advertisers}
        autoHeight
        pageSize={advertisers.length}
        getRowId={(row) => row.domain}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        sortingOrder={['desc', 'asc']}
        sx={{ width: '100%' }}
      />
    </div>
  );
}

export default AdvertisersTable;
