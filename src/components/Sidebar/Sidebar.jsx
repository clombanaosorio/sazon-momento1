import { useEffect } from 'react'
import styles from './Sidebar.module.css'

const ENLACES = [
  { id: 'despensa', etiqueta: 'Despensa' },
]

function Sidebar({ abierta = false, onCerrar, vistaActiva, onNavegar }) {
  useEffect(() => {
    if (!abierta) return

    const alPresionarTecla = (evento) => {
      if (evento.key === 'Escape') onCerrar?.()
    }

    document.addEventListener('keydown', alPresionarTecla)
    return () => document.removeEventListener('keydown', alPresionarTecla)
  }, [abierta, onCerrar])

  const clasesPanel = [styles.sidebar, abierta && styles.abierta]
    .filter(Boolean)
    .join(' ')

  const clasesFondo = [styles.fondo, abierta && styles.fondoVisible]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div className={clasesFondo} onClick={onCerrar} aria-hidden="true" />

      <aside
        id="sidebar"
        className={clasesPanel}
        aria-label="Menú lateral"
        inert={!abierta}
      >
        <div className={styles.cabecera}>
          <span className={styles.titulo}>Menú</span>
          <button
            type="button"
            className={styles.cerrar}
            onClick={onCerrar}
            aria-label="Cerrar menú lateral"
          >
            ✕
          </button>
        </div>

        <nav aria-label="Navegación principal">
          <ul className={styles.lista}>
            {ENLACES.map((enlace) => (
              <li key={enlace.id}>
                <button
                  type="button"
                  className={`${styles.enlace} ${
                    vistaActiva === enlace.id ? styles.activo : ''
                  }`}
                  onClick={() => onNavegar?.(enlace.id)}
                  aria-current={vistaActiva === enlace.id ? 'page' : undefined}
                >
                  {enlace.etiqueta}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar