import { React } from "react"
import Backdrop from "../Backdrop/Backdrop"
import "./GeneralModal.css"
export const GeneralModal = (props) => {
  return (
    <>
      {props.show ? <Backdrop onClick={() => {}} /> : null}

      <div
        className="modal-wrapper"
        style={{
          transform: props.show
            ? "translateY(0vh) translate(-50%,-50%)"
            : "translateY(-150vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <p>{props.title}</p>
          <span onClick={props.closeHandler} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </>
  )
}
export default GeneralModal
