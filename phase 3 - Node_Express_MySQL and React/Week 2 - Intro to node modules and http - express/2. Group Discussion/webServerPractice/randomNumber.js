function random() {
  let randomNumber = Math.random(); // generate decimal numbers from 0 -1
  // console.log(randomNumber);
  return randomNumber;
}

// random();

module.exports.rand = random; // export the module for others
