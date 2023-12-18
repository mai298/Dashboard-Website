import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
  
  return (
    <>
    <Header
        title="CONTACTS"
       paragraph="List of Contacts for Future Reference"/>

    <Box mt={2}>
     
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
    
    </>
  );
};

export default Contacts;