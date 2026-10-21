function CartaoAluno({nome, curso}) {
    return(
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text mb-0">{curso}</p>
            </div>
        </div>
    )
}

export default CartaoAluno