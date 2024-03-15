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
    if (
      profes !== undefined &&
      profes !== null &&
      Object.keys(profes).length > 0
    ) {
      for (var i = 0; i < Object.keys(profes).length; i++) {

        console.log(profes[i].Fecha + " " + profes[i].HoraInicial)
        let horaini = new Date(profes[i].Fecha + " " + profes[i].HoraInicial)
        let horafini = new Date(profes[i].Fecha + " " + profes[i].HoraFinal)

        console.log(horaini.getTime())
        console.log(horafini.getTime())
        console.log(hora.getTime())
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
              Herramientas a utilizar
            </label>
            <select className="form-select" id="inputGroupSelect01" multiple
            onChange={(e) => {

              const options = [...e.target.selectedOptions];
              const values = options.map(option => option.value);
              console.log({values});
              setHerramientas({values});

            }}>
              <option>ARGIS</option>
              <option>ARGIS PRO</option>
              <option>AUTODESK 3DMAX</option>
              <option>AUTODESK AUTOCAD</option>
              <option>AUTODESK FUSION 360</option>
              <option>AUTODESK MAYA</option>
              <option>AUTODESK MESHMIXER</option>
              <option>AUTODESK MUDBOX</option>
              <option>AUTODESK REVIT</option>
              <option>BIZAGI</option>
              <option>BLENDER</option>
              <option>BONGO</option>
              <option>C++</option>
              <option>CELONIS</option>
              <option>CMAP TOOLS</option>
              <option>DBEAVER</option>
              <option>ECLIPSE</option>
              <option>EPI INFO</option>
              <option>EPIDATA</option>
              <option>FINALE</option>
              <option>FLAMINGO</option>
              <option>FREE MIND</option>
              <option>GOOGLE EARTH</option>
              <option>GRASHOPPER</option>
              <option>HEC-RAS, HEC-HMS</option>
              <option>ILWIS</option>
              <option>JAMOVI</option>
              <option>KEYSHOT</option>
              <option>MARKETBOOT</option>
              <option>MENDELEY</option>
              <option>MYSQL WORKBENCH</option>
              <option>NETBEANS</option>
              <option>OPEN COBOL IDE</option>
              <option>ORACLE 11 G EXPRESS</option>
              <option>PAQUETE OFFICE</option>
              <option>PENGUIN</option>
              <option>POWER BI</option>
              <option>PROJECT</option>
              <option>PROSESSING</option>
              <option>QGIS</option>
              <option>R</option>
              <option>R STUDIO</option>
              <option>RHINO CAM</option>
              <option>RHINOCEROS</option>
              <option>SKETCH BOOK</option>
              <option>SKETCHUP PRO</option>
              <option>SOLIDWORKS</option>
              <option>SPSS</option>
              <option>STATA</option>
              <option>SUITE CREATIVE CLOUD</option>
              <option>VENSIM</option>
              <option>VIRTUAL BOX</option>
              <option>VISIO</option>
              <option>VISUAL ESTUDIO CODE</option>
              <option>VRAY</option>
              <option>VRAY RHINO</option>
              <option>WEAP</option>
              <option>WINLOGILAB</option>
              <option>WRITE AND CITE</option>
              <option>XAMP</option>
              <option>XPPEN</option>
              <option>ZBRUSH</option>
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
