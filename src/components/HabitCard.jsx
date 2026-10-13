import ProgressBar from "./ProgressBar";

const ETIQUETAS = ["L", "M", "X", "J", "V", "S", "D"];

function HabitCard({ habito, onToggleDia, onDelete }) {
  const hechos = habito.dias.filter(Boolean).length;

  return (
    <article className="habit-card">
      <div className="habit-card__top">
        <h2>{habito.nombre}</h2>
        <button
          className="habit-card__delete"
          onClick={() => onDelete(habito.id)}
          aria-label={`Eliminar ${habito.nombre}`}
        >
          ✕
        </button>
      </div>

      <div className="habit-card__days">
        {habito.dias.map((hecho, indice) => (
          <button
            key={indice}
            className={`day ${hecho ? "day--done" : ""}`}
            aria-pressed={hecho}
            onClick={() => onToggleDia(habito.id, indice)}
          >
            {ETIQUETAS[indice]}
          </button>
        ))}
      </div>

      <ProgressBar valor={(hechos / 7) * 100} etiqueta={`Progreso de ${habito.nombre}`} />
    </article>
  );
}

export default HabitCard;
