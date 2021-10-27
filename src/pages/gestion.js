import React from 'react'

import '../components/styles/gestion.css'


class gestion extends React.Component {

    render(){
        return(
            <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <header>
    <section className="Header"> 
    
    </section>
  </header>
  
  <nav>
    <ul className="navbar">
      <li id="Inicio"><a href="/principal">Inicio</a></li>
     
      <li id="Log out"><a href="/login">Log out</a></li>
       
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
              <h1 className="form-title"><span><b>Información de ventas</b></span></h1>
            </div>
            <label htmlFor="IUVenta" className="form-label">IU Venta</label>
            <input type="text" className="form-input" name="IU Venta" placeholder="Ingresa el IU de venta" />
            <label htmlFor="Cliente" className="form-label">Cliente</label>
            <input type="text" className="form-input" name="Cliente" placeholder="Ingresa los nombres y apellidos del cliente" />
            <label htmlFor="Valor de la Venta" className="form-label">Valor de la Venta</label>
            <input type="number" className="form-input" name="Valor de la Venta" placeholder="Ingresa el valor total de la venta" />
            <label htmlFor="Descripción detallada" className="form-label">Descripción detallada</label>
            <input type="text" className="form-input" name="Descripción detallada" placeholder="Descripción detallada" />
            <label htmlFor="Fecha inicial de pago" className="form-label"> Fecha inicial de pago</label>
            <input type="date" className="form-input" name="Fecha inicial de pago" placeholder="Ingresa la fecha inicial de pago" />
            <label htmlFor="Fecha futura de pago" className="form-label">Fecha futura de pago</label>
            <input type="date" className="form-input" name="Fecha futura de pago" placeholder="Ingresa la fecha futura de pago" />
            <label htmlFor="IU(Vendedor)" className="form-label">IU(Vendedor)</label>
            <input type="text" className="form-input" name="IU(Vendedor)" placeholder="Ingresa el IU(Vendedor" />
            <label htmlFor="Vendedor" className="form-label">Vendedor</label>
            <input type="text" className="form-input" name="Vendedor" placeholder="Ingresa los nombres y apellidos del vendedor" />
            <input type="submit" value="Buscar" defaultValue="Enviar datos de la venta" className="btn-submit" />
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

export default gestion