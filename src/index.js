(function () {
  console.log("hello world!");
})();
console.log("lalalalalalala");
console.log("hii");
console.log("hii");
console.log("hii");

fetch("http://localhost:7000/test")
  .then((res) => res.json())
  .then((data) => document.write(data.key));
