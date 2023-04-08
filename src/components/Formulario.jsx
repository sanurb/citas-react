import { useState } from "react";
import Error from './Error'

export const Formulario = ({ patients, setPatients }) => {
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

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
      symptoms,
    };
    // Crear el paciente
    setPatients([...patients, objPatients]);
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
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
};
