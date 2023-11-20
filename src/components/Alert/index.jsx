import React from "react";
import Icon from "@/components/Icon";
import "./Alert.css";
import { MdCheckCircle } from "react-icons/md";

export default function Alert({ icon = MdCheckCircle, children, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="alert-position">
        <div className="alert-container">
          <div className="alert-content">
            <Icon icon={icon} color="#22c55e"></Icon>
            <p>{children}</p>
          </div>
          <h5 className="x">x</h5>
        </div>
      </div>
    </>
  );
}
