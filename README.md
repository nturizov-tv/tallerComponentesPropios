# Tablero de Hábitos

Aplicación web para llevar el control semanal de hábitos: se crean hábitos, se marca cada día cumplido (lunes a domingo) y se visualiza el progreso individual y global con barras de progreso. Diseño minimalista en tonos mate con sombras suaves.

## Autor

- **Nombre:** Nashely Turizo Villareal
- **Código:** 0192761

## Tecnologías

- [React 19](https://react.dev/): biblioteca para construir la interfaz
- [Vite](https://vite.dev/): herramienta de desarrollo y empaquetado
- CSS puro: estilos propios, sin librerías de componentes

## ¿Por qué React 19?

Elegí React 19 porque incorpora funciones que simplifican tareas comunes y que se aplican directamente en este proyecto:

- **`useActionState`**: el formulario (`HabitForm`) maneja su validación, el mensaje de error y el estado de envío sin `onSubmit` ni varios `useState`.
- **Etiquetas de documento dentro de componentes**: el `<title>` de la página se declara directamente en `App.jsx`, sin librerías externas.
- **Acciones en formularios**: el atributo `action` de `<form>` recibe una función, lo que hace el código más corto y legible.

## Componentes creados

| Componente | Archivo | Función |
|---|---|---|
| `HabitForm` | `src/components/HabitForm.jsx` | Formulario para crear hábitos, con validación mediante `useActionState`. |
| `HabitCard` | `src/components/HabitCard.jsx` | Tarjeta de un hábito con sus 7 días marcables, barra de progreso y botón de eliminar. |
| `ProgressBar` | `src/components/ProgressBar.jsx` | Barra de progreso reutilizable (se usa en cada tarjeta y en el panel general). |
| `StatsPanel` | `src/components/StatsPanel.jsx` | Panel con el total de hábitos, días cumplidos, mejor hábito y progreso semanal global. |

El estado de los hábitos vive en `App.jsx` y se comparte con los componentes mediante *props*.

## Estructura del proyecto

```
tablero-habitos/
├── src/
│   ├── components/
│   │   ├── HabitForm.jsx
│   │   ├── HabitCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── StatsPanel.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Instalación y uso

Requisitos: Node.js 20.19 o superior y Git.

```bash
git clone https://github.com/nturizov-tv/tablero-habitos.git
cd tablero-habitos
npm install
npm run dev
```

Luego abre `http://localhost:5173/` en el navegador.

## Lo que aprendí de la documentación

Leí la documentación oficial en [react.dev](https://react.dev/) y estos fueron los conceptos que apliqué:

- **Componentes y props**: dividir la interfaz en piezas reutilizables que reciben datos desde el componente padre.
- **Estado con `useState`**: guardar los hábitos y actualizarlos de forma inmutable.
- **Renderizado de listas**: usar `map` con una `key` única en cada elemento.
- **Elevar el estado**: mantener el estado en `App.jsx` y pasar funciones como props a los hijos.
- **Novedades de React 19**: `useActionState` para formularios y `<title>` dentro de componentes.
