import styles from './Navbar.module.css'

function IconoMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function IconoUsuario() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function Navbar({ menuAbierto = false, onAlternarMenu, onPerfil }) {
  return (
    <header className={styles.navbar}>
      <button
        type="button"
        className={styles.botonIcono}
        onClick={onAlternarMenu}
        aria-label={menuAbierto ? 'Cerrar menú lateral' : 'Abrir menú lateral'}
        aria-expanded={menuAbierto}
        aria-controls="sidebar"
      >
        <IconoMenu />
      </button>

      <span className={styles.marca}>Despensa Sazón</span>

      <button
        type="button"
        className={`${styles.botonIcono} ${styles.botonPerfil}`}
        onClick={onPerfil}
        title="Perfil de usuario"
      >
        <IconoUsuario />
        <span>Usuario</span>
      </button>
    </header>
  )
}

export default Navbar