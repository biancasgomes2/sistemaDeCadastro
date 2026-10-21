import CartaoAluno from "./components/CartaoAluno.jsx";

const alunos = [
  { id: 1, nome: 'Ana Souza', curso: 'Informática' },
  { id: 2, nome: 'Bruno Lima', curso:'Design' },
  { id: 3, nome: 'Carla Dias', curso:'Informática' },
  { id: 4, nome: 'Bianca Gomes', curso: 'Medicina'},
]

function App() {
  return(
    <div className="container py-4">
      <h1>Cadastro de Alunos</h1>
      <p>Total: {alunos.length} alunos</p>

      {alunos.map((aluno) => (
        <CartaoAluno key={aluno.id} nome={aluno.nome} curso={aluno.curso} />
      ))}
    </div>
  )
}

export default App