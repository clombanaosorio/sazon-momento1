import { useState } from 'react'
import { useDespensa } from '../hooks/useDespensa'
import DespensaChip from './DespensaChip'
import DespensaFormularioAgregar from './DespensaFormularioAgregar'
import './DespensaListado.css'

const DespensaListado = () => {
  const { ingredientes, cargando, error, agregarIngrediente } = useDespensa()
  const [formularioAbierto, setFormularioAbierto] = useState(false)

  const abrirFormulario = () => setFormularioAbierto(true)
  const cerrarFormulario = () => setFormularioAbierto(false)

  if (cargando) {
    return <p className="mensaje-estado">Cargando tu despensa...</p>
  }

  if (error) {
    return <p className="mensaje-estado">{error}</p>
  }

  return (
    <section className="despensa-listado" aria-labelledby="despensa-titulo">
      <header className="despensa-listado__encabezado">
        <h2 id="despensa-titulo" className="despensa-listado__titulo">
          Lo que tengo en casa
          <span className="despensa-listado__contador">{ingredientes.length}</span>
        </h2>

        {!formularioAbierto && (
          <button type="button" className="despensa-btn-agregar" onClick={abrirFormulario}>
            + Agregar
          </button>
        )}
      </header>

      {formularioAbierto && (
        <DespensaFormularioAgregar onAgregar={agregarIngrediente} onCerrar={cerrarFormulario} />
      )}

      {ingredientes.length === 0 ? (
        <p className="mensaje-estado">Tu despensa está vacía. ¡Agrega tu primer ingrediente!</p>
      ) : (
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
      )}
    </section>
  )
}

export default DespensaListado