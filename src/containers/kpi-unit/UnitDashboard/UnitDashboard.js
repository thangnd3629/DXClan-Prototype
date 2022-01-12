import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./UnitDashboard.css";
import VerticalBarChart from "../../../components/Charts/VerticalBarChart";
import LineChart from "../../../components/Charts/LineChart";
import PieChart from "../../../components/Charts/PieChart";
import { UNIT_DASHBOARD_DATA } from "../../../fake-data/unit-dashboard";

export default function UnitDashboard() {
  const units = ["UIUX_02"];
  const [time, setTime] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  return (
    <div className="unit__dashboard__container">
      <h2>Dashboard KPI đơn vị</h2>
      <div className="search__container mb-5">
        <div className="mr-5">
          <label for="unit">Đơn vị </label>
          <select class="ui selection dropdown" name="unit">
            {units.map((unit) => (
              <option value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <div className="mr-5">
          <label for="month">Tháng </label>
          <select className="ui selection dropdown" name="units">
            {units.map((unit) => (
              <option value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <button className="ui inverted primary button">Phân tích</button>
      </div>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <h4>Biểu đồ thống kê điểm KPI giữa các đơn vị tháng 12-2021</h4>
          </AccordionSummary>
          <AccordionDetails>
            <LineChart />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <h4>
              Xu hướng thực hiện mục tiêu của nhân viên UIUX_02 tháng 12-2021
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <LineChart />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <h4>Phân phối KPI UIUX_02 tháng 12-2021</h4>
          </AccordionSummary>
          <AccordionDetails>
            <LineChart />
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <h4>Kết quả KPI UIUX_02</h4>
          </AccordionSummary>
          <AccordionDetails>
            <LineChart />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
