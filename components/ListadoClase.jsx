function listadoClases ({ users }) {

    return (

        <>
        {users.map((usua) => 
        <tr>
            
        <th scope="row">{usua.id}</th>
        <td>{usua.first_name}</td>
        <td>{usua.first_name}</td>
        <td>{usua.last_name}</td>
        <td>{usua.email}</td>
        <td>
  
        <button type="button" className="btn btn-primary">Información</button>
  
        <button type="button" className="btn btn-success">Finalizar</button>
  
        </td>
      </tr>
            )}
        

        </>
        
    )
}

export default listadoClases