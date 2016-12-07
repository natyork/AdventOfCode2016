var stringInstructions = 'L2, L5, L5, R5, L2, L4, R1, R1, L4, R2, R1, L1, L4, R1, L4, L4, R5, R3, R1, L1, R1, L5, L1, R5, L4, R2, L5, L3, L3, R3, L3, R4, R4, L2, L5, R1, R2, L2, L1, R3, R4, L193, R3, L5, R45, L1, R4, R79, L5, L5, R5, R1, L4, R3, R3, L4, R185, L5, L3, L1, R5, L2, R1, R3, R2, L3, L4, L2, R2, L3, L2, L2, L3, L5, R3, R4, L5, R1, R2, L2, R4, R3, L4, L3, L1, R3, R2, R1, R1, L3, R4, L5, R2, R1, R3, L3, L2, L2, R2, R1, R2, R3, L3, L3, R4, L4, R4, R4, R4, L3, L1, L2, R5, R2, R2, R2, L4, L3, L4, R4, L5, L4, R2, L4, L4, R4, R1, R5, L2, L4, L5, L3, L2, L4, L4, R3, L3, L4, R1, L2, R3, L2, R1, R2, R5, L4, L2, L1, L3, R2, R3, L2, L1, L5, L2, L1, R4';
var instructions = stringInstructions.split(', ');

function numberOfBlocks (inst) {

  var position = [0,0];
  var direction = 0;
  var positionArray =['0,0'];

  for (var step of inst) {

    var dir = step.slice(0,1);
    var distance = Number(step.slice(1));

    if (dir === 'L') {
      direction += -90;
    }
    if (dir === 'R') {
      direction += 90;
    }

    var dirCase = direction%360;

    for (var i = 1; i <= distance; i++){

      switch (dirCase) {
        case (0 || -0):
          position[1] += 1;
          break;

        case (90 || -270):
          position[0] += 1;
          break;

        case (180 || -180):
          position[1] -= 1;
          break;

        case (270 || -90):
          position[0] -= 1;
          break;
      }

      var currentPosition = position.join();
      var location = positionArray.find((element) =>{
        return element === '4,0'
      });
      if (location) {
        return position;
      }
      else {
        positionArray.push(currentPosition);
      }
    }




  }
//
      console.log('===========positionArray=========',positionArray);



  // var totalDistance = Math.abs(position[0]) + Math.abs(position[1]);
  // console.log(direction%360);
  // console.log(position);
  // console.log(totalDistance);
}

var test = ['R8', 'R4', 'R4', 'R8'];
// numberOfBlocks(instructions);
console.log(numberOfBlocks(test));


function location(element) {
  return element === '0,0';
}

