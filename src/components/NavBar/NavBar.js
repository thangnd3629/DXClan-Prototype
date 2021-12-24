import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

export class NavBar extends Component {
  render() {
    return (
      <header class="header">
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
