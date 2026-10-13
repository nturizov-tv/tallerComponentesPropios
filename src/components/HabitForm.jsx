import { useActionState } from "react";

function HabitForm({ onAdd }) {
  const [error, submitAction, isPending] = useActionState(
    (_estadoPrevio, formData) => {
      const nombre = formData.get("habito").trim();

      if (!nombre) {
        return "Escribe el nombre del hábito.";
      }
      if (nombre.length > 40) {
        return "El nombre debe tener máximo 40 caracteres.";
      }

      onAdd(nombre);
      return null;
    },
    null
  );

  return (
    <form action={submitAction} className="habit-form">
      <div className="habit-form__row">
        <input
          type="text"
          name="habito"
          placeholder="Nuevo hábito (ej. Leer 20 minutos)"
          autoComplete="off"
        />
        <button type="submit" disabled={isPending}>
          Agregar
        </button>
      </div>
      {error && <p className="habit-form__error">{error}</p>}
    </form>
  );
}

export default HabitForm;
