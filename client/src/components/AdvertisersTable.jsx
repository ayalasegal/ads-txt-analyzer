import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CustomHeader } from "./CustomHeader";

function AdvertisersTable({ advertisers }) {
  const [sortModel, setSortModel] = useState([
    { field: "count", sort: "desc" },
  ]);
  const columns = [
    { field: "domain", headerName: "Domain", flex: 1, sortable: false },
    {
      field: "count",
      headerName: "Count",
      flex: 1,
      headerComponent: CustomHeader,
      sortable: true,
    },
  ];

  const handleSortModelChange = (newSortModel) => {
    setSortModel(newSortModel);
  };

  return (
    <div className="table-container">
      <DataGrid
        disableColumnMenu
        columns={columns}
        rows={advertisers}
        autoHeight
        pageSize={advertisers.length}
        getRowId={(row) => row.domain}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        sortingOrder={["desc", "asc"]}
        sx={{ width: "100%" }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}

export default AdvertisersTable;
