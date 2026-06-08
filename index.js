const form = document.querySelector('#porra-form');
const mensaje = document.querySelector('#mensaje');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const datos = new FormData(form);
    const porra = {
      nombre: datos.get('nombre'),
      campeon: datos.get('campeon'),
      subcampeon: datos.get('subcampeon'),
    };

    console.log('Porra guardada:', porra);
    mensaje.textContent = 'Porra guardada correctamente.';
    form.reset();
  });
}
