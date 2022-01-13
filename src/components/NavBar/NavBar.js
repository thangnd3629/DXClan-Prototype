import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
const countryOptions = [
  { key: "vn", value: "vn", flag: "vn", text: "Tiếng Việt" },
  { key: "uk", value: "uk", flag: "uk", text: "Tiếng Anh" },
  { key: "jp", value: "jp", flag: "jp", text: "Tiếng Nhật" },
  { key: "cn", value: "cn", flag: "cn", text: "Tiếng Trung" },
  { key: "kr", value: "kr", flag: "kr", text: "Tiếng Hàn" },
  { key: "de", value: "de", flag: "de", text: "Tiếng Đức" },
];

export class NavBar extends Component {
  render() {
    return (
      <header class='header'>
        <div className='dropdown-wrapper'>
          <Dropdown
            placeholder='Chọn ngôn ngữ'
            fluid
            search
            selection
            options={countryOptions}
            defaultValue='vn'
          />
        </div>

        <Link to='/login'>
          <button className='links' to='/login'>
            Đăng xuất
          </button>
        </Link>
      </header>
    );
  }
}

export default NavBar;
