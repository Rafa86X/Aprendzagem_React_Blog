import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index.js";
import AboutMe from "./pages/aboutMe.js/index.js";
import Menu from "./components/menu/menu.js";
import Rodape from "components/rodape/index.js";
import PaginaPadrao from "components/paginaPadrao/index.js";

function AppRoutes() {
  return (
          <BrowserRouter>
            <Menu/>
            <Routes>
              <Route path="/" element={<PaginaPadrao/>}> 
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
              </Route>
              <Route path="*" element={<p>Pagina não encontrada</p>}/>
            </Routes>
            <Rodape/>

          </BrowserRouter>
  );
}

export default AppRoutes;
