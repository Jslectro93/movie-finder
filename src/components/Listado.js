import React, { useEffect, useState} from "react";
import { Editar } from "./Editar";

export const Listado = ({listadoState, setListadoState}) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    // conseguir peliculas almacenadas
    let pelis_guardadas = conseguirPeliculas();
    // Filtrar esas peliculas para que elimine del array la que no quiero
    let pelisFiltradas = pelis_guardadas.filter((peli) => peli.id !== parseInt(id));
    //actualizar estado del listado
    setListadoState(pelisFiltradas);
    // actualizar los datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelisFiltradas));
  } 
  
  return (
    <>
      {listadoState !== null 
      ? listadoState.map((peli) => {
        return (
          <article className="peli-item" key={peli.id}>
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>
            {editar === peli.id && <Editar 
            peli={peli} 
            conseguirPeliculas={conseguirPeliculas}
            setEditar={setEditar}
            setListadoState={setListadoState}/>
            }
          </article>
        );
      })
      : (<p>No hay peliculas</p>)
    }
    </>
  );
};
