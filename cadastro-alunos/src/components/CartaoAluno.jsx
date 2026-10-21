function CartaoAluno({ aluno }) {
    return(
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title mb-1">{aluno.nome}</h5>
                <p className="text-muted mb-2">{aluno.email}</p>
                <span className="badge text-bg-secondary me-2">{aluno.curso}</span>
                <span className={aluno.situacao === 'ativo' ? 'badge text-bg-success' : 'badge text-bg-danger'}>
                    {aluno.situacao === 'ativo' ? 'Ativo' : 'Inativo'}
                </span>
            </div>
        </div>
    )
}

export default CartaoAluno