
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegasenaPage from "../../pages/Megasena";
import Megasena from "../../pages/Megasena";
import LotoFacil from "../../pages/LotoFacil";
import Quina from "../../pages/Quina";
import Menu from "../../components/menu/Menu";

function Erro() {
    return (
        <>
            <div className="carregando">
                <h1>Bem-vindo!</h1>
            </div>
        </>
    )
}
function Rotas(){
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/Megasena" element={<Megasena />} />
            <Route path="/Lotofacil" element={<LotoFacil />} />
            <Route path="/Quina" element={<Quina />} />
            <Route path="*" element={<Erro />} />
        </Routes>
        </BrowserRouter>
    );
} export default Rotas;