import React from 'react';

const tabla = () => {
    return(
        <div>
            <table>
                <th colSpan="3">Temática</th>
                <tr>
                    <td>HidroCarburos</td>
                    <td>Química General</td>
                    <td>Química Orgánica</td>
                </tr>
                <tr>
                    <td>Procesos Petroquímicos</td>
                    <td>Cinetica Química</td>
                    <td>Equilibrio Químico</td>
                </tr>
                <tr>
                    <td>Reacciones</td>
                    <td>Estequiometria</td>
                    <td>FisicoQuímica</td>
                </tr>
            </table>
        </div>
    )
}

export default tabla;