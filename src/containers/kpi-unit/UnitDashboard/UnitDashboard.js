import React, { useState } from "react"
import "./UnitDashboard.css"

export default function UnitDashboard() {
  const units = [
    "UIUX_01",
    "UIUX_02",
    "UIUX_03",
    "UIUX_04",
    "UIUX_05",
    "UIUX_06",
    "UIUX_07",
    "UIUX_08",
    "UIUX_09",
    "UIUX_10",
    "UIUX_11",
    "UIUX_12",
    "UIUX_13",
    "UIUX_14",
    "UIUX_15",
  ]

  const charts = [
    {
      title: "Biểu đồ thống kê điểm KPI giữa các đơn vị tháng 12-2021",
      img: "https://hocieltsdanang.edu.vn/wp-content/uploads/2021/06/Bai-mau-4-line-graph.png",
      contentId: "chart1",
    },
    {
      title: "Xu hướng thực hiện mục tiêu của nhân viên UIUX_02 tháng 12-2021",
      img: "https://hocieltsdanang.edu.vn/wp-content/uploads/2021/06/Bai-mau-4-line-graph.png",
      contentId: "chart2",
    },
    {
      title: "Phân phối KPI UIUX_02 tháng 12-2021",
      img: "https://hocieltsdanang.edu.vn/wp-content/uploads/2021/06/Bai-mau-4-line-graph.png",
      contentId: "chart3",
    },
    {
      title: "Kết quả KPI UIUX_02",
      img: "https://hocieltsdanang.edu.vn/wp-content/uploads/2021/06/Bai-mau-4-line-graph.png",
      contentId: "chart4",
    },
  ]

  const [visibleStatus, setVisibleStatus] = useState(
    Array(charts.length).fill(true)
  )

  const toggleVisible = (index) => {
    setVisibleStatus(
      visibleStatus.map((status, curIdx) => {
        if (curIdx !== index) {
          return status
        }
        return !status
      })
    )
  }

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
      {charts.map((chart, index) => (
        <div className="chart mb-3">
          <div className="card card-header chart__header mb-3">
            <p className="m-0">{chart.title}</p>
            <button
              class="btn btn-primary"
              data-toggle="collapse"
              data-target={`#${chart.contentId}`}
              aria-expanded="true"
              onClick={() => toggleVisible(index)}
            >
              {visibleStatus[index] ? (
                <i class="fas fa-chevron-down"></i>
              ) : (
                <i class="fas fa-chevron-right"></i>
              )}
            </button>
          </div>
          <div
            class="card card-body collapse multi-collapse show"
            id={chart.contentId}
          >
            <img src={chart.img} alt="Kpi stat" width="100%" />
          </div>
        </div>
      ))}
    </div>
  )
}
