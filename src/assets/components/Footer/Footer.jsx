import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Te ayudamos</h4>
            <ul className="list-unstyled">
              <li>+569 6880 2698</li>
              <li>Santiago, Chile</li>
              <li>Terminal San Borja #6781</li>
            </ul>
          </div>

          <div className="col">
            <h4>Únete a EstiloTemporal</h4>
            <ul className="list-unstyled">
              <li>Únete a nosotros</li>
              <li>Oportunidades de empleo</li>
              <li>Colaboraciones</li>
            </ul>
          </div>

          <div className="col">
            <h4>Nuestra empresa</h4>
            <ul className="list-unstyled">
              <li>Acerca de nosotros</li>
              <li>Nuestra historia</li>
              <li>Misión y visión</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EstiloTemporal | Todos los derechos reservados | Términos de servicio | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
