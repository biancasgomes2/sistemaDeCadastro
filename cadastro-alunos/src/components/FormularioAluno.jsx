import { useState } from "react";

function FormularioAluno({ aoSalvar }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')
    const [situacao, setSituacao] = useState('')

    function enviar(evento) {
        evento.preventDefault()
        aoSalvar({ nome, email, curso, situacao })
        setNome('')
        setEmail('')
        setCurso('')
        setSituacao('ativo')
    }

    return(
        <form onSubmit={enviar} className="card card-body mb-4">
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                    id="nome"
                    className="form-control"
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input 
                    id="email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="curso" className="form-label">Curso</label>
                <input 
                    id="curso"
                    className="form-control"
                    value={curso}
                    onChange={(evento) => setCurso(evento.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="situacao" className="form-label">Situação</label>
                <select
                    id="situacao"
                    className="form-select"
                    value={situacao}
                    onChange={(evento) => setSituacao(evento.target.value)}
                >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <button type="submite" className="btn btn-primary">Salvar</button>
        </form>
    )
}

export default FormularioAluno