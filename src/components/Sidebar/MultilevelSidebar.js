import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"
import React from "react"

export default function MultilevelSidebar() {
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      ;
    </div>
  )
}