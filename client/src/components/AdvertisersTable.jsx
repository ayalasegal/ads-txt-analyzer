import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { LinearProgress } from '@mui/material';
import { CustomHeader } from './CustomHeader';
 function AdvertisersTable({advertisers}){
  console.log("advertisers: ",advertisers)
    const [sortModel, setSortModel] = useState([
        { field: 'count', sort: 'desc' }, // Initial sorting on the 'count' column in ascending order
      ]);
    const columns = [
        { field: 'domain', headerName: 'Domain', flex: 1, sortable: false },
        { field: 'count', headerName: 'Count', flex: 1, headerComponent: CustomHeader, sortable: true },
      ];
    
      const handleSortModelChange = (newSortModel) => {
        setSortModel(newSortModel);
      };
    return (
        <>
              {<DataGrid
        disableColumnMenu
        slots={{loadingOverlay:LinearProgress}}
        columns={columns}
        rows={advertisers}
        autoHeight
        pageSize={advertisers.length}
        getRowId={(row) => row.domain}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        sortingOrder={['desc', 'asc']}
        sx={{width:'90%'}}
      />}
        </>
    )
}
export default AdvertisersTable;
