import React, { useState, useEffect } from "react"
import { Dropdown } from "semantic-ui-react"
import MOCK_DATA from "../../../components/Table/MOCK.json"
import Table from "../../../components/Table/Table"

import "react-datepicker/dist/react-datepicker.css"
import GeneralModal from "../../../components/GeneralModal/GeneralModal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./PersonalKPICreator.css"
import Comment from "../../../components/Comment/Comment"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import TextField from "@mui/material/TextField"
const managers = [
  {
    key: 1,
    value: "Hoàng Huy Quân",
    text: "Hoàng Huy Quân",
  },
  { key: 2, value: "Nguyễn Đức Thắng", text: "Nguyễn Đức Thắng" },
  { key: 3, value: "Nguyễn Đình Hùng", text: "Nguyễn Đình Hùng" },
  { key: 4, value: "Đỗ Hữu Bằng", text: "Đỗ Hữu Bằng" },
]

export default function UnitKPICreator() {
  const [startDate, setStartDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [kpiData, setKpiData] = useState([])

  useEffect(() => {
    const data = MOCK_DATA.filter((elm) => {
      console.log(parseInt(elm["month"]))
      console.log(parseInt(startDate.getMonth()), "get date")
      return parseInt(elm["month"]) === parseInt(startDate.getMonth() + 1)
    })

    setKpiData(data.length > 0 ? data[0].data : [])
  }, [startDate])

  const onSubmit = () => {
    setShowModal(false)
    toast("Gửi yêu cầu thành công", {
      type: "success",
      theme: "colored",
    })
  }

  return (
    <div className="personal__create__container">
      <ToastContainer />
      <GeneralModal
        show={showModal}
        closeHandler={() => {
          setShowModal(false)
        }}
      >
        <div className="mb-3">
          <b>
            Đơn vị cấp trên của bạn chưa thiết lập KPI. Liên hệ với trưởng đơn
            vị để yêu cầu khởi tạo
          </b>
        </div>
        <div className="mb-5">
          <Dropdown
            placeholder="Chọn cấp trên"
            fluid
            search
            selection
            options={managers}
          />
        </div>
        <div className="modal-toolbox">
          <button
            class="ui inverted red button"
            onClick={() => setShowModal(false)}
          >
            Huỷ
          </button>
          <button class="ui inverted green button" onClick={onSubmit}>
            Gửi yêu cầu
          </button>
        </div>
      </GeneralModal>

      <div className="mb-5">
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Tháng"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="personal__init_container">
        {startDate.getMonth() > 10 || startDate.getFullYear() > 2021 ? (
          <div>
            <div className="init__option__group mb-5">
              <button
                className="ui inverted green button"
                onClick={() => setShowModal(true)}
              >
                Khởi tạo KPI tháng 12
              </button>
              <button
                className="ui inverted primary  button"
                onClick={() => setShowModal(true)}
              >
                Sao chép KPI đơn vị cha
              </button>
            </div>
            <div>
              <h2>KPI cá nhân tháng 12-2021</h2>
              <p>Chưa khởi tạo KPI tháng 12-2021</p>
            </div>
          </div>
        ) : (
          kpiData.length > 0 && (
            <div>
              <Table data={kpiData} rowPerPage={5} rowClick={() => {}} />
              <Comment />
            </div>
          )
        )}
      </div>
    </div>
  )
}
