function sayHello() {
  console.log("Hello Node.js");
}

sayHello();

function logSaying(fn) {
  fn();
}
logSaying(sayHello);

var sayGoodbye = function() {
  console.log("Good bye!");
}

sayGoodbye();
