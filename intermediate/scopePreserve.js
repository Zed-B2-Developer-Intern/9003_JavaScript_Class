function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log("Counter:", count);
  };
}

const counter = makeCounter();
counter();
counter();
