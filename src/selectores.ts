// Selectores
export const pacienteInput = document.querySelector('#paciente') as HTMLInputElement;
export const propietarioInput = document.querySelector('#propietario') as HTMLInputElement;
export const emailInput = document.querySelector('#email') as HTMLInputElement;
export const fechaInput = document.querySelector('#fecha') as HTMLInputElement;
export const sintomasInput = document.querySelector('#sintomas') as HTMLTextAreaElement;

export const modalCard = document.querySelector('#confirmationModal') as HTMLDialogElement;
export const btnConfirmarEliminar = document.querySelector('#btn-modal-yes') as HTMLButtonElement;
export const btnCancelar = document.querySelector('#btn-modal-cancel') as HTMLButtonElement;

export const formulario = document.querySelector('#formulario-cita') as HTMLFormElement;
export const formularioButtonSubmit = document.querySelector('#formulario-cita input[type="submit"]') as HTMLInputElement;
export const contenedorCitas = document.querySelector('#citas') as HTMLDivElement;