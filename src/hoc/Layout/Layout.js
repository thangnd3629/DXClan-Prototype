import React, { useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Footer from "../../components/Footer/Footer"
import ScreenCapture from "../../components/ScreenCapture/ScreenCapture"
import { useHistory } from "react-router-dom"
import "./Layout.css"

export default function Layout({ ...props }) {
  const history = useHistory()

  const handleScreenCapture = (screenCapture) => {
    history.push("/feedback", {
      state: { img: screenCapture },
    })
  }
  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <>
          <div className=" report_btn" onClick={onStartCapture}>
            <i className="fas fa-bug fa-2x" />
          </div>

          <NavBar></NavBar>

          <Sidebar></Sidebar>

          {props.children}

          <Footer></Footer>
        </>
      )}
    </ScreenCapture>
  )
}
