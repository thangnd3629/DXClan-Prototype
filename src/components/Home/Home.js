import React from "react"
import "./Home.css"
import logo from "../../asset/—Pngtree—business office performance improvement kpi_5753862.png"
import logo_personal_dashboard from "../../asset/10-great-google-analytics-alternatives-5e4175671fa6a.png"
import logo_unit_dashboard from "../../asset/thumbnail.png"
import logo_personalKPI_creator from "../../asset/images.jpg"
import logo_unitKPI_creator from "../../asset/shutterstock_1464234134-1024x684.jpg"
import logo_KPI_assesment from "../../asset/Google-Tasks-–-Your-Personal-Task-Manager.png"
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
export default function Home() {
  const pickup = [
    {
      name: "Khởi tạo KPI cá nhân",
      description: "Khởi tạo KPI 1 cách đơn giản ",
      link: "/kpi-personal/create",
      icon: logo_personalKPI_creator,
    },
    {
      name: "Khởi tạo KPI đơn vị",
      description: "Khởi tạo KPI 1 cách đơn giản",
      link: "/kpi-unit/create",
      icon: logo_unitKPI_creator,
    },
    {
      name: "Dashboard KPI cá nhân",
      description: "Cân đối lịch trình qua dashboard",
      link: "/kpi-personal/dashboard",
      icon: logo_personal_dashboard,
    },
    {
      name: "Dashboard KPI đơn vị",
      description: "Quản lý thông số của đơn vị",
      link: "/kpi-unit/dashboard",
      icon: logo_unit_dashboard,
    },
    {
      name: "Đánh giá KPI nhân viên",
      description: "Sa thải nhân viên yếu kém",
      link: "/kpi-member/manager",
      icon: logo_KPI_assesment,
    },
  ]
  const renderPickup = (pickup) => {
    return (
      <Card sx={{ width: 345 }} style={{ margin: "30px" }}>
        <Link to={pickup.link}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={pickup.icon}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pickup.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pickup.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    )
  }
  return (
    <div className="home-container">
      <div className="introduction">
        <div className="general-info">
          <div className="slogan">
            <h1>Easy money với DXLuL</h1>
            <h2>Công cụ giúp việc quản lý KPI nhẹ nhàng như đẩy xe hàng</h2>
          </div>

          <div className="toolbox">
            <button class="ui twitter button">
              <i class="twitter icon"></i>
              <Link to="/help">Trợ giúp</Link>
            </button>
            <button class="ui google plus button">
              <i class="google plus icon"></i>
              <Link to="/about">Về chúng tôi</Link>
            </button>
          </div>
        </div>
        <div className="intro-images">
          <img src={logo} />
        </div>
      </div>
      <div className="common-pickup">
        {pickup.map((elm) => {
          return renderPickup(elm)
        })}
      </div>
    </div>
  )
}
