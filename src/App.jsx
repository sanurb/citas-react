import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(INITIAL);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ));
  }, [patients])


  const deletePatient = id => {
    const patientsUpdated = patients.filter( patient => patient.id !== id);
    setPatients(patientsUpdated)
  }

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
            deletePatient={deletePatient}
          />
      </div>
    </div>
  )
}

export default App
