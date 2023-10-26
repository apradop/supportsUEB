import Link from "next/link";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
        <img src="https://www.unbosque.edu.co/sites/default/files/logo.png" alt="Bootstrap"  height="50"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/registroClase">
                  Registrar Clase
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/listadoClases">
                  Listado de clases
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="http://sipre-ueb.seguridad1.com.co:8000/login"
                >
                  SIPRE-UEB
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navigation;
