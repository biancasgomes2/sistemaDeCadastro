import { Link } from 'react-router'

function CartaoAluno({ aluno, aoExcluir }) {
    return(
        <div className="card mb-2" style={{ backgroundColor: '#2b2a2a', color: '#fff', borderColor: 'rgb(165, 8, 152)' }}>
            <div className="card-body d-flex justify-content-between align-items-center" >
                <div>
                    <h5 className="card-title mb-1">{aluno.nome}</h5>
                    <a href={`mailto:${aluno.email}`} className="mb-2" style={{ display: 'block', color: '#e094f3', textDecoration: 'none' }}>
                        {aluno.email}
                    </a>
                    <span className="badge me-2" style={{ backgroundColor: '#775b73', color: '#fff' }}>
                        {aluno.curso}
                    </span>
                    <span className={aluno.situacao === 'ativo' ? 'badge text-bg-success' : 'badge text-bg-danger'}>
                        {aluno.situacao === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>    
                </div>

                <div className='d-flex gap-2'>
                    <Link to={`/editar/${aluno.id}`} className='btn btn-outline-primary btn-sm'>
                        Editar
                    </Link>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => aoExcluir(aluno.id)}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartaoAluno