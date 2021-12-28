import React, { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import MOCK_DATA from "../../../components/Table/MOCK.json"
import Table from "../../../components/Table/Table"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./UnitKPICreator.css"
import GeneralModal from "../../../components/GeneralModal/GeneralModal"
import Backdrop from "../../../components/Backdrop/Backdrop"
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
  const [showModal, setShowModal] = useState(false)
  const data = MOCK_DATA[0].data
  return (
    <div className="unit-kpi-container">
      <GeneralModal
        show={showModal}
        closeHandler={() => {
          setShowModal(false)
        }}
      >
        <p>Hello my friend</p>
      </GeneralModal>

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

      <div className="toolbox">
        <div
          class="ui animated button"
          tabindex="0"
          onClick={() => {
            setShowModal(true)
          }}
        >
          <div class="visible content">Thêm mục tiêu</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        <div class="ui vertical animated button" tabindex="0">
          <div class="hidden content">Kích hoạt</div>
          <div class="visible content">Kích hoạt</div>
        </div>
        <div class="ui animated fade button" tabindex="0">
          <div class="visible content">Xóa KPI này</div>
          <div class="hidden content">Bạn có chắc không ?</div>
        </div>
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
