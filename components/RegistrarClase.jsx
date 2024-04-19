"use client";

import { useEffect, useState } from "react";
import ModalRegistros from "@/components/ModalRegistros"
import Navigation from "@/components/Navigation";
import { ButtonToolbar } from "react-bootstrap";


function RegistrarClase({ profes, llave }) {
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [materia, setMateria] = useState("");
  const [salon, setSalon] = useState("");
  const [horaIni, setHoraIni] = useState("");
  const [horaFini, setHoraFini] = useState("");
  const [herramientas, setHerramientas] = useState({});
  const [observaciones, setObservaciones] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)
  const keyProfe = llave;
  const horafini = new Date();
  const hora = new Date();
  let boolean = true;
  

  useEffect(() => {
    leerProgramas();
    if (
      profes !== undefined &&
      profes !== null &&
      Object.keys(profes).length > 0
    ) {
      for (var i = 0; i < Object.keys(profes).length; i++) {

        //console.log(profes[i].Fecha + " " + profes[i].HoraInicial)
        let horaini = new Date(profes[i].Fecha + " " + profes[i].HoraInicial)
        let horafini = new Date(profes[i].Fecha + " " + profes[i].HoraFinal)

        //console.log(horaini.getTime())
        //console.log(horafini.getTime())
        //console.log(hora.getTime())
        if (horaini.getTime()  <= hora.getTime()  && horafini.getTime() >= hora.getTime()) {
          setProfesor(profes[i]);
          boolean = false;
        }
      }
      mensaje(boolean);
      boolean = true;
      
    } else {
      setVacio();
    }
  }, [profes]);

  function mensaje(b) { 
    if(b){
      swal({
        title: "El docente no tiene clase a esta hora", 
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 3000
      });
      
    }

  }

  function setProfesor(profe) {
    setNombre(profe.NombreDocente);
    setPrograma(profe.Programa);
    setMateria(profe.Materia);
    setSalon(profe.EspacioFisico);
    setHoraIni(profe.HoraInicial);
    setHoraFini(profe.HoraFinal);
    setIsDisabled(true)
  }

  function setVacio() {
    setNombre("");
    setPrograma("");
    setMateria("");
    setSalon("");
    setHoraIni("");
    setHoraFini("");
    setIsDisabled(false)
  }

  async function leerProgramas(){
    const res = await fetch("/api/listadoProgramas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    //typeof data;

    data = data.sort((a,b) => {
      if(a.programa < b.programa) {
        return -1;
      }
    });

    if(process.browser){
      const programasl = document.querySelector("#selectorProgramas");

      let out = "";
      for (let pro of data) {
        out += `<option >${pro.programa} </option>`;
      }
      programasl.innerHTML = out;
    }
  }


  return (
    <>
    <div className="container">
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Responsable 
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Programa académico / Área
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={programa}
              onChange={(e) => setPrograma(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Materia / Depedencia
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              disabled={isDisabled}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Salón
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={salon}
              onChange={(e) => setSalon(e.target.value)}
              disabled={isDisabled}
            ></input>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Hora inicial
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              type="time"
              value={horaIni}
              onChange={(e) => setHoraIni(e.target.value)}
              disabled={isDisabled}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Hora final
            </label>
            <input
              type="time"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={horaFini}
              onChange={(e) => setHoraFini(e.target.value)}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Herramientas a utilizar (Si desea escoger mas de una, mantenga presionada la tecla ctrl)
            </label>
            <select className="form-select" id="selectorProgramas" multiple
            onChange={(e) => {

              const options = [...e.target.selectedOptions];
              const values = options.map(option => option.value);
              //console.log({values});
              setHerramientas({values});

            }}>
              
            </select>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Observaciones
            </label>
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setObservaciones(e.target.value)}
            ></textarea>
            <ModalRegistros nombre={nombre} programa={programa} materia={materia}
            salon={salon} horaFini={horaFini} horaIni={horaIni} herramientas={herramientas} observaciones={observaciones} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RegistrarClase;
