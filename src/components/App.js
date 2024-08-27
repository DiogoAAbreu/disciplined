import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyle";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
