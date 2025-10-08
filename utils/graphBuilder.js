import { Graph } from "graphlib";

export function buildGraph(data) {
  const g = new Graph();
  data.edges.forEach(e => {
    g.setEdge(e.from, e.to, e.distance);
    g.setEdge(e.to, e.from, e.distance);
  });
  return g;
}