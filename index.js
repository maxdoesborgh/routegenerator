import express from "express";
import { Graph } from "graphlib";
import dijkstra from "dijkstrajs";

const app = express();
app.use(express.json());

// eenvoudige testgraaf
const graph = {
  A: { B: 5, C: 10 },
  B: { A: 5, C: 3 },
  C: { A: 10, B: 3 }
};

app.get("/", (req, res) => {
  res.send("Routegenerator actief");
});

app.get("/route", (req, res) => {
  const path = dijkstra.find_path(graph, "A", "C");
  res.json({ path });
});

app.listen(3000, "0.0.0.0", () => console.log("Server draait op poort 3000"));
