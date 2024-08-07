/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/

function hasPathDFS(graph, start, dest) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (node == dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        stack.push(neighbor);
      }
    }
  }
  return false;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};
// console.log(hasPathDFS(graph, "a", "e"));

function hasPathBFS(graph, start, dest) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (node == dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
  return false;
}
console.log(hasPathBFS(graph, "a", "d"));
