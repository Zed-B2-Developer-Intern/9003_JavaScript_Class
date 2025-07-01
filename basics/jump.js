//break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("i is:", i);
}
//continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("i is:", i);
}
//return
function greet(name) {
    if (!name) {
        return; 
    }
    console.log("Hello", name);
}

greet("Ragavi"); 
greet();         

