var marks = [30, 40, 45, 35];

function marksAverage() {
  var sum = 0;
  for (var i = 0; i < marks.length; i = i + 1) {
    sum = sum + marks[i];
  }
  var averageMarks = sum / marks.length;
  console.log(averageMarks);
}

function setup() {
  createCanvas(400, 400);
  marksAverage();
}

function draw() {
  background(150);
}
