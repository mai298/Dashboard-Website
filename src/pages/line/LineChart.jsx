import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import Line from './Line'
import Header from '../../components/Header'

export default function LineChart() {
  return (
 <>
       <Header title="Line Chart" paragraph="Simple Line Chart" />

 <Line/>
 </>
  )
}
