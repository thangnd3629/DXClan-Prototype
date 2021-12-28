import React, { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import MOCK_DATA from "../../../components/Table/MOCK.json"
import Table from "../../../components/Table/Table"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./UnitKPICreator.css"
const departments = [
  {
    key: 1,
    text: "Phòng hành chính quản trị",
  },
  { key: 2, value: "Phòng tài chính", text: "Phòng tài chính" },
  { key: 3, value: "Phòng tạp vụ", text: "Phòng tạp vụ" },
]

export default function UnitKPICreator() {
  const [startDate, setStartDate] = useState(new Date())
  const data = MOCK_DATA[0].data
  return (
    <div>
      <div className="picker-group">
        <Dropdown
          placeholder="Chọn Phòng ban"
          fluid
          search
          selection
          options={departments}
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <Table
        data={data}
        rowPerPage={5}
        rowClick={() => {
          console.log("clicked")
        }}
      />
    </div>
  )
}
