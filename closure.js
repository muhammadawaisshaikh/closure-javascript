function hello(message) {
  console.log(message);
}

function greet(name, experience, techstack) {
  return Meet with +""+ name +","+ "he has " +experience+ "Years of experience in " +techstack;
}

// generate the closure
var message = greet("Muhammad Awais", "4+", "ROR, Angular, Javasript");

// Use Closure - passing clouse to method to make console output
hello(message);
