let heading = document.querySelector("#heading");
let number = prompt("Enter your number");

if (number < 1 || number > 100 || isNaN(number)) {
  heading.innerText = "Please enter a valid number between 1 to 100";
} else if (number >= 80) {
  heading.innerText = `You have got A+ grad with ${number} numbers`;
} else if (number >= 70) {
  heading.innerText = `You have got A grad with ${number} numbers`;
} else if (number >= 60) {
  heading.innerText = `You have got A- grad with ${number} numbers`;
} else if (number >= 50) {
  heading.innerText = `You have got B grad with ${number} numbers`;
} else if (number >= 40) {
  heading.innerText = `You have got C grad with ${number} numbers`;
} else if (number >= 33) {
  heading.innerText = `You have got D grad with ${number} numbers`;
} else {
  heading.innerText = `You have got Fail with ${number} numbers`;
}
