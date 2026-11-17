import { useEffect, useState } from 'react'

const CLAVE_TEMA = 'sazon-tema'

function leerTemaGuardado() {
  try {
    return localStorage.getItem(CLAVE_TEMA) === 'noche' ? 'noche' : 'dia'
  } catch {
    return 'dia'
  }
}

export function useTema() {
  const [tema, setTema] = useState(leerTemaGuardado)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    try {
      localStorage.setItem(CLAVE_TEMA, tema)
    } catch {
      /* sin almacenamiento disponible: el tema sigue funcionando */
    }
  }, [tema])

  const alternarTema = () =>
    setTema((actual) => (actual === 'dia' ? 'noche' : 'dia'))

  return { tema, alternarTema, esNoche: tema === 'noche' }
}