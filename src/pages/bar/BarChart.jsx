import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material';
import Bar from './Bar';
import Header from '../../components/Header';


export default function BarChart() {

  return (
<>
<Header
        title="Bar Chart"
        paragraph="The minimum wage in Germany, France and Spain (EUR/month)"
      />
<Bar/>
</>
  )
}
