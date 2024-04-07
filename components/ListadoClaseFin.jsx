"use client";
import useExcel from "@/hooks/useExcel";

function listadoClasesFin({ clases }) {
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

  function exportToExcel(clas) {
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
              [repetidos[i].elemento]: "X"
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
        ...a
      };
      
      return primerArreglo;
    });

    console.log(arreglo);

    const { useExportToExcel } = useExcel();

    useExportToExcel(arreglo, "ClasesFinalizadasReporte");
  }

  return (
    <>
      <div className="container">
        <h1>Listado de Clases Finalizadas</h1>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => exportToExcel(clases)}
        >
          Descargar Reporte
        </button>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Fecha</th>
                <th scope="col">Horario Inicial</th>
                <th scope="col">Horario Final</th>
                <th scope="col">Salón</th>
                <th scope="col">Responsable</th>
                <th scope="col">Materia</th>
              </tr>
            </thead>
            <tbody>
              {clases.map((clase, index) => (
                <tr key={clase.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{clase.fecha}</th>
                  <td> {clase.horai}</td>
                  <td> {clase.horaf}</td>
                  <td>{clase.salon}</td>
                  <td>{clase.responsable}</td>
                  <td>{clase.materia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default listadoClasesFin;



















