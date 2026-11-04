import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import api, { mensagemDeErro } from "../services/api.js"
import FormularioAluno from "../components/FormularioAluno.jsx";

const alunoVazio = { nome: '', email: '', curso: '', situacao: 'ativo'}

function PaginaFormulario() {
    const { id } = useParams()
    const navigate = useNavigate()
    const editando = Boolean(id)
    console.log("qualquercoisa", id)
    const [aluno, setAluno] = useState(editando ? null : alunoVazio)
    const [erro, setErro] = useState('')

    useEffect(() => {
        if (!id) return

        async function buscarAluno() {
            try{
                const resposta = await api.get(`/alunos/${id}`)
                setAluno(resposta.data)
            } catch (falha) {
                console.log(falha)
                setErro(mensagemDeErro(falha))
            }
        }
        
        buscarAluno()
    }, [id])

    async function salvar(dados) {
        setErro('')
        try{
            if(editando) {
                await api.put(`/alunos/${id}` , dados)
            } else {
                await api.post('/alunos', dados)
            }
            const texto = editando ? 'Aluno atualizado com sucesso!' : 'Aluno cadastrado com sucesso!'
            navigate('/', { state: { mensagem: texto } })
        } catch (falha) {
            console.log(falha)
            setErro(mensagemDeErro(falha))
        }
    }

    return (
        <>
            <h1 className="h3 mb-4">{editando ? 'Editar aluno' : 'Novo aluno'}</h1>

            {erro && <div className="alert alert-danger">{erro}</div>}

            {aluno === null && !erro && <p>Carregando aluno...</p>}

            {aluno !== null && <FormularioAluno alunoInicial={alunoVazio} aoSalvar={salvar} />}
        </>
    )
}

export default PaginaFormulario