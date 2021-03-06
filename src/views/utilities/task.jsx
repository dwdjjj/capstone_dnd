import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskContainer } from "./styles";

export default function Task({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {item.content}
        </TaskContainer>
      )}
    </Draggable>
  );
}
