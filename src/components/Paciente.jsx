const Paciente = ({patient, setPatient, deletePatient}) => {
    const { pet, owner, email, date,  symptoms, id } = patient;

    const handleDelete = () => {
        const respuesta = confirm('Do you want to remove this patient?');

        if(respuesta) {
            deletePatient(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Pet Name: {''}
                <span className="font-normal normal-case">{pet}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner's name: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Date Discharged: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPatient(patient)}
                >Edit</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    )
}

export default Paciente
