"use client";
import ExportExcel from "@/components/ExportExcelSoporte";
import { useEffect, useState } from "react";

function ListadoSoporte({ soportes }) {
  const [soporte, setSoporte] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    if (
      soportes !== undefined &&
      soportes !== null &&
      Object.keys(soportes).length > 0
    ) {
      setSoporte(soportes);
      setBool(false);
    } else {
      setSoporte({});
      setBool(true);
    }
  }, [soportes]);

  return (
    <>
      <div className="container">
        <h1>Listado de Soportes</h1>
        <ExportExcel soportes={soportes}></ExportExcel>

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
            {bool ? (
              <tbody>
              </tbody>
            ) : (
              <tbody>
                {soporte.map((soporte, index) => (
                  <tr key={soporte.id}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row">{soporte.fecha}</th>
                    <td> {soporte.horai}</td>
                    <td> {soporte.horaf}</td>
                    <td>{soporte.salon}</td>
                    <td>{soporte.responsable}</td>
                    <td>{soporte.materia}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default ListadoSoporte;
