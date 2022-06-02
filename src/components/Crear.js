import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    // conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    // guardar estado para reflejar cambios en la interfaz de usuario
    setPeliState(peli);

    // actualizar stato del listado principal
      setListadoState(elementos => [peli, ...elementos]);

    // guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);

  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <p>{titulo && descripcion && `Has creado la pelicula: ${titulo}`}</p>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" id="title" placeholder="Titulo" />
        <textarea
          id="description"
          placeholder="Descripción"
          name="descripcion"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
