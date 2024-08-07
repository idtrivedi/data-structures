/**
 * Leetcode #323
 */

var countComponents = function (n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node) {
    if (visited.has(node.toString())) {
      return;
    }
    visited.add(node.toString());
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  const visited = new Set();
  let count = 0;
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
};
