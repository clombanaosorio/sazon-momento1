
import { useDespensa } from './features/despensa/hooks/useDespensa'
const App = () => {
    const { ingredientes, cargando, error } = useDespensa()
    console.log({ ingredientes, cargando, error })


  return (
    <main className="contenedor pagina-modulo">
      <h1>Despensa · Qué puedo cocinar hoy</h1>
      
    </main>
  )
}

export default App
