import React from 'react';


import Perfil from './components/perfil.js';
import Msj from './components/msj.js';
import Encabezado from './components/encabezado.js';
import Univ from './components/univ.js';
import Footer from './components/footer.js';
import Atomo from './components/atomo'
import Tabla from './components/tabla.js';

import './app.css';



class App extends React.Component{
  
  render(){
    return(
      <div className="cabeza">
        <Encabezado />
          <div className="cuerpo">
            <Perfil />
              <div className="columna">
                <Msj />
                <Atomo />
                <Tabla />
              </div>
           <Univ />
          </div>
        <Footer />
      </div>
    )
  }
}

export default App;


