export const GuardarEnStorage = (clave, elemento) => {
  // conseguir los elementos que ya tenemos en el localStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  // comprobar si es un array
  if (Array.isArray(elementos)) {
    // si es un array, lo añadimos al final
    elementos.unshift(elemento);
    // guardamos en el localStorage
  } else {
    // si no es un array, lo creamos y lo añadimos
    elementos = [elemento];
  }
  localStorage.setItem(clave, JSON.stringify(elementos));

  return elemento;
};
