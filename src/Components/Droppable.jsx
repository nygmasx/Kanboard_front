import React from "react";
import {useDroppable} from "@dnd-kit/core";

export const Droppable = (props) => {

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
    });

    const style  = {
        color: isOver ? 'green' : undefined,
        border: isOver ? '1px' : undefined,
    };
    return (

        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}