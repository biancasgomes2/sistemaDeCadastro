import CartaoAluno from "./components/CartaoAluno";

function App() {
  return(
    <div className="container py-4">
      <h1>Cadastro de Alunos</h1>
      <CartaoAluno nome="Ana Souza" curso="Informática" />
      <CartaoAluno nome="Bruno Lima" curso="Design" />
      <CartaoAluno nome="Bianca Gomes" curso="Medicina" />
    </div>
  )
}

export default App