import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useExcel from "@/hooks/useExcel";

function ExportExcel({ clases }) {
  const [vacio, setVacio] = useState("");
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");
  function contarRepetidos(arr) {
    var conteo = {};

    arr.forEach(function (elemento) {
      if (conteo[elemento]) {
        conteo[elemento]++;
      } else {
        conteo[elemento] = 1;
      }
    });
    var conteoArray = [];
    for (var clave in conteo) {
      conteoArray.push({ elemento: clave, repeticiones: conteo[clave] });
    }

    conteoArray.sort(function (a, b) {
      return b.repeticiones - a.repeticiones;
    });
    return conteoArray;
  }

  function obtenerClasesXFecha(clases, fecha1, fecha2) {

    console.log(fecha1);
    const f = fecha1.split("-");
    let date1 = new Date(f[1] + "/" + f[2] + "/" + f[0]);
    console.log(date1);
    const f2 = fecha2.split("-");
    let date2 = new Date(f2[1] + "/" + f2[2] + "/" + f2[0]);
    console.log(date2);

    if (fecha1 === "" || fecha2 === "") {
      swal({
        title: "Error",
        text: "Debe seleccionar una fecha inicial y una fecha final",
        icon: "error",
        button: "Aceptar",
      });
    } else if (date1.getTime() > date2.getTime()) {
        swal({
            title: "Error",
            text: "La fecha inicial no puede ser mayor a la fecha final",
            icon: "error",
            button: "Aceptar",
            });
    } else {
      var clasesFiltradas = clases.filter((clase) => {
        const fechaa = clase.fecha.split("/");
        const fecha = new Date(fechaa[1] + "/" + fechaa[0] + "/" + fechaa[2]);
        console.log(fecha);

        console.log(date1.getTime());
        console.log(date2.getTime());
        console.log(fecha.getTime());
        if (fecha.getTime() >= date1.getTime() && fecha.getTime() <= date2.getTime()) {
          return clase;
        }if (fecha.getTime() === date1.getTime() && fecha.getTime() === date2.getTime()) {
          return clase;
        }
      });

      console.log(clasesFiltradas);
      ExportToExcel(clasesFiltradas);
    }
  }

  function ExportToExcel(clas) {
    var programas = clas.map((clase) => {
      var primerArreglo = {
        PROGRAMAS: clase.programas.values.toString(),
      };

      return primerArreglo;
    });

    var prog1 = programas.map((programa) => {
      return programa.PROGRAMAS.split(",");
    });

    const nuevoProgramas = [].concat(...prog1);

    var repetidos = contarRepetidos(nuevoProgramas);

    var arreglo = clas.map((clase) => {
      var a = {};

      var b = clase.programas.values.toString().split(",");

      for (var i = 0; i < repetidos.length; i++) {
        for (var j = 0; j < b.length; j++) {
          if (repetidos[i].elemento === b[j]) {
            a = {
              ...a,
              [repetidos[i].elemento]: "X",
            };
          }
        }
      }

      var primerArreglo = {
        RESPONSABLE: clase.responsable,
        PROGRAMA: clase.programa,
        MATERIA: clase.materia,
        SALON: clase.salon,
        FECHAS: clase.fecha,
        "HORA INICIAL": clase.horai,
        "HORA FINAL": clase.horaf,
        "HORA REGISTRO": clase.horaIniReal,
        "HORA FINAL REGISTRO": clase.horaFinalReal,
        DURACION: clase.duracion,
        OBSERVACIONES: clase.observaciones,
        "PROFESOR QUE TERMINA": clase.profeTerminar,
        ...a,
      };

      return primerArreglo;
    });

    console.log(arreglo);

    const { useExportToExcel } = useExcel();

    useExportToExcel(arreglo, "ClasesFinalizadasReporte");
  }
  return (
    <div>
      <div className="justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          Generar reporte
        </button>
      </div>
      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id="modal"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                GENERACIÓN DEL REPORTE
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <label htmlFor="" className="form-label">
                    Fecha Inicial
                  </label>
                  <div className="col">
                    <input
                      className="form-control"
                      type="date"
                      name="inlineRadioOptions2"
                      id="inlineRadio2"
                      value={fecha1}
                      onChange={(e) => {
                        setFecha1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                <label htmlFor="" className="form-label">
                    Fecha Final
                  </label>
                  <div className="col">
                    <input
                      className="form-control"
                      type="date"
                      value={fecha2}
                      onChange={(e) => {
                        setFecha2(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  obtenerClasesXFecha(clases, fecha1, fecha2);
                }}
                data-bs-dismiss="modal"
              >
                Exportar documento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportExcel;
