import "./Modal.css";

export default function Modal({ isOpen, children }) {
  return isOpen ? (
    <div className="background-modal">
      <div className="container-modal">
        <div className="content-modal">{children}</div>
      </div>
    </div>
  ) : null;
}
