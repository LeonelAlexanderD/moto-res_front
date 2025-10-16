import { Route, Routes, useLocation } from "react-router-dom";
import { MenuForm } from "./Menu/MenuForm";
import { UsuarioInfo } from "./UsuarioDetalle/UsuarioInfo";
import UsuariosPage from "./UsuariosPage/UsuariosPage";

export const UsuarioMain = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isPageMain =
    currentPath === "/usuario/usuario/*" ||
    currentPath === "/usuario/usuario/" ||
    currentPath === "/usuario/usuario";

  return (
    <div>
      {!isPageMain && <MenuForm />}
      <main>
        <Routes>
          <Route path="detalle" element={<UsuarioInfo />} />
          <Route path="*" element={<UsuariosPage />} />
        </Routes>
      </main>
    </div>
  );
};
