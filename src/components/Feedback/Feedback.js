import React from "react"
import "./Feedback.css"
import { Dropdown } from "semantic-ui-react"
import { ToastContainer, toast } from "react-toastify"
export default function Feedback() {
  const module = [
    {
      key: 1,
      value: "Dashboard KPI cá nhân",
      text: "Dashboard KPI cá nhân",
    },
    { key: 2, value: "Dashboard KPI đơn vị", text: "Dashboard KPI đơn vị" },
    { key: 3, value: "Khởi tạo KPI cá nhân", text: "Khởi tạo KPI cá nhân" },
    { key: 4, value: "Khởi tạo KPI đơn vị", text: "Khởi tạo KPI đơn vị" },
    { key: 5, value: "Quản lý KPI đơn vị", text: "Quản lý KPI đơn vị" },
    { key: 6, value: "Quản lý KPI cá nhân", text: "Quản lý KPI cá nhân" },
  ]
  return (
    <div className="feedback-container">
      <ToastContainer />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <small id="emailHelp" class="form-text text-muted">
            Chúng tôi sẽ không chia sẻ với bất kỳ ai
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số điện thoại</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Số điện thoại"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Chức năng báo lỗi</label>
          <Dropdown
            placeholder="Chọn chức năng báo lỗi"
            fluid
            search
            selection
            options={module}
            defaultValue={module[0].value}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mô tả vấn đề của bạn</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          class="ui inverted primary button"
          onClick={(e) => {
            e.preventDefault()

            toast(
              "Báo lỗi thành công ! Quản trị viên sẽ liên hệ với bạn trong thời gian sớm nhất!"
            )
          }}
        >
          Báo lỗi!
        </button>
      </form>
    </div>
  )
}
