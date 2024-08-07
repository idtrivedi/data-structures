function largestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);
    let size = 1;
    for (const neighbor of graph[node]) {
      size += dfs(neighbor);
    }
    return size;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      const size = dfs(node);
      if (size > largest) {
        largest = size;
      }
    } else {
      return;
    }
  }
}
