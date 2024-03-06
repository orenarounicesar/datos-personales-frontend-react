import axios from "axios";
import { useEffect, useState } from "react";
import { borrar as eliminarPersona } from "../repository/delete";

const List = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API);

      const responseData = response.data;

      setData(responseData);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const borrar = async (id) => {
    const resp = await eliminarPersona(id);
    if (resp.status == 200) {
      fetchData();
      alert("Borrado");
    } else {
      alert("Ha ocurrido un error");
    }
  };

  return (
    <div className="h-full w-full p-4">
      <div className="overflow-auto h-full">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>ACCIONES</th>
              <th>ID</th>
              <th>Tipo_Documento</th>
              <th>Documento</th>
              <th>Primer Nombre</th>
              <th>Segundo Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Fecha Nacimiento</th>
              <th>Sexo</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item) => (
                <tr key={item.id}>
                  <th>
                    <button onClick={() => borrar(item.id)}>Borrar</button>
                  </th>

                  <th>{item.id}</th>
                  <td>{item.tipoDocumento}</td>
                  <td>{item.documento}</td>
                  <td>{item.nombre1}</td>
                  <td>{item.nombre2}</td>
                  <td>{item.apellido1}</td>
                  <td>{item.apellido2}</td>
                  <td>{item.fechaNacimiento}</td>
                  <td>{item.sexo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">Cargando...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
