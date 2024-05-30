import { formulario } from "../selectores";

type NotificationType = {
	text: string;
	type: "error" | "exito" | "";
}

export default class Notification {

	notification : NotificationType = {
		text: "",
		type: ""
	}
	constructor({text, type} : NotificationType) {
		this.notification.text = text
		this.notification.type = type
	}

	mostrar() {
		// Create notification
		const alerta = document.createElement('div');
		alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

		// Eliminate preview alert
		const alertPreview = document.querySelector('.alert')
		alertPreview?.remove();

		// If type is 'error', add a class
		this.notification.type === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500')

		// Error message
		alerta.textContent = this.notification.text;

		// Insert on DOM 
		formulario?.parentElement?.insertBefore(alerta, formulario);

		// Eliminate alert
		setTimeout(() => {
			alerta.remove();
		}, 3000);
	}
}
