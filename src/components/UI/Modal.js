import React from 'react';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
	return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
	return <div className="modal">{props.children}</div>;
};
const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverLay>{props.children}</ModalOverLay>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
