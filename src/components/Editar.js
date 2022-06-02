import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
  const titulo_componente = "Editar pelicula"
  const guardarEdicion = (e, id) => {
    e.preventDefault();
      // conseguir el target del evento
      let target = e.target;
      // buscar el indice del objeto de la pelicula a actualizar
      let peliculas_almacenadas = conseguirPeliculas();
      const indice = peliculas_almacenadas.findIndex((peli) => peli.id === parseInt(id));
      // crear un objeto con el mismo id de ese indice, con titulo y descripcion de ese formulario

      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value,
      }
      // actualizar el elemento con este indice
      peliculas_almacenadas[indice] = peli_actualizada;
      
      // Guardar el nuevo dato de objetos en el localStorage
      localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));
      // actualizar estados
      setListadoState(peliculas_almacenadas);
      setEditar(0);
  }

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input type="text" name="titulo" className="titulo_editado" defaultValue={peli.titulo}/>

        <textarea name="descripcion" defaultValue={peli.descripcion} className="descripcion_editada" id="" cols="30" rows="10"></textarea>

        <input type="submit" className="editar" value="actualizar"/>
      </form>
    </div>
  )
}
