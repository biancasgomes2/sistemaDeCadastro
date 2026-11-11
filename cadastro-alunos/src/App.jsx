import { Link, Route, Routes} from 'react-router'
import { useAuth } from './contexts/AuthContext.jsx'
import RotaProtegida from './components/RotaProtegida.jsx'
import PaginaLista from './pages/PaginaLista.jsx'
import PaginaFormulario from './pages/PaginaFormulario.jsx'
import PaginaLogin from './pages/PaginaLogin.jsx'
import './App.css'

function App() {
  const { usuario, sair } = useAuth()

  return(
    <>
        <nav className='navbar navbar-dark mb-4'style={{ backgroundColor: '#750062' }}>
          <div className='container'>
            <Link className='navbar-brand' to="/">Cadastro de Alunos</Link>
            {usuario && (
              <div className='d-flex align-items-center gap-2'>
                <span className='navbar-text'>Olá, {usuario.nome}!</span>
                <Link className='btn btn-light btn-sm' to="/novo">+ Novo aluno</Link>
                <button className='btn btn-outline-light btn-sm' onClick={sair}> Sair </button>
              </div>
            )}
          </div>
        </nav>

        <div className='container'>
          <Routes>

            <Route path="/login" element={<PaginaLogin />} />
            <Route 
              path="/" 
              element={<RotaProtegida><PaginaLista /></RotaProtegida>} 
            />

            <Route 
              path="/novo" 
              element={<RotaProtegida><PaginaFormulario key="novo" /></RotaProtegida>} 
            />

            <Route 
              path="/editar/:id" 
              element={<RotaProtegida><PaginaFormulario key="editar" /></RotaProtegida>} 
            />

            <Route path="*" element={<h1>Página não encontrada</h1>} />
            
          </Routes>
        </div>
    </>
  )
}

export default App