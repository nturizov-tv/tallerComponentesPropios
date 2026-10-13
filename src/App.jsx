import { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitCard from "./components/HabitCard";
import StatsPanel from "./components/StatsPanel";

const DIAS_SEMANA = 7;

function App() {
  const [habitos, setHabitos] = useState([]);

  const agregarHabito = (nombre) => {
    setHabitos((actuales) => [
      ...actuales,
      { id: crypto.randomUUID(), nombre, dias: Array(DIAS_SEMANA).fill(false) },
    ]);
  };

  const alternarDia = (id, indice) => {
    setHabitos((actuales) =>
      actuales.map((h) =>
        h.id === id
          ? { ...h, dias: h.dias.map((d, i) => (i === indice ? !d : d)) }
          : h
      )
    );
  };

  const eliminarHabito = (id) => {
    setHabitos((actuales) => actuales.filter((h) => h.id !== id));
  };

  const reiniciarSemana = () => {
    setHabitos((actuales) =>
      actuales.map((h) => ({ ...h, dias: Array(DIAS_SEMANA).fill(false) }))
    );
  };

  return (
    <>
      <title>Tablero de hábitos</title>
      <main className="app">
        <header className="app__header">
          <h1>Tablero de hábitos</h1>
          <p>Marca cada día que cumplas tus hábitos de la semana.</p>
        </header>

        <StatsPanel habitos={habitos} />
        <HabitForm onAdd={agregarHabito} />

        {habitos.length === 0 ? (
          <p className="app__empty">Aún no tienes hábitos. ¡Crea el primero!</p>
        ) : (
          <>
            <section className="habit-list">
              {habitos.map((habito) => (
                <HabitCard
                  key={habito.id}
                  habito={habito}
                  onToggleDia={alternarDia}
                  onDelete={eliminarHabito}
                />
              ))}
            </section>
            <button className="app__reset" onClick={reiniciarSemana}>
              Reiniciar semana
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default App;
