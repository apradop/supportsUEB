"use client";
import {useRouter} from "next/navigation"
import GET from "@/app/api/server/route"

function IndexPage () {
  const router = useRouter();
  
  return (
    <>
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
        <img className="card-img-top text-center" src="https://www.unbosque.edu.co/sites/default/files/logo.png" width={70}/>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Iniciar sesión</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Correo</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Contraseña</label>
            </div>
            <button className="btn btn-success btn-lg btn-block" onClick={() =>{
            router.push("/registroClase")
          }}>Iniciar sesión</button>
            <hr className="my-4"/>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default IndexPage