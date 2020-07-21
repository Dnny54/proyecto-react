import React from 'react'

import Redes from './redes.js'

import './perfil.css';

class Perfil extends React.Component {

    render (){
        return(
            <article className="perfil">
                <img src="/imagenes/danny.1.jpg" id="fotoPerfil" />
                <p className="datos"><b>Nombre:</b> <span>Danny González</span></p>
                <p className="datos"><b>Profesión:</b> <span>Ingeniero Petroquímico</span></p>
                <p><b>Contactos:</b></p>
                <Redes />
            </article>
        )
    }
}

export default Perfil;