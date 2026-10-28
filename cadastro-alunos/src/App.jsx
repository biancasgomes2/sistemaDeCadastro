import { useEffect, useState } from "react";
import api, { mensagemDeErro } from './services/api.js';
import CartaoAluno from "./components/CartaoAluno.jsx";
import FormularioAluno from "./components/FormularioAluno.jsx";

function App() {
  const [alunos, setAlunos] = useState([])
  const [busca, setBusca] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {                                   
    async function buscarAlunos() {
      try{
        const resposta = await api.get('/alunos')
        setAlunos(resposta.data)
        console.log("alunos", resposta)
      } catch (falha) {
        console.log(falha)
        setErro(mensagemDeErro(falha))
      } finally {
        setCarregando(false)
      }
    }
    
    buscarAlunos()
  }, [])

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase()) || 
    aluno.curso.toLowerCase().includes(busca.toLowerCase())
  );

  async function adicionarAluno(novoAluno) {
    setErro('')
    setMensagem('')
    try{
      const resposta = await api.post('/alunos', novoAluno)
      setAlunos([...alunos, resposta.data])
      setMensagem('Aluno cadastrado com sucesso!')
      return true
    } catch (falha) {
      console.log(falha)
      setErro(mensagemDeErro(falha))
      return false
    }
  }

  function excluirAluno(id) {
    if (!window.confirm('Tem certeza que deseja excluir este aluno? ')) return;
    setAlunos(alunos?.filter((aluno) => aluno.id !== id))
  }


  return(
    <div className="container py-4">
      <h1 className="mb-4">Cadastro de Alunos</h1>

      {mensagem && <div className="alert alert-success"> {mensagem} </div>}
      
      {erro && <div className="alert alert-danger"> {erro} </div>}

      <FormularioAluno  aoSalvar={adicionarAluno}/>

      <h2 className="h4">Alunos ({alunos.length})</h2>
      <input 
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      {carregando && <p>Crregando alunos...</p>}

      {!carregando && alunos.length === 0 && !erro && (
        <p className="text-muted">Nenhum aluno cadastrado ainda.</p>
      )}

      {alunosFiltrados.map((aluno) => (
        <CartaoAluno  key={aluno.id} aluno={aluno} aoExcluir={excluirAluno}/>
      ))}
    </div>
  )
}

export default App