import ProgressBar from "./ProgressBar";

function StatsPanel({ habitos }) {
  const total = habitos.length;
  const hechos = habitos.reduce((suma, h) => suma + h.dias.filter(Boolean).length, 0);
  const posibles = total * 7;
  const porcentaje = posibles === 0 ? 0 : (hechos / posibles) * 100;

  let mejor = null;
  for (const h of habitos) {
    const cantidad = h.dias.filter(Boolean).length;
    if (cantidad > 0 && (!mejor || cantidad > mejor.cantidad)) {
      mejor = { nombre: h.nombre, cantidad };
    }
  }

  return (
    <section className="stats">
      <div className="stats__item">
        <strong>{total}</strong>
        <span>Hábitos</span>
      </div>
      <div className="stats__item">
        <strong>{hechos}</strong>
        <span>Días cumplidos</span>
      </div>
      <div className="stats__item">
        <strong>{mejor ? mejor.nombre : "—"}</strong>
        <span>Mejor hábito</span>
      </div>
      <div className="stats__progress">
        <ProgressBar valor={porcentaje} etiqueta="Progreso semanal total" />
      </div>
    </section>
  );
}

export default StatsPanel;
