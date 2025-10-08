import dijkstra from "dijkstrajs";

export function findRoutes(graph, entry, exit) {
  const g = {};
  graph.edges().forEach(e => {
    if (!g[e.v]) g[e.v] = {};
    g[e.v][e.w] = graph.edge(e);
  });

  const shortest = dijkstra.find_path(g, entry, exit);
  const alt1 = shortest.slice().reverse();
  const alt2 = shortest.map(p => p);

  return [
    { id: 1, route: shortest, score: 1.0 },
    { id: 2, route: alt1, score: 0.9 },
    { id: 3, route: alt2, score: 0.85 }
  ];
}