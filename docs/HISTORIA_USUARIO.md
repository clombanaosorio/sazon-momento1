# Historia de usuario común: Despensa Sazón

## Historia de Usuario 3.1.1: Renderizado inicial de la despensa personal
- **Código de Rama:** `feature/despensa/G3-DES-F01-listado`
- **Descripción del entregable:** Componente `DespensaListado` que obtiene los ingredientes que el usuario tiene en casa mediante el hook `useDespensa` y los muestra como chips reutilizables (`DespensaChip`).
- **Criterios de aceptación:**
  1. `useDespensa` consume `despensaServicio.listarDespensa()` dentro de `useEffect` con `async/await` y `try/catch`, y gestiona los estados de carga, error y despensa vacía.
  2. Marcado semántico con `<section>`, `<ul>` y `<li>`, renderizado con `.map()` y `key` única, y clases prefijadas `.despensa-chip`.
  3. Soporte de tildes y eñes con `<meta charset="UTF-8">` y archivos guardados en UTF-8.
  4. Diseño responsive con `flex-wrap` y media queries, usando las variables corporativas de `sazon.css`.

## Historia de Usuario 3.1.2: Botón y formulario interactivo para agregar ingredientes
- **Código de Rama:** `feature/despensa/G3-DES-F02-agregar-btn`
- **Descripción del entregable:** Botón "+ Agregar" que despliega el componente `DespensaFormularioAgregar` para incorporar un nuevo ingrediente a la despensa. La lista de chips se actualiza sin recargar la página.
- **Criterios de aceptación:**
  1. Botón con la clase prefijada `.despensa-btn-agregar` que abre y cierra el formulario mediante un estado local (`useState`).
  2. Formulario semántico con `<form>`, `<fieldset>`, `<legend>`, `<label htmlFor>` y validación `required`, con inputs controlados.
  3. Los controles usan los nombres del backend: `idIngrediente`, `nombreItem`, `cantidad` y `unidadMedida`.
  4. `useDespensa` expone `agregarIngrediente`, que invoca `await despensaServicio.agregarItem(...)` y actualiza la lista de forma inmutable en memoria.

## Ubicación de los componentes

### Layout común del equipo
| Componente | Ruta | Responsabilidad |
|---|---|---|
| `Navbar` | `src/components/Navbar/` | Barra superior con botón de menú y botón de perfil de usuario a la derecha |
| `Sidebar` | `src/components/Sidebar/` | Barra lateral izquierda desplegable en verde hoja |
| `Footer` | `src/components/Footer/` | Pie de página: cacao sobre marfil, marfil sobre verde Nutresa |
| `ThemeToggle` | `src/components/ThemeToggle/` | Conmutador día/noche, abajo a la derecha |

### Módulo Despensa
| Componente | Ruta | Responsabilidad |
|---|---|---|
| `DespensaListado` | `src/features/despensa/components/` | Tarjeta con título, contador, botón agregar y lista de chips; maneja los estados de carga, error y vacío |
| `DespensaChip` | `src/features/despensa/components/` | Etiqueta visual de un ingrediente con su cantidad y unidad (HU 3.1.1) |
| `DespensaFormularioAgregar` | `src/features/despensa/components/` | Formulario semántico para agregar un ingrediente (HU 3.1.2) |

## Hooks, servicios y estilos
| Archivo | Responsabilidad |
|---|---|
| `src/hooks/useTema.js` | Modo día/noche con `data-theme` en `<html>`, guardado en `localStorage` |
| `src/features/despensa/hooks/useDespensa.js` | Estado de los ingredientes, carga, error y función `agregarIngrediente` |
| `src/features/despensa/services/despensaServicio.js` | Datos estáticos alineados al modelo `ItemDespensa`; `listarDespensa()` y `agregarItem()` asíncronos con almacenamiento en memoria |
| `src/styles/sazon.css` | Kit de marca oficial: paleta, tipografías y modos día/noche |

## Estilos
- Layout común: CSS Modules (`*.module.css`) por componente.
- Módulo Despensa: CSS por componente con clases prefijadas `.despensa-`.
- Tipografías: títulos Poppins, cuerpo Inter, etiquetas IBM Plex Mono.
- Modo día: fondo marfil. Modo noche: fondo verde Nutresa.

## Estructura
```text
src/
├── App.jsx
├── App.module.css
├── main.jsx
├── assets/
├── components/
│   ├── Footer/
│   ├── Navbar/
│   ├── Sidebar/
│   └── ThemeToggle/
├── hooks/
│   └── useTema.js
├── styles/sazon.css
└── features/despensa/
    ├── components/
    │   ├── DespensaChip.jsx / .css
    │   ├── DespensaListado.jsx / .css
    │   └── DespensaFormularioAgregar.jsx / .css
    ├── hooks/useDespensa.js
    └── services/despensaServicio.js
```

## Pendientes
- HU 3.1.3: validación y persistencia de los ingredientes (rama `feature/despensa/G3-DES-F03-persistencia`).
- El botón de perfil de usuario aún no abre ninguna vista.