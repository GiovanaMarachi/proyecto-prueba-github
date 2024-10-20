import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URI='https://prueba-backend-72hk.onrender.com/api/materias/';

const ShowMaterias = () => {
    const [materias, setMaterias]=useState([]);
    useEffect(()=>{
        getMaterias();
    },[])

    const getMaterias=async()=>{
        const res=await axios.get(URI);
        setMaterias(res.data.materias);
    }

    const deleteMateria=async(id:number)=>{
        await axios.delete(URI+'/'+id);
        getMaterias();
    }

    return(
        <div>
            <h1>Materias</h1>
            <Link to="/create" className="btn btn-success mb-2">
            <i className="fas fa-plus"></i> Crear Materia
            </Link>
            <table className="table table-striped">
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Semestre</th>
            <th>Profesor</th>
            <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
            materias.map((materia:any)=>{
                return(
                <tr key={materia.id}>
                <td>{materia.nombre}</td>
                <td>{materia.mat_semestre}</td>
                <td>{materia.profesor}</td>
                <td>
                <Link to={`/edit/${materia.id}`} className="btn btn-primary">
                    <i className="fas fa-edit"></i> Editar
                </Link>
                <button onClick={()=>deleteMateria(materia.id)} className="btn btn-danger">
                    <i className="fas fa-trash"></i> Eliminar
                </button>
                </td>
                </tr>
                )
            })
            }
            </tbody>
            </table>
        </div>

    )
}

export default ShowMaterias;