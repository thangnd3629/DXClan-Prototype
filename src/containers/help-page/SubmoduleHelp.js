import React, { useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link } from "react-router-dom"
export default function SubmoduleHelp({ modules }) {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      {modules.map((submodule, idx) => (
        <Accordion
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {submodule.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link to="#">{submodule.instruction}</Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}
