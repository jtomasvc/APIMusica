import React from 'react'


const Artista = ({info}) => {
    if(Object.keys(info).length === 0 ) return null

    const {strArtistThumb, strGenre, strBiographyES} = info;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista"/>
                <p className="card-text">Genero: {strGenre}</p>
                <p className="card-text">Biografia: {strBiographyES}</p>
            </div>
        </div>
     );
}
 
export default Artista;