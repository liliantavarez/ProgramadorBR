setTimeout(() => {
  $("h1").addClass("bg-blue");
}, 1000);

setTimeout(() => {
  $("h1").removeClass("bg-blue");
}, 3000);

setTimeout(() => {
  $("h1").toggleClass("bg-blue");
}, 3000);

setInterval(() => {
  $("h1").toggleClass("bg-blue");
}, 200);

console.log($("h1").css("background-color"));
console.log($("h1").css("font-size"));

$("h1").css({ "font-size": "4vh", "background-color": "red" });
