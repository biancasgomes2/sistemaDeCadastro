import { useState } from "react";
import CartaoAluno from "./components/CartaoAluno.jsx";
import FormularioAluno from "./components/FormularioAluno.jsx"

const alunosIniciais = [
  { id: 1, nome: 'Ana Souza', email: 'ana@exemplo.com', curso: 'Informática', situacao: 'ativo' },
  { id: 2, nome: 'Bruno Lima', email: 'bruno@exemplo.com', curso:'Design', situacao: 'inativo' },
]

function App() {
  const [alunos, setAlunos] = useState(alunosIniciais)
  const [busca, setBusca] = useState('')

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase()) || 
    aluno.curso.toLowerCase().includes(busca.toLowerCase())
  );

  function adicionarAluno(novoAluno) {
    const alunoComId = {...novoAluno, id: Date.now() }
    setAlunos([...alunos, alunoComId])
  }


  return(
    <div className="container py-4">
      <h1>Cadastro de Alunos</h1>
      
      <FormularioAluno  aoSalvar={adicionarAluno}/>

      <h2 className="h4">Alunos ({alunos.length})</h2>
      <input 
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      {alunosFiltrados.map((aluno) => (
        <CartaoAluno  key={aluno.id} aluno={aluno} />
      ))}
    </div>
  )
}

export default App