let a = 'tanmay';
let b = 'yamnat';
const width = 50;
const mesh = [];
var x = 0;
var y = 0;

function setup() {
  //Setting the frame Rate
  frameRate(5);

  //Creating the canvas
  createCanvas((a.length + 1) * width, (b.length + 1) * width);
  background(51);


  //Populating the mesh 2D Array
  for (let i = 0; i <= a.length; i++) {
    let meshInner = [];
    for (let j = 0; j <= b.length; j++) {
      meshInner.push(new Cell(i, j));
    }
    mesh.push(meshInner);
  }


  //Visualizing the mesh
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      mesh[i][j].renderCell();
    }
  }

  //Solving the problem
  solve();
}


//Function to solve the problem
function solve() {
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] == b[j - 1]) {
        mesh[i][j].data = mesh[i - 1][j - 1].data + 1;
        mesh[i][j].direction = 'd';
      } else {
        mesh[i][j].data = max(mesh[i][j - 1].data, mesh[i - 1][j].data);
        if (mesh[i][j - 1].data > mesh[i - 1][j].data) {
          mesh[i][j].direction = 'l';
        } else {
          mesh[i][j].direction = 'u';
        }
      }
    }
  }
}


//Function to fill th color in a rectangle
function fillColor(varX, varY) {
  if (varX == 0 || varY == 0) {
    stroke(0);
    fill(3, 133, 46);
    rect(this.x * width, this.y * width, width, width);
  } else {
    stroke(0);
    fill(51);
    rect(this.x * width, this.y * width, width, width);
  }
}

function checkSame(varX, varY) {
  if (a[varX - 1] === b[varY - 1] && (varX != 0 || varY != 0)) {
    stroke(0);
    fill(199, 196, 8);
    rect(varX * width, varY * width, width, width);
  }
}

function answerFill(varX, varY) {
  fill(0, 255, 0);
  textSize(32);
  text(mesh[varX][varY].data, varX * width + width / 2.5, varY * width + width / 1.5);
}

//Driver function
function draw() {

  if (x > a.length) {
    y++;
    x = 0;
  }

  //fills the color to the visited cells of the mesh
  fillColor(x, y);

  //Checks if the character at this position are same or not
  checkSame(x, y);
  mesh[x][y].renderData();
  x++;

  if (x >= a.length && y >= b.length) {
    answerFill(x, y);
    noLoop();
  }
}