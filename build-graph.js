export default function buildGraph(n) {
  const board = Array.from(Array(n), () => new Array(n).fill(0));
  const graph = {};

  // For each square (vertex), list its adjacent vertices
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const adjacencyList = [];

      // Two steps in the north direction, one in the west direction
      // One step in the west direction, two in the north direction
      if (i > 1 && j > 0) {
        adjacencyList.push([i - 2, j - 1]);
      }

      // Two steps in the north direction, one in the east direction
      // One step in the east direction, two in the north direction
      if (i > 1 && j < board[i].length - 1) {
        adjacencyList.push([i - 2, j + 1]);
      }

      // Two steps in the west direction, one in the north direction
      // One step in the north direction, two in the west direction
      if (i > 0 && j > 1) {
        adjacencyList.push([i - 1, j - 2]);
      }

      // Two steps in the east direction, one in the north direction
      // One step in the north direction, two in the east direction
      if (i > 0 && j < board[i].length - 2) {
        adjacencyList.push([i - 1, j + 2]);
      }

      // Two steps in the west direction, one in the south direction
      // One step in the south direction, two in the west direction
      if (i < board.length - 1 && j > 1) {
        adjacencyList.push([i + 1, j - 2]);
      }

      // Two steps in the east direction, one in the south direction
      // One step in the south direction, two in the east direction
      if (i < board.length - 1 && j < board[i].length - 2) {
        adjacencyList.push([i + 1, j + 2]);
      }

      // Two steps in the south direction, one in the west direction
      // One step in the west direction, two in the south direction
      if (i < board.length - 2 && j > 0) {
        adjacencyList.push([i + 2, j - 1]);
      }

      // Two steps in the south direction, one in the east direction
      // One step in the east direction, two in the south direction
      if (i < board.length - 2 && j < board[i].length - 1) {
        adjacencyList.push([i + 2, j + 1]);
      }

      graph[[i, j]] = adjacencyList;
    }
  }

  return graph;
}
