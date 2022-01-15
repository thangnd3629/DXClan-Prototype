import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Help.css";
import SubmoduleHelp from "./SubmoduleHelp";
import GeneralModal from "../../components/GeneralModal/GeneralModal";

export default function Help() {
  const [expanded, setExpanded] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [currentPdf, setCurrentPdf] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(panel);
  };

  const handleShowGuide = (pdf) => setCurrentPdf(pdf);

  const subModuleKPIPersonal = [
    { name: "Khởi tạo KPI đơn vị", instruction: "Tài liệu hướng dẫn" },
    { name: "Quản lý KPI đơn vị", instruction: "Tài liệu hướng dẫn" },
    { name: "Đánh giá KPI nhân viên", instruction: "Tài liệu hướng dẫn" },
  ];

  const subModuleKPIUnit = [
    {
      name: "Khởi tạo KPI cá nhân",
      instruction: "Tài liệu hướng dẫn",
      pdf: "/guides/khoitaokpicanhan.pdf",
    },
    { name: "Quản lý KPI cá nhân", instruction: "Tài liệu hướng dẫn" },
  ];

  React.useEffect(() => {
    console.log(currentPdf);
    if (currentPdf) {
      setShowModal(true);
    }
  }, [currentPdf]);

  React.useEffect(() => {
    if (!showModal) {
      setCurrentPdf(null);
    }
  }, [showModal]);

  return (
    <div className='help-container'>
      <GeneralModal
        show={showModal}
        closeHandler={() => {
          setShowModal(false);
        }}
      >
        <div>
          <iframe
            id='frame'
            src={`${currentPdf}#toolbar=1`}
            title='Hướng dẫn sử dụng'
            width='100%'
            height='350px'
          ></iframe>
        </div>
      </GeneralModal>
      <h1>Hướng dẫn sử dụng module Quản lý KPI</h1>
      <hr></hr>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <i class='far fa-question-circle '></i>
            <bold>Các nhóm chức năng đơn vị</bold>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Hướng dẫn sử dụng
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <SubmoduleHelp
              modules={subModuleKPIUnit}
              handleShowGuide={handleShowGuide}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <i class='far fa-question-circle '></i>
            <bold>Các nhóm chức năng cá nhân</bold>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Hướng dẫn sử dụng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SubmoduleHelp modules={subModuleKPIPersonal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
