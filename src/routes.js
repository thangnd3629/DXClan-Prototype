import PersonalKPICreator from "./containers/kpi-member/PersonalKPICreator/PersonalKPICreator";
import UnitKPICreator from "./containers/kpi-unit/UnitKPICreator/UnitKPICreator";
import PersonalManager from "./containers/kpi-member/PersonalManager/PersonalManager";
import PersonalDashboard from "./containers/kpi-member/PersonalDashboard/PersonalDashboard";
import UnitManager from "./containers/kpi-unit/UnitManager/UnitManager";
import UnitDashboard from "./containers/kpi-unit/UnitDashboard/UnitDashboard";
import Assesment from "./containers/kpi-unit/Assesment/Assesment";
import Help from "./containers/help-page/Help";
import Feedback from "./components/Feedback/Feedback";
import About from "./components/About/About";

const routes = [
  {
    path: "/kpi-personal/create",
    name: "Khởi tạo KPI cá nhân",
    Component: PersonalKPICreator,
    icon: "fas fa-qrcode",
  },
  {
    path: "/kpi-personal/manager",
    name: "Quản lý KPI cá nhân",
    Component: PersonalManager,
    icon: "fas fa-tasks",
  },

  {
    path: "/kpi-personal/dashboard",
    name: "Dashboard KPI cá nhân",
    Component: PersonalDashboard,
    icon: "fas fa-chart-bar",
  },
  {
    path: "/kpi-unit/create",
    name: "Khởi tạo KPI đơn vị",
    Component: UnitKPICreator,
    icon: "fas fa-qrcode",
  },
  {
    path: "/kpi-unit/manager",
    name: "Quản lý KPI đơn vị",
    Component: UnitManager,
    icon: "fas fa-tasks",
  },
  {
    path: "/kpi-unit/dashboard",
    name: "Dashboard KPI đơn vị",
    Component: UnitDashboard,
    icon: "fas fa-chart-bar",
  },
  {
    path: "/kpi-member/manager",
    name: "Đánh giá KPI nhân viên",
    Component: Assesment,
    icon: "fas fa-eye",
  },
  {
    path: "/help",
    name: "Trợ giúp",
    Component: Help,
    icon: "far fa-question-circle",
  },
  {
    path: "/feedback",
    name: "Phản hồi",
    Component: Feedback,
    icon: "far fa-address-card",
  },
  {
    path: "/about",
    name: "Về chúng tôi",
    Component: About,
    icon: "far fa-address-card",
  },
];

export default routes;
