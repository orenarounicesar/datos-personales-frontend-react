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
    const eliminar = confirm(`¿Quieres eliminar la persona con id: ${id}?`);
    if (!eliminar) {
      return;
    }

    const resp = await eliminarPersona(id);
    if (resp.status == 200) {
      fetchData();
      alert("Borrado");
    } else {
      alert("Ha ocurrido un error");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <a className="btn btn-ghost text-xl">Lista de personas</a>
        <div className="h-full w-5/6 p-4 border-4 rounded-lg">
          <div className="overflow-auto h-full">
            <table className="table table-xs">
              <thead>
                <tr className="center">
                  <th>ID</th>
                  <th>Tipo_Documento</th>
                  <th>Documento</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Fecha Nacimiento</th>
                  <th>Sexo</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th>{item._id?.$oid ?? ""}</th>
                    <td>{item.tipoDocumento ?? ""}</td>
                    <td>{item.documento ?? ""}</td>
                    <td>{item.nombre1 ?? ""}</td>
                    <td>{item.nombre2 ?? ""}</td>
                    <td>{item.apellido1 ?? ""}</td>
                    <td>{item.apellido2 ?? ""}</td>
                    <td>{item.fechaNacimiento?.$date ?? ""}</td>
                    <td>{item.sexo ?? "Sin especificar"}</td>
                    <th>
                    <button className="btn btn-outline btn-error" onClick={() => borrar(item._id?.$oid)}> 
                      {/*<button className="btn btn-outline btn-error" onClick={() => borrar(item.id)}> */}
                        Borrar
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
