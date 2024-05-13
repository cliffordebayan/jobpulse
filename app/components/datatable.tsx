import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

interface Row {
  id: number;
  review: string;
  sentiment: string;
}

interface DataTableProps {
  data: Row[];
}

export default function DataTable({ data }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const columns: GridColDef[] = [
    { field: "id", headerName: "#", width: 80, headerAlign: "center" },
    { field: "review", headerName: "Reviews", width: 200 },
    { field: "date", headerName: "Date", width: 100 },
    {
      field: "sentiment",
      headerName: "Sentiments",
      width: 134,
      renderCell: (params) => (
        <div
          style={{ color: "white" }}
          className={getSentimentBadge(params.value as string)}
        >
          {params.value}
        </div>
      ),
    },
  ];

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "badge badge-success px-5 py-3";
      case "Negative":
        return "badge badge-error px-5 py-3";
      case "Neutral":
        return "badge badge-warning px-5 py-3";
      default:
        return " ";
    }
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = data.filter((row: any) =>
    row.review.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center relative w-full ">
        <input
          className="input input-bordered rounded-sm w-full"
          placeholder="Search Reviews ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <svg
          className="absolute top-2 right-5"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#9ca3af"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </div>

      <DataGrid
        rowHeight={125}
        getRowHeight={() => "auto"}
        checkboxSelection={false}
        disableRowSelectionOnClick
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        sx={{
          ".MuiDataGrid-columnHeaderTitle": {
            color: "black",
            fontWeight: "bold",
            fontSize: "1rem",
          },

          ".MuiDataGrid-cellContent": {
            fontSize: "1rem",
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
            paddingY: "8px",
            width: "100%",
            minHeight: "125px",
            textOverflow: "ellipsis !important",
            textWrap: "wrap",
          },
          '[aria-colindex="1"] > [role="presentation"]': {
            fontWeight: "bold",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </>
  );
}
