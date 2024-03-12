"use client";
import { useRouter } from "next/navigation";
import { useState , useEffect} from "react";
import swal from 'sweetalert';
import NavigationIni from "@/components/NavigationIni";

function IndexPage() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {

    window.sessionStorage.removeItem("user");

  }, []);

 async function login(e) {
    e.preventDefault();
    const username = e.target.user.value;
    const password = e.target.pass.value;

    const res = await fetch('/api/login', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res)
    const data = await res.json()
    console.log(data)

    if(data.boolean === true){

      if(data.rows[0].rol === "admin"){
        router.push("/listadoClasesFin");
        window.sessionStorage.setItem("user", data.rows[0].rol);
      }
      else{
        router.push("/listadoClases");
        window.sessionStorage.setItem("user", data.rows[0].rol);
      }

    }else{

      swal({
        title: "Usurio o contraseña incorrecta", 
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 3000
      });

    }

  }

  return (
    <>
    <NavigationIni />
      <form onSubmit={login}>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <img
                    className="card-img-top text-center"
                    src="https://www.unbosque.edu.co/sites/default/files/logo.png"
                    width={70}
                  />
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Iniciar sesión</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="user"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="user">
                        Usuario
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="pass"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="pass">
                        Contraseña
                      </label>
                    </div>
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Iniciar sesión
                    </button>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default IndexPage;
