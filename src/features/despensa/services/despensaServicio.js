const INGREDIENTES_INICIALES = [
  { id: 1, nombre: 'Arroz', cantidad: 2, unidadMedida: 'kg', fechaCaducidad: '2027-05-10', idProducto: 101, idDespensa: 1 },
  { id: 2, nombre: 'Huevos', cantidad: 12, unidadMedida: 'und', fechaCaducidad: '2026-11-30', idProducto: 102, idDespensa: 1 },
  { id: 3, nombre: 'Limón', cantidad: 5, unidadMedida: 'und', fechaCaducidad: '2026-11-24', idProducto: 103, idDespensa: 1 },
  { id: 4, nombre: 'Piña', cantidad: 1, unidadMedida: 'und', fechaCaducidad: '2026-11-21', idProducto: 104, idDespensa: 1 },
  { id: 5, nombre: 'Azúcar', cantidad: 500, unidadMedida: 'g', fechaCaducidad: '2027-08-15', idProducto: 105, idDespensa: 1 },
  { id: 6, nombre: 'Jamón Pietrán', cantidad: 250, unidadMedida: 'g', fechaCaducidad: '2026-11-28', idProducto: 106, idDespensa: 1 },
  { id: 7, nombre: 'Salchichas Zenú', cantidad: 1, unidadMedida: 'paquete', fechaCaducidad: '2026-12-12', idProducto: 107, idDespensa: 1 },
  { id: 8, nombre: 'Pasta Doria', cantidad: 500, unidadMedida: 'g', fechaCaducidad: '2027-03-01', idProducto: 108, idDespensa: 1 },
  { id: 9, nombre: 'Café Sello Rojo', cantidad: 1, unidadMedida: 'bolsa', fechaCaducidad: '2027-02-20', idProducto: 109, idDespensa: 1 },
]

const RETARDO_SIMULADO_MS = 600

let despensaEnMemoria = [...INGREDIENTES_INICIALES]

const esperar = (milisegundos) =>
  new Promise((resolve) => setTimeout(resolve, milisegundos))

const generarId = () => {
  const ids = despensaEnMemoria.map((item) => item.id)
  return Math.max(0, ...ids) + 1
}

export const despensaServicio = {
  async listarDespensa() {
    await esperar(RETARDO_SIMULADO_MS)
    return [...despensaEnMemoria]
  },

  async agregarItem({ idIngrediente, nombreItem, cantidad, unidadMedida }) {
    await esperar(RETARDO_SIMULADO_MS)

    const nuevoItem = {
      id: generarId(),
      nombre: nombreItem.trim(),
      cantidad: Number(cantidad),
      unidadMedida,
      fechaCaducidad: null,
      idProducto: Number(idIngrediente),
      idDespensa: 1,
    }

    despensaEnMemoria = [...despensaEnMemoria, nuevoItem]
    return nuevoItem
  },
}