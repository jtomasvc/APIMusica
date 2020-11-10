import React, {useState} from 'react'


const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda,guardarBusqueda] = useState({
        artista:'',
        Cancion: ''
    })

    const [error,guardarError] = useState(false)
    const {artista,Cancion} = busqueda;

    //funcion para leer contenido del input
    const actualizarstate = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //consultar las apis
    const buscarInformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || Cancion.trim() === ''){
           guardarError(true) 
           return;
        }
        guardarError(false);
        //todo bien ,pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }
    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras y Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarstate}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Cancion"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarstate}
                                            value={Cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;