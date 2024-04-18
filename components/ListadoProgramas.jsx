"use cliente";

import ListadoProgramasDetalle from "./ListadoProgramasDetalle";
import { useEffect, useState } from "react";

function ListadoProgramas({ programas }) {
  const [programa, setProgramas] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    if (
      programas !== undefined &&
      programas !== null &&
      Object.keys(programas).length > 0
    ) {
      setProgramas(programas);
      setBool(false);
    } else {
      setProgramas({});
      setBool(true);
    }
  }, [programas]);

  return (
    <>
      {bool ? (
        <></>
      ) : (
        <>
          {programa.map((programa, index) => (
            <tr key={programa.id}>
              <th scope="row">{index + 1}</th>
              <td>{programa.programa}</td>
              <td>
                <ListadoProgramasDetalle
                  id={programa.id}
                  programa={programa.programa}
                />
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}

export default ListadoProgramas;
