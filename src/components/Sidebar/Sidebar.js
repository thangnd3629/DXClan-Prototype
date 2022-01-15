import React, { Component, Fragment } from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
import Backdrop from "../Backdrop/Backdrop"
export class Sidebar extends Component {
  state = {
    sidebar_open: false,
  }

  toggleBackdrop = () => {
    this.setState({ sidebar_open: !this.state.sidebar_open })
  }
  render() {
    let items = []
    items = [
      <li>
        <div className="divider">KPI cá nhân</div>
        <Link to="/kpi-personal/dashboard">
          <i class="fas fa-chart-bar"></i>Dashboard KPI cá nhân
        </Link>
        <Link to="/kpi-personal/create">
          <i className="fas fa-qrcode"></i>Khởi tạo KPI cá nhân
        </Link>
        <Link to="/kpi-personal/manager">
          <i class="fas fa-tasks"></i>Quản lý KPI cá nhân
        </Link>
        <div className="divider">KPI đơn vị</div>
        <Link to="/kpi-unit/dashboard">
          <i class="fas fa-chart-bar"></i>Dashboard KPI đơn vị
        </Link>
        <Link to="/kpi-unit/create">
          <i className="fas fa-qrcode"></i>Khởi tạo KPI đơn vị
        </Link>
        <Link to="/kpi-unit/manager">
          <i class="fas fa-tasks"></i>Quản lý KPI đơn vị
        </Link>
        <Link to="/kpi-member/manager">
          <i class="fas fa-eye"></i>Đánh giá KPI nhân viên
        </Link>
        <div className="divider"></div>
        <Link to="/help">
          <i class="far fa-question-circle"></i> Trợ giúp
        </Link>
        <Link to="#">
          <i class="far fa-address-card"></i> Về Chúng tôi
        </Link>
        <Link to="/feedback">
          <i class="far fa-address-card"></i> Phản hồi
        </Link>
      </li>,
    ]

    return (
      <Fragment>
        <div class="sidebar-wrapper">
          <div className="sidebar-enable">
            <input
              type="checkbox"
              id="check"
              readOnly
              checked={this.state.sidebar_open ? true : false}
            />
            <label htmlFor="check">
              <i class="fas fa-bars" id="btn" onClick={this.toggleBackdrop}></i>
              <i
                class="fas fa-times"
                id="cancel"
                onClick={this.toggleBackdrop}
              ></i>
            </label>
            <div className="sidebar">
              <header> . </header>
              <ul>{items}</ul>
            </div>
          </div>
        </div>

        {this.state.sidebar_open ? (
          <Backdrop toggleBackdrop={this.toggleBackdrop} />
        ) : null}
      </Fragment>
    )
  }
}

export default Sidebar
