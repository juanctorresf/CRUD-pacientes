import AdminCitas from "./classes/AdminCitas.js";
import Notification  from "./classes/Notification.js";
import { citaObj, editando } from "./variables.js";
import { 
	formulario, 
	pacienteInput, 
	propietarioInput, 
	emailInput, 
	fechaInput, 
	sintomasInput, 
	formularioButtonSubmit, 
	btnConfirmarEliminar, 
	modalCard 
} from "./selectores.js";
import type { CitaI } from "./types.js";

const citas = new AdminCitas();

// Funciones
export function eliminarCita( id : string ) {
	modalCard?.showModal();
	
	btnConfirmarEliminar?.addEventListener('click', () => {
		citas.eliminar(id);
		citas.mostrar();
		cerrarModal();
	});
}

export function cerrarModal() {
	modalCard?.close();
} 

export function datosCita(e : Event) {
	const target = e.target as HTMLInputElement;
	citaObj[target.name] = target.value;
};

export function cargarEdicion( cita : CitaI ) {
	Object.assign(citaObj, cita);
	editando.value = true;

	pacienteInput.value = cita.paciente;
	propietarioInput.value = cita.propietario;
	emailInput.value = cita.email;
	fechaInput.value = cita.fecha;
	sintomasInput.value = cita.sintomas;


	if( formularioButtonSubmit !== null ) {
		formularioButtonSubmit.value = "Guardar Cambios"
	}
}

export function submitCita(e : SubmitEvent) {
	e.preventDefault();

	if( Object.values( citaObj ).some( valor => valor.trim() === '') ) {
		const notification = new Notification({
			text: 'Todos los campos son obligatorios',
			type: 'error'
		});

		notification.mostrar();
		return;
	}
	
	if(editando.value) {
		citas.editar({ ...citaObj });
		const notification = new Notification({
			text: 'Guardado Correctamente',
			type: 'exito'
		});
		notification.mostrar();

	} else {
		citas.agregar( {...citaObj} );
		const notification = new Notification({
			text: 'Paciente registrado',
			type: 'exito'
		});
		notification.mostrar();
	}

	formulario?.reset();
	citas.mostrar();
	resetObjectCita();
	editando.value = false;
	if( formularioButtonSubmit !== null) {
		formularioButtonSubmit.value = "Registrar paciente";
	}
}

export function generarId() {
	return Math.random().toString(36).substring(2) + Date.now();
}

export function resetObjectCita() {
	citaObj.id = generarId();
	citaObj.paciente = '';
	citaObj.propietario = '';
	citaObj.email = '';
	citaObj.fecha = '';
	citaObj.sintomas = '';
}