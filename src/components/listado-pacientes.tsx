import { useContext } from "react"
import { PacientesContext } from "../context/PacientesContext"

export const ListadoPacientes = () => {

  const {pacientes} = useContext(PacientesContext)

  return (
    <>
    <div className="md:w-1/2 lg:w-2/5 ml-auto">
    <h2 className="font-bold text-3xl mb-10 text-center">Listado de <span className="text-indigo-700">Pacientes</span> </h2>
    {pacientes.map((paciente) => (
      <ul  className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10" >
        <li className="block text-gray-700 uppercase font-bold">
          <p >Nombre: {paciente.mascota}</p>
          <p >Raza: {paciente.raza}</p>
          <p >Dueño: {paciente.duenio}</p>
          <p >Email: {paciente.email}</p>
        </li>
      </ul>
    ))}
    </div>
    </>
  )
}
