class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
}
let myGraph = new Graph();
myGraph.addVertex("A");
console.log(myGraph);
console.log(myGraph.addVertex("A"))
