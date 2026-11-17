import styles from './Footer.module.css'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>© {anio} Despensa Sazón</p>
      <p className={styles.etiqueta}>Despensa virtual · Sazón</p>
    </footer>
  )
}

export default Footer