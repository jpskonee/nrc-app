import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"; 

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Can I book for a trip in Advance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                      Yes you can make advance booking for your trip;
                      and your seat number would be reserved for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What happens to my ticket if i miss my trip?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                      Apart from the timely reminder and calls you will get from us,
                      Your ticket is still valid for a year. Meaning, a reschedule would be done, once complain is lodge.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Are there special discounts for groups and families?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                      Children under 14 get to pay 50% of trip fare;
                      while a joint ticket of 10, gets an overall 10% discount. PS: The joint ticket of ten must be purchased at once, not individually.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Do i get charged for load?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                          All passangers are entitled to 40kg free pass forall of their luggage. Addtion weight would be cost in Kg.
                        However, we have special services for cargo and currier delivery. Please check the services page <Link to="services" >here</Link>.
          </Typography>
        </AccordionDetails>
          </Accordion>
          
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Does Gorails offer a virtual terminal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                Yes. Gorails' Virtual Terminal is a transaction portal that allows online trip booking and payment.
          </Typography>
        </AccordionDetails>
          </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Can I travel with my pet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                We have a special compartments for pets away from other travllers.
                So yes, you can travel wih your pet, but in a different compartment.
          </Typography>
        </AccordionDetails>
          </Accordion>
          
      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography> would i get food/snacks during the trip? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                We serve specially prepared Africa delicacies for travellers boarding inter-state trips,
                and snacks for short trips.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
