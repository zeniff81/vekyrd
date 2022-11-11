import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../environments';
import Modal from '../../components/Modal';

function ContactEmail() {
	const [enableSendButton, setEnableSendButton] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [emailData, setEmailData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
	});

	useEffect(() => {
		setEnableSendButton(
			(emailData.name !== '') &
				(emailData.phone !== '') &
				(emailData.email !== '') &
				(emailData.message !== '')
		);
	}, [emailData]);

	const send = (e) => {
		e.preventDefault();
		axios
			.post(`${SERVER_URL}/users/emailReceived`, { emailData })
			.then((response) => {
				setOpenModal(true);
			})
			.catch((err) => console.log(err));
	};

	const nameChanged = (e) => {
		setEmailData({ ...emailData, name: e.target.value });
	};
	const phoneChanged = (e) => {
		setEmailData({ ...emailData, phone: e.target.value });
	};
	const emailChanged = (e) => {
		setEmailData({ ...emailData, email: e.target.value });
	};
	const messageChanged = (e) => {
		setEmailData({ ...emailData, message: e.target.value });
	};

	return (
		<div className="contact-email">
			<div className="title">envíenos un mensaje</div>
			<form action="*" className="form-contact">
				<input
					type="text"
					name="name"
					placeholder="nombre"
					onChange={nameChanged}
					value={emailData.name}
				/>
				<input
					type="text"
					name="phone"
					placeholder="teléfono"
					onChange={phoneChanged}
					value={emailData.phone}
				/>
				<input
					type="text"
					name="email"
					placeholder="email"
					onChange={emailChanged}
					value={emailData.email}
				/>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="mensaje"
					onChange={messageChanged}
					value={emailData.message}
				></textarea>
				<div className="form-footer">
					<button
						className={`btn btn-send ${
							enableSendButton ? 'btn-send-active' : ''
						}`}
						onClick={send}
					>
						Enviar
					</button>
				</div>
			</form>

			{/* thank you for your message */}
			{openModal && (
				<Modal title="¡Excelente!" isOpen={openModal} setIsOpen={setOpenModal}>
					Hemos recibido su mensaje. Le contestaremos a la mayor brevedad
					posible.
				</Modal>
			)}
		</div>
	);
}

export default ContactEmail;
