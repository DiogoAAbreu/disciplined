import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyle";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import AuthProvider from "../context/auth";
import HabitosProvider from "../context/habitos";
import Hoje from "./Hoje/Hoje";
import HojeProvider from "../context/hoje";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AuthProvider>
        <HabitosProvider>
          <HojeProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/historico" element={<Historico />} />
              <Route path="/hoje" element={<Hoje />} />
            </Routes>
          </HojeProvider>
        </HabitosProvider>
      </AuthProvider>

    </BrowserRouter >
  );
}

export default App;
