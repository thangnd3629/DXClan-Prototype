import React, { useState, useEffect } from "react"
import { Dropdown } from "semantic-ui-react"
import MOCK_DATA from "../../../components/Table/MOCK.json"
import Table from "../../../components/Table/Table"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./UnitKPICreator.css"
import GeneralModal from "../../../components/GeneralModal/GeneralModal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
  const [kpiData, setKpiData] = useState([])
  const [kpiWeight, setKpiWeight] = useState(0)
  const [kpiTarget, setkpiTarget] = useState("")
  const [kpiBase, setKpiBase] = useState("")
  const [kpiCriteria, setKpiCriteria] = useState("")
  const [overWeightKpi, setOverWeightKpi] = useState(null)

  useEffect(() => {
    const data = MOCK_DATA.filter((elm) => {
      console.log(parseInt(elm["month"]))
      console.log(parseInt(startDate.getMonth()), "get date")
      return parseInt(elm["month"]) === parseInt(startDate.getMonth() + 1)
    })

    setKpiData(data.length > 0 ? data[0].data : [])
  }, [startDate])

  const getCurKpiTotalWeight = () => {
    let weights = 0
    kpiData.forEach((elm) => {
      weights = parseInt(elm["Trọng số"]) + weights
    })
    return weights
  }
  const onSubmit = () => {
    //get current weight

    if (getCurKpiTotalWeight() + parseInt(kpiWeight) >= 100) {
      setOverWeightKpi("Không thể thêm mục tiêu do đạt quá 100 tổng trọng số")
    } else {
      setOverWeightKpi("")
      toast("Thêm mục tiêu thành công")
      setShowModal(false)
      setKpiData((prev) => {
        return [
          {
            "Tên mục tiêu": `${kpiTarget}`,
            "Mục tiêu cha": `${kpiBase}`,
            "Tiêu chí đánh giá": `${kpiCriteria}`,
            "Trọng số": `${kpiWeight}`,
          },
          ...prev,
        ]
      })
    }
  }
  const onChangeKpiWeight = (e) => {
    setKpiWeight(e.target.value)
  }
  const onChangeBaseKpi = (e) => {
    setKpiBase(e.target.value)
  }
  const onChangeCriteria = (e) => {
    setKpiCriteria(e.target.value)
  }
  const onChangeKpiTarget = (e) => {
    setkpiTarget(e.target.value)
  }
  return (
    <div className="unit-kpi-container">
      <ToastContainer />
      <GeneralModal
        show={showModal}
        closeHandler={() => {
          setShowModal(false)
        }}
      >
        <div>
          <div className="input-group">
            <label>
              Tên mục tiêu <span>*</span>
            </label>
            <div class="ui input">
              <input
                type="text"
                placeholder="Search..."
                onChange={onChangeKpiTarget}
              />
            </div>
          </div>

          <div className="input-group">
            <label>
              Tiêu chí đánh giá <span>*</span>
            </label>
            <div class="ui input">
              <input
                type="text"
                placeholder="Search..."
                onChange={onChangeCriteria}
              />
            </div>
          </div>
          <div className="input-group">
            <label>
              Mục tiêu cha <span>*</span>
            </label>
            <div class="ui input">
              <input
                type="text"
                placeholder="Search..."
                onChange={onChangeBaseKpi}
              />
            </div>
          </div>
          <div className="input-group">
            <label>
              Trọng số{" "}
              <span>
                * {`Hiện tại :${getCurKpiTotalWeight()}  `}
                {overWeightKpi}
              </span>
            </label>
            <div class="ui input">
              <input
                type="number"
                placeholder="Search..."
                onChange={onChangeKpiWeight}
              />
            </div>
          </div>
        </div>
        <div className="modal-toolbox">
          <button class="ui labeled icon button">
            <i class="pause icon"></i>
            Huỷ
          </button>
          <button class="ui right labeled icon button" onClick={onSubmit}>
            <i class="right arrow icon"></i>
            Khởi tạo
          </button>
        </div>
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
      {kpiData.length > 0 && (
        <Table
          data={kpiData}
          rowPerPage={5}
          rowClick={() => {
            console.log("clicked")
          }}
        />
      )}
    </div>
  )
}
