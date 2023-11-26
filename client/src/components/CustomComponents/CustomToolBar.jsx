import * as React from "react";
import {
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
} from "@mui/x-data-grid";

function CustomExportButton({ domain }) {
  const csvOptions = { fileName: `adstxt_${domain}` };

  return (
    <GridToolbarExportContainer>
      <GridCsvExportMenuItem options={csvOptions} />
    </GridToolbarExportContainer>
  );
}

export default function CustomToolbar({ domain }) {
  return (
    <GridToolbarContainer>
      <CustomExportButton domain={domain} />
    </GridToolbarContainer>
  );
}
