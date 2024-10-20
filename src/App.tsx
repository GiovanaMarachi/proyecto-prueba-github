
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ShowMaterias from './components/ShowMaterias';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateMateria from './components/CreateMateria';
import EditMateria from './components/EditMateria';
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowMaterias />} />
            <Route path='/create' element={<CreateMateria/>} />
            <Route path='/edit/:id' element={<EditMateria/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;