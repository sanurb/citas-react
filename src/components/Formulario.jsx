import { useState, useEffect } from "react";
import Error from './Error'

export const Formulario = ({ patients, setPatients, patient, setPatient }) => {
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (patient) {
      setPet(patient.pet);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).slice(2);
    const date =  Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ( [pet, owner, email, date,  symptoms ].includes('')) {
      setError(true);
      return;
    }

    setError(false)
    // Crear el objeto de paciente
    const objPatients = {
      pet,
      owner,
      email,
      date,
      symptoms
    };

    if(patient.id){
      // Editando el registro
      objPatients.id = patient.id;
      const patientsUpdated = patients.map((patientState) => patientState.id === patient.id ? objPatients : patientState);

      setPatients(patientsUpdated);
      setPatient({});
    } else {
      // Creando el registro
      objPatients.id = generateId();
      setPatients([...patients, objPatients]);
    }

    // Reiniciar el form
    setPet("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-stone-700 text-3xl text-center">Form</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {""}
        <span className="text-indigo-600 font-bold ">Manage them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        { error &&  <Error><p>All fields are required</p></Error>}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet_name"
          >
            Pet Name
          </label>
          <input
            id="pet_name"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contact Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="date_discharged"
            className="block text-gray-700 uppercase font-bold"
          >
            Date Discharged
          </label>
          <input
            id="date_discharged"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-bold active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200 w-full uppercase"
          value={ patient.id ? 'Edit Patient' : 'Add Patient' }
        />
      </form>
    </div>
  );
};
