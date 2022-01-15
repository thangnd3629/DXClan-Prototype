import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import "./Help.css"
import SubmoduleHelp from "./SubmoduleHelp"
export default function Help() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    console.log(panel)
  }

  const subModuleKPIPersonal = [
    { name: "Khởi tạo KPI đơn vị", instruction: "Tài liệu hướng dẫn" },
    { name: "Quản lý KPI đơn vị", instruction: "Tài liệu hướng dẫn" },
    { name: "Đánh giá KPI nhân viên", instruction: "Tài liệu hướng dẫn" },
  ]

  const subModuleKPIUnit = [
    { name: "Khởi tạo KPI cá nhân", instruction: "Tài liệu hướng dẫn" },
    { name: "Quản lý KPI cá nhân", instruction: "Tài liệu hướng dẫn" },
  ]

  return (
    <div className="help-container">
      <h1>Hướng dẫn sử dụng module Quản lý KPI</h1>
      <hr></hr>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <i class="far fa-question-circle "></i>
            <bold>Các nhóm chức năng đơn vị</bold>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Hướng dẫn sử dụng
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <SubmoduleHelp modules={subModuleKPIUnit} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <i class="far fa-question-circle "></i>
            <bold>Các nhóm chức năng cá nhân</bold>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Hướng dẫn sử dụng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SubmoduleHelp modules={subModuleKPIPersonal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
