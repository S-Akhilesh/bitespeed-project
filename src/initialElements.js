import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "node",
    data: { heading: "Intent", content: "Demo 1" },
    position: { x: 50, y: 200 },
  },
  {
    id: "2",
    type: "node",
    data: { heading: "Intent", content: "Demo 2" },
    position: { x: 300, y: 100 },
  },
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    // label: "this is an edge label",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
