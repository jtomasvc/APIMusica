import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import axios from 'axios';
import Cancion from './Components/Cancion';
import Artista from './Components/Artista';

function App() {

  //definir el state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra,guardarLetra] = useState('');
  const [info,guararInfo] = useState({})

  useEffect(()=>{
    if(Object.keys(busquedaletra).length === 0)return;

    const consultarApiLetra = async () => {

      const {artista,Cancion} = busquedaletra

      const url = `https://api.lyrics.ovh/v1/${artista}/${Cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra,informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guararInfo(informacion.data.artists[0])

      guardarBusquedaLetra({})

    }
    consultarApiLetra();
  },[busquedaletra]);

  return (
    <Fragment>
        <Formulario
          guardarBusquedaLetra={guardarBusquedaLetra}
        />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Artista
                info={info}
              />
            </div>
            <div className="col-md-6">
                <Cancion
                  letra={letra}
                />
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
