"use client";
import ExportExcel from "@/components/ExportExcel"
import { useEffect, useState } from "react";

function ListadoClasesFin({ clases }) {

  //console.log(clases);
  const [clase, setClases] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    if (
      clases !== undefined &&
      clases !== null &&
      Object.keys(clases).length > 0
    ) {
      setClases(clases);
      setBool(false);
    } else {
      setClases({});
      setBool(true);
    }
  }, [clases]);

 

  return (
    <>
      <div className="container">
        <h1>Listado de Clases Finalizadas</h1>
        <ExportExcel clases={clase}></ExportExcel>

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
                {clase.map((clase, index) => (
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
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default ListadoClasesFin;



















