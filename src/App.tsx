import Header from "./components/header"
import {ListadoPacientes} from "./components/listado-pacientes"
import { Formulario} from "./components/formulario";
import { PacientesProvider } from "./context/PacientesProviders";



function App() {




  return (
    <PacientesProvider> 
      <div className="container mx-auto mt-10">
        <Header/>
        <div className="mt-12 p-3 md:flex" >
        <Formulario/>
        <ListadoPacientes/>
        </div>
      </div>
  
    </PacientesProvider>
  )
}

export default App
