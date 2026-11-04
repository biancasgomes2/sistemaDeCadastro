import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import api, { mensagemDeErro } from "../services/api.js"
import CartaoAluno from "../components/CartaoAluno.jsx";

function PaginaLista() {
    const location = useLocation()
    const [alunos, setAlunos] = useState([])
    const [busca, setBusca] = useState('')
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')
    const [mensagem, setMensagem] = useState(location.state?.mensagem || '')

    useEffect(() => {
        async function buscarAlunos() {
            try {
                const resposta = await api.get('/alunos')
                setAlunos(resposta.data)
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

  async function excluirAluno(id) {
    if (!window.confirm('Tem certeza que deseja excluir este aluno? ')) return;
    setErro('')
    setMensagem('')
    try{
      await api.delete(`/alunos/${id}`)
      setAlunos(alunos?.filter((aluno) => aluno.id !== id))  
      setMensagem('Aluno excluído.')
    } catch (falha) {
      console.log(falha)
      setErro(mensagemDeErro(falha))
    }
  }

  return (
    <>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        {erro && <div className="alert alert-danger">{erro}</div>}

        <h1 className="h3">Alunos ({alunos.length})</h1>
        <input
            className="form-control mb-3"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
        />

        {carregando && <p>Carregando alunos...</p>}

        {!carregando && alunos.length === 0 && !erro && (
            <p className="text-muted">Nenhum aluno cadastrado ainda.</p>
        )}

        {alunosFiltrados.map((aluno) => (
            <CartaoAluno key={aluno.id} aluno={aluno} aoExcluir={excluirAluno} />
        ))}
    </>
  )
}

export default PaginaLista