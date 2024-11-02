//crear el componente TodoApp.tsx tsrafc

import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
    //Uso de genericos en useState <string> para que el estado sea de tipo string 
   // Creamos un estado `nuevaTarea` que es de tipo `string`.
  // Esto significa que solo puede almacenar valores de tipo `string`.
  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  // Creamos un estado `listaTareas` que es de tipo `string[]` (un array de strings).
  // Esto significa que solo puede almacenar una lista de elementos de tipo `string`.
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return;
    setListaTareas(tareasAnterior => [...tareasAnterior, nuevaTarea]);
    setNuevaTarea('');
  };

  const hadleBorrarTarea = (index: number) => {
    setListaTareas(tareasAnterior => tareasAnterior.filter((_,i) => i !== index));
  }
  return (
    <div>
      <h1>Lista de tareas </h1>

      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />

        <button
          onClick={handleAddTask}
        >
          Agregar
        </button>

          <ListaTareas listaTareas={listaTareas} borrarTarea={hadleBorrarTarea}/>

      </div>
    </div>
  );
};
