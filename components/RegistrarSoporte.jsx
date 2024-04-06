"use client";

import { useEffect, useState } from "react";
import ModalSoporte from "@/components/ModalSoporte";

function RegistrarSoporte({ profes, llave }) {
  const [nombre, setNombre] = useState("");
  const [user, setUser] = useState("");
  const [nombreTec, setNombreTec] = useState("");
  const [programa, setPrograma] = useState("");
  const [materia, setMateria] = useState("");
  const [salon, setSalon] = useState("");
  const [horaIni, setHoraIni] = useState("");
  const [horaFini, setHoraFini] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [actividadRea, setActividadRea] = useState("");
  const [estado, setEstado] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledObs, setIsDisabledObs] = useState(true);
  const [isDisabledBoton, setIsDisabledBoton] = useState(false);
  const keyProfe = llave;
  const [data, setData] = useState({});

  const horafini = new Date();
  const hora = new Date();
  let boolean = true;

  //LeerTecnicos();

  useEffect(() => {
    if (
      profes !== undefined &&
      profes !== null &&
      Object.keys(profes).length > 0
    ) {
      for (var i = 0; i < Object.keys(profes).length; i++) {
        console.log(profes[i].Fecha + " " + profes[i].HoraInicial);
        let horaini = new Date(profes[i].Fecha + " " + profes[i].HoraInicial);
        let horafini = new Date(profes[i].Fecha + " " + profes[i].HoraFinal);

        console.log(horaini.getTime());
        console.log(horafini.getTime());
        console.log(hora.getTime());
        if (
          horaini.getTime() <= hora.getTime() &&
          horafini.getTime() >= hora.getTime()
        ) {
          console.log("entro");
          setProfesor(profes[i]);
          boolean = false;
        }
      }
      mensaje(boolean);
    } else {
      setVacio();
    }
  }, [profes]);

  function setProfesor(profe) {
    setNombre(profe.NombreDocente);
    setPrograma(profe.Programa);
    setMateria(profe.Materia);
    setSalon(profe.EspacioFisico);
    setHoraIni(profe.HoraInicial);
    setHoraFini(profe.HoraFinal);
    setIsDisabled(true);
  }

  function mensaje(boolean) {
    if (boolean) {
      swal({
        title: "El docente no tiene clase a esta hora",
        button: false,
        icon: "error",
        text: "Verifique la información e intenté nuevamente",
        timer: 3000,
      });
    }
  }

  function setVacio() {
    setNombre("");
    setPrograma("");
    setMateria("");
    setSalon("");
    setHoraIni("");
    setHoraFini("");
    setActividadRea("");
    setIsDisabled(false);
    setIsDisabledObs(true);
  }

  async function LeerTecnicos() {
    const res = await fetch("http://localhost:3000/api/listadoTecnico", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("ESTOS SON LOS TECNICOS");
    typeof data;
    console.log(data);
  }

  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Técnico
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => {
                setNombreTec(e.target.value);
              }}
            >
              <option>Anderson Javier Avila Peña</option>
              <option>Brayan Steven Moreno</option>
              <option>Carlos Alberto Gutiérrez Cruz</option>
              <option>Edwin Franco Cruz</option>
              <option>Fabian Alexis Franco Gonzalez</option>
              <option>Javier Oswaldo Bohorquez Santiago</option>
              <option>Johan Manuel Gaviria</option>
              <option>John Jairo Agudelo</option>
              <option>Juan David Morales</option>
              <option>Juan José Gamarra Gale</option>
              <option>Karen Lorena Vasquez</option>
              <option>Kewin Esteban Restrepo</option>
              <option>Nelson Alvarez Coronado</option>
              <option>Oscar Andrés Deantonio</option>
              <option>Santi Anderson Altuzarra</option>
              <option>Santiago Alejandro Orjuela</option>
            </select>
          </div>
          <div className="col input-group mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Usuario Institucional
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={user}
                onChange={(e) => setUser(e.target.value.trim())}
              ></input>
              <span className="input-group-text" id="basic-addon2">
                @unbosque.edu.co
              </span>
            </div>
          </div>
        </div>
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
        <div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Actividad Realizada
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(e) => {
                  setActividadRea(e.target.value);
                }}
              >
                <option>Acompañamiento / Inducción</option>
                <option>Asignación Provisional de Portatil</option>
                <option>Configuración Video Beam - TV</option>
                <option>Duplicado de Pantallas</option>
                <option>Enceder Equipo de Cómputo</option>
                <option>Enceder Video Beam - TV</option>
                <option>Información Errónea</option>
                <option>Instalación de Software</option>
                <option>Reiniciar Sistema</option>
                <option>Revisión o Cambio de Periféricos</option>
                <option>Soporte Audio</option>
                <option>Soporte Aulas Multipropósito</option>
                <option>Soporte No Necesario</option>
                <option>Usuario o Clave de Ingreso</option>
                <option>Verificar Conectividad a Internet</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="" className="form-label">
            ¿Finalizó la actividad?
          </label>
          <div className="col">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="No"
              onChange={(e) => {
                setIsDisabledObs(false);
                setEstado(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              NO
            </label>
          </div>
          <div className="col">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Si"
              onChange={(e) => {
                setIsDisabledObs(true);
                setEstado(e.target.value);
              }}
              disabled={isDisabledBoton}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              SI
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Observaciones
            </label>
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setObservaciones(e.target.value);
                if (e.target.value !== "") {
                  setIsDisabledBoton(true);
                } else {
                  setIsDisabledBoton(false);
                }
              }}
              disabled={isDisabledObs}
            ></textarea>
            <ModalSoporte
              nombre={nombre}
              usuario={user}
              nombreTec={nombreTec}
              programa={programa}
              materia={materia}
              salon={salon}
              horaFini={horaFini}
              horaIni={horaIni}
              observaciones={observaciones}
              estado={estado}
              actividad={actividadRea}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrarSoporte;
