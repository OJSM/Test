import React from 'react'
import {Link} from 'react-router-dom'
import '../components/styles/superior.css'


class login extends React.Component{
    render(){
        return(
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  
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
              <h1 className="form-title"><span><b>Log In</b></span></h1>
            </div>
            <label htmlFor="Usuario" className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-input" name="Nombre de Usuario" placeholder="Ingresa el Nombre de Usuario" />
            <label htmlFor="Contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-input" name="Contraseña" placeholder="Ingresa la contraseña" />
            <Link to="/principal" style={{ textDecoration: 'none' }}>
            <input type="submit" value="Ingresar"  defaultValue="Log In" className="btn-submit" />
            </Link>
          </form>
        </div>
      </div>
    </section>
    <br />
    <br />
    <section className="footer">
      <br />
      <br />
    
    </section>
  </main></div>
        )
    }

}
export default login