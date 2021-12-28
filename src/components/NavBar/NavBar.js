import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
import { Dropdown } from "semantic-ui-react"
const countryOptions = [
  { key: "vn", value: "vn", flag: "vn", text: "VietNam" },
  { key: "us", value: "us", flag: "us", text: "USA" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "jp", value: "jp", flag: "jp", text: "Japan" },
]

export class NavBar extends Component {
  render() {
    return (
      <header class="header">
        <div className="dropdown-wrapper">
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={countryOptions}
          />
        </div>

        <Link to="/login">
          <button className="links" to="/login">
            Log out
          </button>
        </Link>
      </header>
    )
  }
}

export default NavBar
