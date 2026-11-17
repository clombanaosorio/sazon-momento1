import { useEffect, useState } from 'react'
import { despensaServicio } from '../services/despensaServicio'

export const useDespensa = () => {
  const [ingredientes, setIngredientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarDespensa = async () => {
      try {
        const datos = await despensaServicio.listarDespensa()
        setIngredientes(datos)
      } catch (err) {
        console.error('Error al cargar la despensa:', err)
        setError('No pudimos cargar tu despensa. Intenta de nuevo más tarde.')
      } finally {
        setCargando(false)
      }
    }

    cargarDespensa()
  }, [])

  return { ingredientes, cargando, error }
}