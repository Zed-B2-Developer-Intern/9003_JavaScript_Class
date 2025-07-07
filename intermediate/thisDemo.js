const person = {
  name: "Mary",
  greet() {
    console.log("Hello", this.name);
  }
};

person.greet();

const someone = { name: "John" };
someone.greet = person.greet;
someone.greet();
