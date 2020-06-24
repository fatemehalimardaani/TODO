import React from "react";
import ThemeContext from "../global/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Modal = () => {
  const context = React.useContext(ThemeContext);
  const getName = ()=>{
    let newName = document.getElementsByClassName("modal-field")[0].value;
    if (newName) context.saveModal(newName)
  }
  return (
    <div className="modal-box">
      <div className="modal-content">
        <div className="modal-header">
          <FontAwesomeIcon
            icon={faTimes}
            className="modal-close"
            onClick={() => context.setModalState(false)}
          />
        </div>
        <div className="modal-body">
          <h4 className="modal-title">enter name</h4>
          <input type="text" className="modal-field" />
          <button onClick={getName} className="modal-button">save</button>
        </div>
      </div>
    </div>
  );
};
