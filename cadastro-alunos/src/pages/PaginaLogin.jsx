import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { mensagemDeErro } from '../services/api.js'
import { useAuth } from '../contexts/AuthContext.jsx'

function PaginaLogin() {
    const { usuario, entrar } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    const [enviando, setEnviando] = useState(false)

    if (usuario) {
        return <Navigate to="/" replace />
    }

    async function enviar(evento) {
        evento.preventDefault()
        setErro('')
        setEnviando(true)
        try{
            await entrar(email, senha)
            navigate('/')
        } catch (falha) {
            console.log(falha)
            setErro(mensagemDeErro(falha))
            setEnviando(false)
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <form onSubmit={enviar} className="card card-body" style={{ backgroundColor: '#2b2a2a', color: '#fff', borderColor: 'rgb(165, 8, 152)', marginTop: '100px' }}>
                    <h1 className="h3 mb-4">Entrar</h1>

                    {erro && <div className="alert alert-danger">{erro}</div>}

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
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input 
                            id="senha"
                            type="password"
                            className="form-control"
                            value={senha}
                            onChange={(evento) => setSenha(evento.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#750062', borderColor: '#750062' }} disabled={enviando}>
                        {enviando ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>

        </div>
    )

}

export default PaginaLogin