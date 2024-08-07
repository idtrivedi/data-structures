/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: ['a', 'c'],
  a: ['b', 'c'],
  c: ['a', 'b'],
  q: ['r', 's', 't', 'u'],
  r: ['q'],
  s: ['q'],
  t: ['q'],
  u: ['q'],
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/

function createGraph(edges) {
  let graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
}
