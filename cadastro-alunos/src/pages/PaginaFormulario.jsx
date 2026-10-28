import { useState } from "react";
import { useNavigate } from "react-router"
import api, { mensagemDeErro } from "../services/api.js"
import FormularioAluno from "../components/FormularioAluno.jsx";

const alunoVazio = { nome: '', email: '', curso: '', situacao: 'ativo'}

function PaginaFormulario() {
    const navigate = useNavigate()
    const [erro, setErro] = useState('')

    async function salvar(dados) {
        setErro('')
        try{
            await api.post('/alunos', dados)
            navigate('/', { state: { mensagem: 'Aluno cadastrado com sucesso!' } })
        } catch (falha) {
            console.log(falha)
            setErro(mensagemDeErro(falha))
        }
    }

    return (
        <>

            <h1 className="h3 mb-4">Novo aluno</h1>
            {erro && <div className="alert alert-danger">{erro}</div>}
            <FormularioAluno alunoInicial={alunoVazio} aoSalvar={salvar} />
        </>
    )
}

export default PaginaFormulario