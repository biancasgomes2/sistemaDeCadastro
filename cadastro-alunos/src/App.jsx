import { useState } from "react";
import CartaoAluno from "./components/CartaoAluno.jsx";

const alunos = [
  { id: 1, nome: 'Ana Souza', curso: 'Informática' },
  { id: 2, nome: 'Bruno Lima', curso:'Design' },
  { id: 3, nome: 'Carla Dias', curso:'Informática' },
  { id: 4, nome: 'Bianca Gomes', curso: 'Medicina'},
]

function App() {
  const [busca, setBusca] = useState('')

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase()) || 
    aluno.curso.toLowerCase().includes(busca.toLowerCase())
  );


  return(
    <div className="container py-4">
      <h1>Cadastro de Alunos</h1>
      
      <input 
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      <p>Mostrando {alunosFiltrados.length} de {alunos.length} alunos</p>

      {alunosFiltrados.map((aluno) => (
        <CartaoAluno  key={aluno.id} nome={aluno.nome} curso={aluno.curso}/>
      ))}
    </div>
  )
}

export default App