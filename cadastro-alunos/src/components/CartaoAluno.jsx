function CartaoAluno(props) {
    return(
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text mb-0">{props.curso}</p>
            </div>
        </div>
    )
}

export default CartaoAluno