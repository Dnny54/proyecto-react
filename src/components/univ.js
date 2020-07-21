import React from 'react'

import './univ.css'

function mostrar (e) {
    alert('titulo pendiente')
}

const univ = () => {
    return(
        <div className="univ">
            <img src="imagenes/unefa.gif" id="logoUniv" />
            <a href="www.unefa.edu.ve">www.unefa.edu.ve</a>
            <button onClick={mostrar} >Mostrar Credenciales</button>
        </div>
    )
}

export default univ;