import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useMemo, type FC } from "react";
import CustomToolbar from "./CustomToolbar";
import type { CommonDataGridProps } from "../../../Types";
import type { GridColDef, GridValueGetter } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import NoRowsOverlay from "./NoRowsOverlay";

const CommonDataGrid: FC<CommonDataGridProps> = ({ columns, rows, rowCount, loading = false, paginationModel, onPaginationModelChange, sortModel, onSortModelChange, filterModel, onFilterModelChange, defaultHidden = [], BoxClass, handleAdd, isActive, setActive }) => {
  const apiRef = useGridApiRef();

  const visibilityModel = useMemo(() => {
    const model: Record<string, boolean> = {};
    defaultHidden.forEach((col) => (model[col] = false));
    return model;
  }, [defaultHidden]);

  const withFallbackValueGetter = (col: GridColDef): GridColDef => {
    if (col.valueGetter) return col;
    const fallbackGetter: GridValueGetter = (value) => {
      if (value === null || value === undefined || value === "") return "-";
      return value;
    };
    return { ...col, valueGetter: fallbackGetter };
  };

  const columnsWithFallback = useMemo<GridColDef[]>(() => columns.map(withFallbackValueGetter), [columns]);

  const fixedColumns = useMemo<GridColDef[]>(() => {
    return [
      {
        field: "srNo",
        headerName: "Sr No",
        width: 80,
        sortable: false,
        filterable: false,
        valueGetter: (_value, row) => paginationModel.page * paginationModel.pageSize + rows.findIndex((r) => r.id === row.id) + 1,
      },
      ...columnsWithFallback,
    ];
  }, [columnsWithFallback, paginationModel, rows]);

  return (
    <div className={`${BoxClass} min-w-full overflow-auto`}>
      <DataGrid
        apiRef={apiRef}
        rows={rows}
        columns={fixedColumns}
        rowCount={rowCount}
        loading={loading}
        slots={{
          toolbar: () => <CustomToolbar apiRef={apiRef} columns={fixedColumns} rows={rows} rowCount={rowCount} handleAdd={handleAdd} isActive={isActive} setActive={setActive} />,
          noRowsOverlay: () => <NoRowsOverlay />,
          noResultsOverlay: () => <Box sx={{ p: 2, textAlign: "center" }}>No matching results</Box>,
        }}
        showToolbar
        initialState={{
          columns: { columnVisibilityModel: visibilityModel },
        }}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={[5, 10, 50, 100, { value: rowCount, label: "All" }]}
        sortingMode="client"
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
        filterMode="client"
        filterModel={filterModel}
        onFilterModelChange={onFilterModelChange}
        disableRowSelectionOnClick
        sx={{ "--DataGrid-overlayHeight": "300px" }}
      />
    </div>
  );
};

export default CommonDataGrid;
