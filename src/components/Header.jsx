import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Header({title,paragraph}) {
    const theme=useTheme();
  return (
<>
<Stack direction={"column"} textAlign={"left"}>
    <Typography variant='h5'
     sx={{color:theme.palette.info.light,fontWeight:"bold"}}>
{title}
</Typography>
<Typography variant="body1" color={theme.palette.mode === 'dark' ? 'white' : 'initial'}>
      {paragraph}
    </Typography>
</Stack>
</>
  )
}
