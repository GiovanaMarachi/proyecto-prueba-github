import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/api/materias";

const editMateria = () => {
    const[materia, setMateria]=useState({nombre:'', mat_semestre:'', profesor:''});
    const navigate=useNavigate();
    const {id} = useParams();

    const update=async(e:any)=>{
        e.preventDefault();
        await axios.put(URI+'/'+id, materia);
        navigate('/');
    }
    useEffect(()=>{
        getMateriaById();
    },[])

    const getMateriaById=async()=>{
        const res=await axios.get(URI+'/'+id);
        setMateria(res.data.materia);
    }

    
    return (
    <div>
        <h1>Editar Materia</h1>
        <form onSubmit={update}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    value={materia.nombre} 
                    onChange={(e) => setMateria({ ...materia, nombre: e.target.value })} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="semestre" className="form-label">Semestre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="semestre" 
                    value={materia.mat_semestre} 
                    onChange={(e) => setMateria({ ...materia, mat_semestre: e.target.value })} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="profesor" className="form-label">Profesor</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="profesor" 
                    value={materia.profesor} 
                    onChange={(e) => setMateria({ ...materia, profesor: e.target.value })} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    </div>
    )
};
export default editMateria;