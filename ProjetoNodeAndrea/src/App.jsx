// Componente filho que recebe props
function Titulo(props) {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>
}

// Componente principal
export default function App() {
  return (
    <>
      <Titulo texto="Hello World!" cor="pink" />
      <Titulo texto="Estamos aprendendo React" cor="grey" />
      <Titulo texto="Props deixam o componente mais dinâmico" cor="orange" />
    </>
  )
}
