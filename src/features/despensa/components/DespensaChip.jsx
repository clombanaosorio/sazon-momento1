import './DespensaChip.css'

const DespensaChip = ({ nombre, cantidad, unidadMedida }) => {
  return (
    <li className="despensa-chip">
      <span className="despensa-chip__nombre">{nombre}</span>
      <span className="despensa-chip__cantidad">
        {cantidad} {unidadMedida}
      </span>
    </li>
  )
}

export default DespensaChip