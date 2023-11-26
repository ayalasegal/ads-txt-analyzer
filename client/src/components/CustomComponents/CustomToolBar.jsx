import * as React from "react";
import {
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  GridToolbarQuickFilter,
  GridPrintExportMenuItem,
} from "@mui/x-data-grid";

function CustomExportButton({ domain }) {
  const csvOptions = { fileName: `adstxt_${domain}` };

  return (
    <GridToolbarExportContainer>
      <GridCsvExportMenuItem options={csvOptions} />
      <GridPrintExportMenuItem />
    </GridToolbarExportContainer>
  );
}

export default function CustomToolbar({ domain }) {
  return (
    <GridToolbarContainer
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <CustomExportButton domain={domain} />
      </div>
      <div>
        <GridToolbarQuickFilter />
      </div>
    </GridToolbarContainer>
  );
}
