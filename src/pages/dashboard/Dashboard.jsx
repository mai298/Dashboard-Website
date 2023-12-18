import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import Header from '../../components/Header'

export default function Dashboard() {
  return (
    <>

    <Header title="Dashboard" paragraph="Welcome to your dashboard"/>
    <Box sx={{textAlign:"right"}}>
    <Button sx={{textTransform:"capitalize"}}  variant='contained' color='primary'>
      <DownloadIcon/>
      Download Reports
    </Button>
    </Box>
    <Row1/>
    <Row2/>
    <Row3/>

    </>
  )
}
