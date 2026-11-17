import { useState } from 'react'
import { useTema } from './hooks/useTema'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import DespensaListado from './features/despensa/components/DespensaListado'
import styles from './App.module.css'

const App = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { esNoche, alternarTema } = useTema()

  const alternarMenu = () => setMenuAbierto((abierto) => !abierto)
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <div className={styles.app}>
      <Navbar
        menuAbierto={menuAbierto}
        onAlternarMenu={alternarMenu}
        onPerfil={() => console.log('Perfil de usuario')}
      />
      <Sidebar
        abierta={menuAbierto}
        onCerrar={cerrarMenu}
        vistaActiva="despensa"
        onNavegar={cerrarMenu}
      />

      <main className={`contenedor pagina-modulo ${styles.principal}`}>
        <h1>Despensa · Qué puedo cocinar hoy</h1>
        <DespensaListado />
      </main>

      <Footer />
      <ThemeToggle esNoche={esNoche} onAlternar={alternarTema} />
    </div>
  )
}

export default App