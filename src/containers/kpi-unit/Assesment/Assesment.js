import React, { useState } from "react";
import "./Assesment.css";
import { Dropdown } from "semantic-ui-react";

import Table from "../../../components/AssesTable/AssesTable";
import MOCK_DATA from "../../../fake-data/kpi-assesment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const departments = [
  {
    key: 1,
    value: "Phòng hành chính quản trị",
    text: "Phòng hành chính quản trị",
  },
  { key: 2, value: "Phòng tài chính", text: "Phòng tài chính" },
  { key: 3, value: "Phòng tạp vụ", text: "Phòng tạp vụ" },
];

export default function Assesment() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='assesment-container'>
      <div className='picker-group'>
        <Dropdown
          placeholder='Chọn Phòng ban'
          fluid
          search
          selection
          options={departments}
          defaultValue={departments[0].value}
        />
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Tháng'
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Table
        data={MOCK_DATA}
        rowPerPage={5}
        rowClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}
