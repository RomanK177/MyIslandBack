exports.calculateMaxIsland = calculateMaxIsland;

function calculateMaxIsland(state) {
  let board = state;
  let graph = new Graph();
  board.forEach((row) => {
    row.forEach((cell) => {
      let node = new Node(cell);
      graph.addNode(node);
    });
  });

  graph.nodes.forEach((node) => {
    let rowNum = node.row;
    let colNum = node.col;
    //    Up----
    let upEdge = graph.nodes.find((node) => {
      return node.row === rowNum + 1 && node.col === colNum;
    });
    if (upEdge) {
      node.addEdge(upEdge);
    }
    //Right
    let rightEdge = graph.nodes.find((node) => {
      return node.row === rowNum && node.col === colNum + 1;
    });
    if (rightEdge) {
      node.addEdge(rightEdge);
    }
    //Down
    let downEdge = graph.nodes.find((node) => {
      return node.row === rowNum - 1 && node.col === colNum;
    });
    if (downEdge) {
      node.addEdge(downEdge);
    }
    //   Left
    let leftEdge = graph.nodes.find((node) => {
      return node.row === rowNum && node.col === colNum - 1;
    });
    if (leftEdge) {
      node.addEdge(leftEdge);
    }
  });
  let islands = [];
  graph.nodes.forEach((node) => {
    if (node.isLand && node.searched === false) {
      islands.push(countLandAround(node));
    }
  });
  let max = islands.reduce(function (a, b) {
    return Math.max(a, b);
  }, 0);
  return max;
}

function countLandAround(node) {
  let landAround = 0;
  node.edges.forEach((edge) => {
    if (edge.isLand && edge.searched === false) {
      landAround++;
      edge.searched = true;
      landAround += countLandAround(edge);
    }
  });
  return landAround;
}

// Node -----------

function Node(cell) {
  this.row = cell.row;
  this.col = cell.col;
  this.isLand = cell.isLand;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge = function (neighbor) {
  this.edges.push(neighbor);
};

// Graph-------------------
function Graph() {
  this.nodes = [];
  this.graph = {};
}

Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
};
