import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
import { NotesCreate } from './components/NotesCreate';

function App() {
  return (
    <div className="App">
        <h1>Notes APP</h1>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/createnote" element={<NotesCreate/>}/>
        </Routes>
    </div>
  );
}

export default App;
