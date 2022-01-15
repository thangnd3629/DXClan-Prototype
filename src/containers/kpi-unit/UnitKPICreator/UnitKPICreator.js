import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import MOCK_DATA from "../../../fake-data/kpi-target";
import Table from "../../../components/Table/Table";

import "react-datepicker/dist/react-datepicker.css";
import "./UnitKPICreator.css";
import GeneralModal from "../../../components/GeneralModal/GeneralModal";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "react-toastify/dist/ReactToastify.css";

const departments = [
  {
    key: 1,
    text: "Phòng hành chính quản trị",
  },
  { key: 2, value: "Phòng tài chính", text: "Phòng tài chính" },
  { key: 3, value: "Phòng tạp vụ", text: "Phòng tạp vụ" },
];

export default function UnitKPICreator() {
  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [kpiData, setKpiData] = useState([]);
  const [kpiWeight, setKpiWeight] = useState(0);
  const [kpiTarget, setkpiTarget] = useState("");
  const [kpiBase, setKpiBase] = useState("");
  const [kpiCriteria, setKpiCriteria] = useState("");
  const [overWeightKpi, setOverWeightKpi] = useState(null);

  useEffect(() => {
    const data = MOCK_DATA.filter((elm) => {
      return parseInt(elm["month"]) === parseInt(startDate.getMonth() + 1);
    });

    setKpiData(data.length > 0 ? data[0].data : []);
  }, [startDate]);

  const getCurKpiTotalWeight = () => {
    let weights = 0;
    kpiData.forEach((elm) => {
      weights = parseInt(elm["Trọng số"]) + weights;
    });
    return weights;
  };
  const onSubmit = () => {
    //get current weight

    if (getCurKpiTotalWeight() + parseInt(kpiWeight) >= 100) {
      setOverWeightKpi("Không thể thêm mục tiêu do đạt quá 100 tổng trọng số");
    } else {
      setOverWeightKpi("");
      toast("Thêm mục tiêu thành công");
      setShowModal(false);
      setKpiData((prev) => {
        return [
          {
            "Tên mục tiêu": `${kpiTarget}`,
            "Mục tiêu cha": `${kpiBase}`,
            "Tiêu chí đánh giá": `${kpiCriteria}`,
            "Trọng số": `${kpiWeight}`,
          },
          ...prev,
        ];
      });
    }
  };
  const onChangeKpiWeight = (e) => {
    setKpiWeight(e.target.value);
  };
  const onChangeBaseKpi = (e) => {
    setKpiBase(e.target.value);
  };
  const onChangeCriteria = (e) => {
    setKpiCriteria(e.target.value);
  };
  const onChangeKpiTarget = (e) => {
    setkpiTarget(e.target.value);
  };
  const onChangeTarget = (index) => {
    const data = kpiData[index];
    console.log(data["Mục tiêu cha"]);
    setKpiBase(data["Mục tiêu cha"]);
    setKpiCriteria(data["Tiêu chí đánh giá"]);
    setKpiWeight(data["Trọng số"]);
    setkpiTarget(data["Tên mục tiêu"]);

    setShowModal(true);
  };
  return (
    <div className='unit-kpi-container'>
      <ToastContainer />
      <GeneralModal
        show={showModal}
        closeHandler={() => {
          setShowModal(false);
        }}
      >
        <div>
          <div className='input-group'>
            <label>
              Tên mục tiêu <span>*</span>
            </label>
            <div class='ui input'>
              <input
                type='text'
                placeholder='Ví dụ : Nấu 100 bát cơm'
                onChange={onChangeKpiTarget}
                value={kpiTarget}
              />
            </div>
          </div>

          <div className='input-group'>
            <label>
              Tiêu chí đánh giá <span>*</span>
            </label>
            <div class='ui input'>
              <input
                type='text'
                placeholder='Ví dụ :Cơm được đánh giá 5* trên 50% số bữa'
                value={kpiCriteria}
                onChange={onChangeCriteria}
              />
            </div>
          </div>
          <div className='input-group'>
            <label>
              Mục tiêu cha <span>*</span>
            </label>
            <div class='ui input'>
              <input
                type='text'
                value={kpiBase}
                placeholder='Ví dụ : Thực hiện công việc tạp vụ'
                onChange={onChangeBaseKpi}
              />
            </div>
          </div>
          <div className='input-group'>
            <label>
              Trọng số <span>* {`Hiện tại :${getCurKpiTotalWeight()}  `}</span>
            </label>
            <label>
              <span>{overWeightKpi}</span>
            </label>

            <div class='ui input'>
              <input
                type='number'
                placeholder='Ví dụ : 50'
                onChange={onChangeKpiWeight}
                value={kpiWeight}
              />
            </div>
          </div>
        </div>
        <div className='modal-toolbox'>
          <button
            class='ui inverted red button'
            onClick={() => {
              setShowModal(false);
            }}
          >
            Hủy
          </button>
          <button class='ui inverted green button' onClick={onSubmit}>
            Thêm
          </button>
        </div>
      </GeneralModal>

      <div className='picker-group'>
        <Dropdown
          placeholder='Chọn Phòng ban'
          fluid
          search
          selection
          options={departments}
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

      <div className='toolbox'>
        <button
          class='ui inverted primary button'
          onClick={() => {
            setShowModal(true);
          }}
        >
          Thêm mục tiêu
        </button>

        <button class='ui inverted green button'>Kích Hoạt</button>
      </div>

      {kpiData.length > 0 && (
        <Table
          data={kpiData}
          rowPerPage={5}
          rowClick={() => {
            console.log("clicked");
          }}
          onChangeTarget={onChangeTarget}
        />
      )}
    </div>
  );
}
