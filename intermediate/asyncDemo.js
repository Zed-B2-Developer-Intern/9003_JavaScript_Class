async function loadData() {
  const data = await new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
  console.log(data);
}

loadData();
