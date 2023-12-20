import {DndContext} from "@dnd-kit/core";
import {Droppable} from "./Components/Droppable.jsx";
import {Draggable} from "./Components/Draggable.jsx";
import {useState} from "react";
import './App.css'

function App() {

    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable>Drag Me</Draggable>
    )

  return (
    <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
            {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
    </DndContext>
  );

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        } else {
            setIsDropped(false)
        }
    }
}

export default App
