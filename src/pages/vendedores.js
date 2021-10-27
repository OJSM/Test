import React from 'react';

import '../components/styles/superior.css';


class vendedores extends React.Component {
    render(){
        return(
            <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            <nav>
              <ul className="navbar">
                <li id="Inicio"><a href="/principal">Inicio</a></li>
                <li id="Log out"><a href="/login">Log Out</a></li>
                
              </ul>
            </nav>
          
            <main>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          
              
          <section className="formulario">
                <div className="contenedor">
                  <div className="form">
                    <form action>
                      <div className="form-header">
                        <h1 className="form-title"><span><b>Información de vendedores</b></span></h1>
                      </div>
                      <label htmlFor="Usuario" className="form-label">Nombre </label>
                      <input type="text" className="form-input" maxlength="100" autofocus placeholder="Escriba su nombre"/>  
                      <label htmlFor="ID" className="form-label">Tipo de ID </label>    
                      <input type="text" className="form-input" name="ID" list="Tipo de ID" placeholder="Seleccione su tipo de ID" />
                      <datalist id="Tipo de ID">
                                      <option value="Cedula de ciudadania"></option>
                                      <option value="Cedula de Extranjeria"></option>
                                      <option value="Pasaporte"></option>
                                      <option value="NIT"></option>
                                  </datalist>
                      <label htmlFor="ID (IU)" className="form-label"> ID (IU)</label>
                      <input type="ID" className="form-input" placeholder="Escriba su numero de ID"/> 
                      <label htmlFor="direccion" className="form-label">Dirección</label>
                      <input type="text" className="form-input" name="inputAddress" list="Tipo de ID" placeholder="Ej. Av 0 #23-24" />
                      <label htmlFor="E-mail" className="form-label">E-mail </label>
                      <input type="text" className="form-input" name="email" placeholder="name@example.com.co" />
                      <label htmlFor="Teléfono" className="form-label">Teléfono</label>
                      <input type="tel" className="form-input" name="telefono" pattern="[0-8]{8}" placeholder="Ind. de ciudad + telefono"/>
                      <label htmlFor="Celular" className="form-label">Celular</label>
                      <input type="tel" className="form-input" name="Mobile" pattern="[0-9]{9}" placeholder="Ingrese su número de celular"/>        
                      <label htmlFor="Cargo" className="form-label">Cargo</label>
                      <input type="text" className="form-input" name="Cargo" list="Cargo" placeholder="Seleccione su cargo"/>     
                      <datalist id="Cargo">
                                      <option value="Vendedor"></option>
                                      <option value="Operario"></option>
                                      <option value="Ejecutivo"></option>
                                      <option value="Administrador"></option>
                                  </datalist>   
                      <label htmlFor="Especialidad" className="form-label">Especialidad</label>      
                      <input type="text" className="form-input" name="Especialidad" required size="50" list="Especialidad" placeholder="Seleccione la Especialidad"/>                
                      <datalist id="Especialidad">
                                      <option value="Producto-01"></option>
                                      <option value="Producto-02"></option>
                                      <option value="Producto-03"></option>
                                      <option value="Producto-04"></option>
                                      <option value="Producto-05"></option>
                                  </datalist>
                      <label htmlFor="Fecha de Ingreso" className="form-label">Date </label>
                      <input type="date" className="form-input" autofocus placeholder="Ingrese la fecha de ingreso"/>  
                      <textarea cols="95" name="observaciones" rows="8">
                                      Escriba sus observaciones...
                                  </textarea>
                    
                      <input type="submit" value="Guardar" defaultValue="Log In" className="btn-submit" />
                    </form>
                  </div>
                </div>
              </section>
                        
                    
              <br />
              <br />
              
            </main></div>
        )
    }
}
export default vendedores
