import fs from "fs";

export function importFromCSV(nodesFile, edgesFile) {
  const nodes = fs.readFileSync(nodesFile, "utf-8")
    .split("\n").filter(Boolean)
    .map(line => {
      const [id, x, y] = line.split(",");
      return { id, x: parseFloat(x), y: parseFloat(y) };
    });

  const edges = fs.readFileSync(edgesFile, "utf-8")
    .split("\n").filter(Boolean)
    .map(line => {
      const [pair, distance] = line.split(",");
      const [from, to] = pair.split("-");
      return { from, to, distance: parseFloat(distance) };
    });

  return { nodes, edges, entry: nodes[0].id, exit: nodes[nodes.length - 1].id };
}