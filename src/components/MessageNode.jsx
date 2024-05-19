import React, { memo } from "react";

import { Handle, Position } from "reactflow";
import "./MessageNode.css";

const Node = ({ data, selected }) => {
  return (
    <div>
      <div className={`customContainer ${selected ? "selected" : ""}`}>
        <div className="customTitle">{data.heading}</div>
        <div className="contentWrapper">{data.content}</div>
      </div>
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="target" position={Position.Left} id="a" />
    </div>
  );
};

export default memo(Node);
