import type { GridColDef } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import type { BrandBase } from "../../../Types/Brand";
import { Mutations, Queries } from "../../../Api";
import { CommonActionColumn, CommonCard, CommonDataGrid, CommonDeleteModal } from "../../../Components/Common";
import { PAGE_TITLE } from "../../../Constants";
import { useDataGrid } from "../../../Utils/Hooks";
import BrandForm from "./BrandForm";


const Brand = () => {
  const { paginationModel, setPaginationModel, sortModel, setSortModel, filterModel, setFilterModel, rowToDelete, setRowToDelete, isActive, setActive, params } = useDataGrid();
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setEdit] = useState<BrandBase>({} as BrandBase);

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
    setEdit({} as BrandBase);
    setOpenModal(!openModal);
  };

  const handleEdit = (row: BrandBase) => {
    setEdit(row);
    setOpenModal(!openModal);
  };

  const columns: GridColDef<BrandBase>[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "code", headerName: "Code", flex: 1 },
    { field: "Description", headerName: "Description", flex: 1 },
    { field: "parentBrandId", headerName: "parent Brand", flex: 1},
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
    loading: brandsDataLoading|| brandsDataFetching || isEditLoading,
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
      <CommonCard title={PAGE_TITLE.INVENTORY.BRAND.BASE}>
        <CommonDataGrid {...CommonDataGridOption} />
      </CommonCard>
      <CommonDeleteModal open={Boolean(rowToDelete)} itemName={rowToDelete?.title} onClose={() => setRowToDelete(null)} onConfirm={() => handleDeleteBtn()} />
      <BrandForm openModal={openModal} setOpenModal={setOpenModal} isEdit={isEdit} />
    </>
  );
};

export default Brand;
