let name = prompt("Enter your name:")
var age = 20

//@ts-ignore
if (name == "admin") {
  console.log("Welcome " + name)
} else {
  console.log("Hello " + name)
}

function greet(user: any) {
  console.log("Hi " + user)
}

greet(name)
