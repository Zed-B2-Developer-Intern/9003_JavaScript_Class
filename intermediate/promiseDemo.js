function fetchResult() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Result ready"), 1000);
  });
}

fetchResult().then(msg => console.log(msg));
