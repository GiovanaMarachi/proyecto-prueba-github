import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "https://prueba-backend-72hk.onrender.com/api/materias";

const CreateMateria = () => {
   const[nombre, setNombre]=useState('');
    const[semestre, setSemestre]=useState('');
    const[profesor, setProfesor]=useState('');
    const navigate=useNavigate();


    const store =async(e:any)=>{
        e.preventDefault();
        const {data} = await axios.post(URI, {nombre:nombre, mat_semestre:semestre, profesor:profesor},
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        console.log(data);
        
        navigate('/');
    }   

    return (
        <div>
            <h1>Crear Materia</h1>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre kuak</label>
                    <input type="text" className="form-control" id="nombre" onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="semestre" className="form-label">Semestre</label>
                    <input type="text" className="form-control" id="semestre" onChange={(e)=>setSemestre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="profesor" className="form-label">Profesor</label>
                    <input type="text" className="form-control" id="profesor" onChange={(e)=>setProfesor(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )

}
export default CreateMateria;