import React, { useState } from "react"
import "./Assesment.css"
import { Dropdown } from "semantic-ui-react"
import DatePicker from "react-datepicker"
import Table from "../../../components/AssesTable/AssesTable"
import MOCK_DATA from "../../../fake-data/kpi-assesment"
const departments = [
  {
    key: 1,
    text: "Phòng hành chính quản trị",
  },
  { key: 2, value: "Phòng tài chính", text: "Phòng tài chính" },
  { key: 3, value: "Phòng tạp vụ", text: "Phòng tạp vụ" },
]

export default function Assesment() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="assesment-container">
      <div className="picker-group">
        <Dropdown
          placeholder="Chọn Phòng ban"
          fluid
          search
          selection
          options={departments}
        />
        <div>
          <label>Tháng</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <Table
        data={MOCK_DATA}
        rowPerPage={5}
        rowClick={() => {
          console.log("clicked")
        }}
      />
    </div>
  )
}
