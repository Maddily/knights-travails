/**
 * Find the shortest path between two vertices in a graph.
 *
 * @param {object} graph - An adjacency list representation of a graph.
 * In this case, the graph represents an 8 x 8 chess board.
 * @param {Array} start - The start coordinates/vertex. Example: [0, 0]
 * @param {Array} target - The target vertex
 */
export default function findShortestPath(graph, start, target) {
  const queue = [];
  /**
   * An object that will store the parent vertex for each visited vertex.
   * Example: { vertex: parent }
   * When I explore each vertex, I don't just move to the next one—I also
   * record where I came from at each step. "I got to square X from square Y."
   * It's like a map that will help later to trace back the steps I took
   * to reach the target vertex.
   * In other words, it's to keep track of where I came from.
   */
  const parents = {};

  // Enqueue the starting vertex and give it a null parent.
  queue.push(start);
  parents[start] = null;

  while (queue.length > 0) {
    const vertex = queue.shift();

    /**
     * If the dequeued vertex is the target vertex,
     * use the parents object to find the shortest path.
     */
    if (vertex.toString() === target.toString()) {
      const path = reconstructPath(parents, target);

      console.log(`You made it in ${path.length} moves!  Here's your path:`);

      for (const square of path) {
        console.log(`[${square.toString()}]`);
      }
      return;
    }

    // If not already queued, enqueue the neighbors of the current vertex.
    for (const neighbor of graph[vertex]) {
      /**
       * Checking for the existence of a neighbor in the queue wouldn't be right
       * since vertices visited are taken off the queue, whereas the parents object
       * keeps track of all visited/explored vertices.
       */
      if (!(neighbor in parents)) {
        parents[neighbor] = vertex;
        queue.push(neighbor);
      }
    }
  }

  console.log(`Can't move your knight from ${start} to ${target}`);
}

/**
 * Reconstruct the path between two given vertices.
 *
 * @param {object} parents - A mapping of vertices and their parent vertices.
 * The parents object helps trace the steps I took backward.
 * It shows me, “I got to the target from this square, and I got
 * to that square from this one,” all the way back to the start.
 * This is how I can reconstruct the shortest path.
 * @param {Array} target - The target vertex
 * @returns - An array of vertices representing the path from the start
 * vertex to the target vertex
 */
function reconstructPath(parents, target) {
  const path = [];

  let vertex = target;
  while (vertex !== null) {
    path.unshift(vertex);
    vertex = parents[vertex];
  }

  return path;
}
