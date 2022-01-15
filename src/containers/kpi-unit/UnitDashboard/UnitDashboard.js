import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./UnitDashboard.css";
import VerticalBarChart from "../../../components/Charts/VerticalBarChart";
import LineChart from "../../../components/Charts/LineChart";
import PieChart from "../../../components/Charts/PieChart";
import { UNIT_DASHBOARD_DATA } from "../../../fake-data/unit-dashboard";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function UnitDashboard() {
  const units = [
    {
      key: 1,
      value: "UIUX_02",
      label: "UIUX_02",
    },
  ];

  const [time, setTime] = useState(new Date());
  const [trendData, setTrendData] = useState({
    labels: [],
    datasets: [],
  });
  const [distributionData, setDistributionData] = useState({
    labels: [],
    datasets: [],
  });

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const formatTrendData = (unitData) => {
    const labels = unitData.goals.map((goal) => goal.name);
    const numTaskDataset = {
      label: "Số công việc",
      data: unitData.goals.map((goal) => goal.numTasks),
      borderColor: "blue",
      backgroundColor: "blue",
    };
    const executionTimeDataset = {
      label: "Thời gian thực hiện (ngày)",
      data: unitData.goals.map((goal) => goal.executionTimeInDays),
      borderColor: "orange",
      backgroundColor: "orange",
    };

    const numParticipantDataset = {
      label: "Số người tham gia",
      data: unitData.goals.map((goal) => goal.numParticipants),
      borderColor: "green",
      backgroundColor: "green",
    };

    const numPersonalKpiDataset = {
      label: "Số KPI nhân viên",
      data: unitData.goals.map((goal) => goal.numPersonalKpis),
      borderColor: "red",
      backgroundColor: "red",
    };

    const weightDataset = {
      label: "Trọng số",
      data: unitData.goals.map((goal) => goal.weight),
      borderColor: "purple",
      backgroundColor: "purple",
    };
    const datasets = [
      numTaskDataset,
      executionTimeDataset,
      numParticipantDataset,
      numPersonalKpiDataset,
      weightDataset,
    ];
    return {
      labels,
      datasets,
    };
  };

  const formatDistributionData = (unitData) => {
    const labels = unitData.goals.map((goal) => goal.name);
    const colors = labels.map((label) => getRandomColor());
    const datasets = [
      {
        label: "Danh sách KPI",
        data: unitData.goals.map((data) => data.weight),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ];
    return { labels, datasets };
  };

  useEffect(() => {
    console.log("time: ", time.toString());
    const month = time.getMonth() + 1;
    const year = time.getFullYear();

    const unitData = UNIT_DASHBOARD_DATA.find(
      (data) => data.month === month && data.year === year
    );
    if (unitData) {
      setTrendData(formatTrendData(unitData));
      setDistributionData(formatDistributionData(unitData));
    } else {
      setTrendData({
        labels: [],
        datasets: [],
      });
      setDistributionData({
        labels: [],
        datasets: [],
      });
    }
  }, [time]);

  return (
    <div style={{ height: "80vh", overflowY: "hidden" }}>
      <div className='unit__dashboard__container'>
        <h2>Dashboard KPI đơn vị</h2>
        <div className='search__container my-5'>
          <div className='mr-5'>
            <TextField
              id='outlined-select-currency'
              select
              label='Đơn vị'
              value={units[0].value}
            >
              {units.map((unit) => (
                <MenuItem key={unit.value} value={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mr-5'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["month", "year"]}
                label='Tháng'
                value={time}
                onChange={(newValue) => {
                  setTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <button className='ui inverted primary button'>Phân tích</button>
        </div>
        <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h4>
                {`Xu hướng thực hiện mục tiêu của nhân viên UIUX_02 tháng ${
                  time.getMonth() + 1
                }-${time.getFullYear()}`}
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              {trendData.labels.length > 0 ? (
                <LineChart data={trendData} />
              ) : (
                <h6>Không có dữ liệu</h6>
              )}
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h4>{`Phân phối KPI UIUX_02 tháng ${
                time.getMonth() + 1
              }-${time.getFullYear()}`}</h4>
            </AccordionSummary>
            <AccordionDetails>
              {trendData.labels.length > 0 ? (
                <PieChart data={distributionData} />
              ) : (
                <h6>Không có dữ liệu</h6>
              )}
            </AccordionDetails>
          </Accordion>

          {/* <Accordion defaultExpanded>
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
        </Accordion> */}
        </div>
      </div>
    </div>
  );
}
