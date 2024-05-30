import "./style.css";
import { datosCita, submitCita, cerrarModal } from './funciones';

// Selectores
import { 
	pacienteInput, 
	propietarioInput, 
	emailInput, 
	fechaInput, 
	sintomasInput,
	formulario,
	btnCancelar,
} from './selectores'

// Events
pacienteInput?.addEventListener('input', datosCita);
propietarioInput?.addEventListener('input', datosCita);
emailInput?.addEventListener('input', datosCita);
fechaInput?.addEventListener('input', datosCita);
sintomasInput?.addEventListener('input', datosCita);
formulario?.addEventListener('submit', submitCita);
btnCancelar?.addEventListener('click', cerrarModal);
