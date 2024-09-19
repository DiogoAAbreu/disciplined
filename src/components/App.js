import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyle";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import AuthProvider from "../context/auth";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App;
