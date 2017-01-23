// since this will be command line, we can't rely on DOM

// We will us stdin's readable stream to get input
// and stdout to write results
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

// Track turn so we can evaluate to makr and player message
let turn = 1;

// We will evaluate marks to add vals to board
// We will have 0 index be empty string to remove vals
const mark = ['', 'X', 'O'];
// We want to have a player tracker so we can notify whose turn it is
// we will concat with tracker to make sure we put in proper val
const player = `player${turn}`;

// we want a message to tell us whose turn it is
// AND whether they are an x or o
const message = `It is ${player}'s turn. Play you're ${mark[turn]}, ${player}!`;
