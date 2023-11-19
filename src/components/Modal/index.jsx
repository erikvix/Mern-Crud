import React, { Children, useState } from "react";
import "./Modal.css";
import { set } from "mongoose";

export default function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="background-modal">
        <div className="container-modal">
          <div className="content-modal">{children}</div>
        </div>
      </div>
    </>
  );
}
