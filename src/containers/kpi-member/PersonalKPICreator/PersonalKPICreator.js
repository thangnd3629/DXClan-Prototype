import React, { useState } from "react";
import Comment from "../../../components/Comment/Comment";
import GeneralModal from "../../../components/GeneralModal/GeneralModal";

export default function PersonalKPICreator() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <h2>Khởi tạo KPI cá nhân</h2>
      <button className='btn btn-primary' onClick={() => setModalVisible(true)}>
        Khởi tạo KPI tháng 12
      </button>
      <GeneralModal
        show={modalVisible}
        closeHandler={() => setModalVisible(false)}
      >
        <p>
          Đơn vị cấp trên của bạn chưa thiếp lập KPI. Liên hệ với trưởng đơn vị
          để yêu cầu thiết lập
        </p>
      </GeneralModal>
      <Comment />
    </div>
  );
}
