import { createContext, useContext, useState } from "react";
import api from "../services/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState( JSON.parse(localStorage.getItem("usuario")) );

  async function entrar(email, senha) {
    const resposta = await api.post("/login", { email, senha });
    localStorage.setItem("token", resposta.data.token);
    localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));
    setUsuario(resposta.data.usuario);
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useAuth() {
  return useContext(AuthContext);
}
