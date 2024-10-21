import buildGraph from "./build-graph.js";
import findShortestPath from "./shortest-path.js";

const start = [0, 0];
const target = [7, 7];

// Find the shortest path where a knight could move on an 8 x 8
// chess board from one square to another.
findShortestPath(buildGraph(8), start, target);
