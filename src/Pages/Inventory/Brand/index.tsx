import type { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import type { BrandBase } from "../../../Types/Brand";
import { Mutations, Queries } from "../../../Api";
import { CommonActionColumn, CommonBreadcrumbs, CommonCard, CommonDataGrid, CommonDeleteModal } from "../../../Components/Common";
import { PAGE_TITLE } from "../../../Constants";
import { useDataGrid } from "../../../Utils/Hooks";
import BrandForm from "./BrandForm";
import { useDispatch } from "react-redux";
import { setBrandModal } from "../../../Store/Slices/ModalSlice";
import { Box } from "@mui/material";
import { BREADCRUMBS } from "../../../Data";


const Brand = () => {
  const { paginationModel, setPaginationModel, sortModel, setSortModel, filterModel, setFilterModel, rowToDelete, setRowToDelete, isActive, setActive, params } = useDataGrid();
  const dispatch = useDispatch();


  const { data: BrandsData, isLoading: brandsDataLoading, isFetching: brandsDataFetching } = Queries.useGetBrand(params);
  const { mutate: deleteBrandsMutate } = Mutations.useDeleteBrand();
  const { mutate: editBrand, isPending: isEditLoading } = Mutations.useEditBrand();

  const allBrands = useMemo(() => BrandsData?.data?.brand_data.map((brands) => ({ ...brands, id: brands?._id })) || [], [BrandsData]);
  const totalRows = BrandsData?.data?.totalData || 0;

  const handleDeleteBtn = () => {
    if (!rowToDelete) return;
    deleteBrandsMutate(rowToDelete?._id as string, { onSuccess: () => setRowToDelete(null) });
  };

  const handleAdd = () => {
    dispatch(setBrandModal({ open: true, data: null }));
  };

  const handleEdit = (row: BrandBase) => {
    dispatch(setBrandModal({ open: true, data: row }));
  };

  const columns: GridColDef<BrandBase>[] = [
    {
      field: "image", headerName: "Image", width: 80, renderCell: ({ value }) => value ? <img src={value} style={{ width: 40 }} /> : "-",
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "code", headerName: "Code", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "parentBrandId", headerName: "parent Brand", flex: 1 },
    CommonActionColumn({
      active: (row) => editBrand({ brandId: row?._id, isActive: !row.isActive }),
      onEdit: (row) => handleEdit(row),
      onDelete: (row) => setRowToDelete({ _id: row?._id, title: row?.name }),
    }),
  ];

  const CommonDataGridOption = {
    columns,
    rows: allBrands,
    rowCount: totalRows,
    loading: brandsDataLoading || brandsDataFetching || isEditLoading,
    isActive,
    setActive,
    handleAdd,
    paginationModel,
    onPaginationModelChange: setPaginationModel,
    sortModel,
    onSortModelChange: setSortModel,
    filterModel,
    onFilterModelChange: setFilterModel,
  };

  return (
    <>
      <CommonBreadcrumbs title={PAGE_TITLE.INVENTORY.BRAND.BASE} maxItems={1} breadcrumbs={BREADCRUMBS.BRAND.BASE} />
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        <CommonCard hideDivider>
          <CommonDataGrid {...CommonDataGridOption} />
        </CommonCard>
        <CommonDeleteModal open={Boolean(rowToDelete)} itemName={rowToDelete?.title} onClose={() => setRowToDelete(null)} onConfirm={() => handleDeleteBtn()} />
        <BrandForm />
      </Box>
    </>
  );
};

export default Brand;
