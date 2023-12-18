import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Stack } from '@mui/material';
import Header from '../../components/Header';

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  // @ts-ignore
  // @ts-ignore
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (

    <>
          <Header title="FAQ" paragraph="Frequently Asked Questions Page" />

    <Stack mt={2} direction={"column"} gap={2}>
   <Accordion defaultExpanded onChange={handleChange('panel1')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Dashboard</Typography>
    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
      quam.
    </Typography> 
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Pie Chart</Typography>
    <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
      Pellentesque convallis laoreet laoreet.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Bar Chart</Typography>
    <Typography sx={{ color: 'text.secondary' }}>Filtering has been entirely disabled for the whole web server</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
      Duis vel est augue.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel4'} onChange={handleChange('panel4')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Line Chart</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
      Duis vel est augue.
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion expanded={
// @ts-ignore
expanded === 'panel5'} onChange={handleChange('panel5')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
    <Typography sx={{ width: '33%', flexShrink: 0 }}>Geography Chart</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
      Duis vel est augue.
    </Typography>
  </AccordionDetails>
</Accordion>
  </Stack>
  </>
  )
}
