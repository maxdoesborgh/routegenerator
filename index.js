import { importFromCSV } from "./utils/importer.js";
import { buildGraph } from "./utils/graphBuilder.js";
import { findRoutes } from "./algorithms/pathfinder.js";

const data = importFromCSV("data/nodes.csv", "data/edges.csv");
const graph = buildGraph(data);
const routes = findRoutes(graph, data.entry, data.exit);

console.log("=== Route-opties ===");
console.log(routes);