const sentence = "hello there from lighthouse labs";

const typewriter = function(input) {
  for (let i = 0; i < input.length; i++) {
    setTimeout(() => {
      process.stdout.write(input[i]);
    }, 100 * i);
  }
  setTimeout(() => {
    console.log('\n');
  }, 100 * (input.length + 1));
};

typewriter(sentence);