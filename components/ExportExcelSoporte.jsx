import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useExcel from "@/hooks/useExcel";


function ExportExcelSoporte({ soportes }) {

  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");

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
      exportToExcel(clasesFiltradas);
    }
  }

  function exportToExcel(sp) {
    var arreglo = sp.map((clase) => {
      return {
        TECNICO: clase.tecnico,
        RESPONSABLE: clase.responsable,
        USUARIO: clase.usuario,
        PROGRAMA: clase.programa,
        MATERIA: clase.materia,
        SALON: clase.salon,
        FECHAS: clase.fecha,
        ESTADO: clase.estado,
        OBSERVACIONES: clase.observaciones,
        ACTIVIDAD: clase.actividad,
        "ACTIVIDAD ADICIONAL": clase.actividadad,
      };
    });

    const { useExportToExcel } = useExcel();

    useExportToExcel(arreglo, "ReporteSoportes");
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
          Generar Reporte
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
                GENERACION DEL REPORTE
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
                  obtenerClasesXFecha(soportes, fecha1, fecha2);
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

export default ExportExcelSoporte;
