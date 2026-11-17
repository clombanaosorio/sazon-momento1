import { useDespensa } from '../hooks/useDespensa'
import DespensaChip from './DespensaChip'
import './DespensaListado.css'

const DespensaListado = () => {
  const { ingredientes, cargando, error } = useDespensa()

  if (cargando) {
    return <p className="mensaje-estado">Cargando tu despensa...</p>
  }

  if (error) {
    return <p className="mensaje-estado">{error}</p>
  }

  if (ingredientes.length === 0) {
    return <p className="mensaje-estado">Tu despensa está vacía. ¡Agrega tu primer ingrediente!</p>
  }

  return (
    <section className="despensa-listado" aria-labelledby="despensa-titulo">
      <h2 id="despensa-titulo" className="despensa-listado__titulo">
        Lo que tengo en casa
        <span className="despensa-listado__contador">{ingredientes.length}</span>
      </h2>

      <ul className="despensa-listado__chips">
        {ingredientes.map((ingrediente) => (
          <DespensaChip
            key={ingrediente.id}
            nombre={ingrediente.nombre}
            cantidad={ingrediente.cantidad}
            unidadMedida={ingrediente.unidadMedida}
          />
        ))}
      </ul>
    </section>
  )
}

export default DespensaListado