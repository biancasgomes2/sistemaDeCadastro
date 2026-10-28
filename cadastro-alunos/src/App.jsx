import { Link, Route, Routes} from 'react-router'
import PaginaLista from './pages/PaginaLista.jsx'
import PaginaFormulario from './pages/PaginaFormulario.jsx'

function App() {
  return(
    <>
      <nav className='navbar navbar-dark bg-primary mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to="/">Cadastro de Alunos</Link>
          <Link className='btn btn-light btn-sm' to="/novo">+ Novo aluno</Link>
        </div>
      </nav>

      <div className='container'>
        <Routes>
          <Route path='/' element={<PaginaLista/>} />
          <Route path='/novo' element={<PaginaFormulario />} />
          <Route path='*' element={<p>Página não encontrada. </p>} />
        </Routes>
      </div>
    </>
  )
}

export default App