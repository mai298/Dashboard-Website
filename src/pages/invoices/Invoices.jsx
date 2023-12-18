import { Box } from '@mui/material'
import { DataGrid} from '@mui/x-data-grid'
import { columns, rows } from './data'
import Header from '../../components/Header'

export default function Invoices() {
  return (
    <>
            <Header title="INVOICES" paragraph="List of Invoice Balances" />

    <Box mt={2}>
     
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
        checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
    </>
  )
}
 