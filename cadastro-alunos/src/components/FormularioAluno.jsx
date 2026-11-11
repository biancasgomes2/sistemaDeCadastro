import { useState } from "react";
import { Link } from "react-router";

function FormularioAluno({ alunoInicial, aoSalvar }) {
    const [nome, setNome] = useState(alunoInicial.nome)
    const [email, setEmail] = useState(alunoInicial.email)
    const [curso, setCurso] = useState(alunoInicial.curso)
    const [situacao, setSituacao] = useState(alunoInicial.situacao)
    const [salvando, setSalvando] = useState(false)

    async function enviar(evento) {
        evento.preventDefault()
        setSalvando(true)
        await aoSalvar({ nome, email, curso, situacao })
        setSalvando(false)
    }

    return(
        <form onSubmit={enviar} className="card card-body" style={{ backgroundColor: '#313131', color: '#fff', borderColor: 'rgb(165, 8, 152)' }}>
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

            <div className="d-flex gap-2">
                <button type="submite" className="btn btn-primary" disabled={salvando} style={{ backgroundColor: '#750062', borderColor: '#750062' }}>
                    {salvando ? 'Salvando...' : 'Salvar'}
                </button>
                <Link to="/" className="btn btn-outline-secundary" style={{ borderColor: '#6b035a', color: '#4e0543', backgroundColor: '#ad99ad' }}>
                    Cancelar
                </Link>
            </div>
        </form>
    )
}

export default FormularioAluno