function ProgressBar({ valor, etiqueta }) {
  const porcentaje = Math.round(valor);

  return (
    <div className="progress">
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={porcentaje}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={etiqueta}
      >
        <div className="progress__fill" style={{ width: `${porcentaje}%` }} />
      </div>
      <span className="progress__text">{porcentaje}%</span>
    </div>
  );
}

export default ProgressBar;
