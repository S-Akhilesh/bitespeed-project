import React from "react";

import EditMessage from "./EditMessage";

export default ({
  isSelected,
  textRef,
  nodeName,
  setNodeName,
  saveHandler,
}) => {
  const onDragStart = (event, nodeType, content) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("content", content);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="sideNav">
      {isSelected ? (
        <EditMessage
          textRef={textRef}
          nodeName={nodeName}
          setNodeName={setNodeName}
        />
      ) : (
        <div
          className="msgBtn"
          onDragStart={(event) => onDragStart(event, "node", "message")}
          draggable
        >
          Message
        </div>
      )}
      <button onClick={saveHandler} className="saveBtn">
        Check Connections
      </button>
    </aside>
  );
};
