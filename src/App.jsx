import { useState } from "react";
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex justify-center">
          <Formulario 
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <ListadoPacientes 
            patients={patients}
            setPatient={setPatient}
          />
      </div>
    </div>
  )
}

export default App
