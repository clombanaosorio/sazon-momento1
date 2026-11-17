import { useState } from 'react'
import './DespensaFormularioAgregar.css'

const VALORES_INICIALES = {
  idIngrediente: '',
  nombreItem: '',
  cantidad: '',
  unidadMedida: 'und',
}

const UNIDADES_MEDIDA = ['und', 'g', 'kg', 'ml', 'l', 'paquete', 'bolsa']

const DespensaFormularioAgregar = ({ onAgregar, onCerrar }) => {
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [enviando, setEnviando] = useState(false)
  const [mensajeError, setMensajeError] = useState('')

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setEnviando(true)
    setMensajeError('')

    const agregado = await onAgregar(valores)
    setEnviando(false)

    if (agregado) {
      onCerrar()
    } else {
      setMensajeError('No pudimos agregar el ingrediente. Intenta de nuevo.')
    }
  }

  return (
    <form className="despensa-formulario" onSubmit={manejarEnvio}>
      <fieldset className="despensa-formulario__grupo" disabled={enviando}>
        <legend className="despensa-formulario__titulo">Agregar ingrediente</legend>

        <div className="despensa-formulario__campos">
          <div className="despensa-formulario__campo">
            <label htmlFor="nombreItem">Nombre del ingrediente</label>
            <input
              id="nombreItem"
              name="nombreItem"
              type="text"
              placeholder="Ej: Chocolate Corona"
              value={valores.nombreItem}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="despensa-formulario__campo">
            <label htmlFor="idIngrediente">Código del ingrediente</label>
            <input
              id="idIngrediente"
              name="idIngrediente"
              type="number"
              min="1"
              placeholder="Ej: 110"
              value={valores.idIngrediente}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="despensa-formulario__campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              id="cantidad"
              name="cantidad"
              type="number"
              min="0.01"
              step="any"
              placeholder="Ej: 2"
              value={valores.cantidad}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="despensa-formulario__campo">
            <label htmlFor="unidadMedida">Unidad de medida</label>
            <select
              id="unidadMedida"
              name="unidadMedida"
              value={valores.unidadMedida}
              onChange={manejarCambio}
              required
            >
              {UNIDADES_MEDIDA.map((unidad) => (
                <option key={unidad} value={unidad}>
                  {unidad}
                </option>
              ))}
            </select>
          </div>
        </div>

        {mensajeError && <p className="despensa-formulario__error">{mensajeError}</p>}

        <div className="despensa-formulario__acciones">
          <button
            type="button"
            className="despensa-formulario__boton despensa-formulario__boton--cancelar"
            onClick={onCerrar}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="despensa-formulario__boton despensa-formulario__boton--guardar"
          >
            {enviando ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default DespensaFormularioAgregar