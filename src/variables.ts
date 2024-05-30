import { generarId } from "./funciones";
import type { CitaI } from "./types";


let editando = {
    value: false
};

// Cita object 
const citaObj : CitaI = {
    id: generarId(),
    paciente:'',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}
