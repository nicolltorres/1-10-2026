import Tar from "./Tar";
import Formulario from "../Orquestador/Formulario";
import Inicio from "./inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/Tar" element={<Tar/>} />
              <Route path="/Formulario" element={<Formulario/>} />
           </Routes>
        </BrowserRouter>
    )
}