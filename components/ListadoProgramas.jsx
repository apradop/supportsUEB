"use cliente";

import ListadoProgramasDetalle from "./ListadoProgramasDetalle";

function ListadoProgramas({ programas }) {

    return(
        <>
        {programas.map((programa,index) => (
            <tr key={programa.id}>
                <th scope="row">{index+1}</th>
                <td>{programa.programa}</td>
                <td>
                    <ListadoProgramasDetalle id={programa.id} programa={programa.programa}/>
                </td>
            </tr>
        ))}

        </>
    );

}

export default ListadoProgramas;