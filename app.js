let userPhone = prompt("What phone do you use?");

let message = "User's phone: " + userPhone;

document.write(message);

console.log(userPhone);

if (userPhone == "Red Magic" || userPhone == "red magic") {
  alert("Snap!");
} else {
  alert("Oh...");
}

function displayUserPhone() {
  let message = "User's phone: " + userPhone;
  document.write(message);
}

let Finland = prompt("Which country produces the best snipers and phones?");

if (Finland == "Finland") {
  alert("Hyvin tehty! That's right!");
} else {
  alert("No. No, you are wrong, HOW DARE YOU!?!");
}

let age = prompt("how old are you?");

for (let age = 0; age <= 90; age++) {
  console.log("Hello tiny child");
}

// basic for loop with counter
// for (let counter = 0; counter < 20; counter = counter + 1) {
//     console.log('My name is sam!' + counter)
// }

function getRating() {
  let rating = prompt("Rate my site between 1-5", "5");

  // validate / check that they input a number between 1 - 5;

  while (rating < 0 || rating >= 5) {
    rating = prompt("Please enter a number 5 or lower!");
  }

  // while (!(rating > 0 && rating <= 5)) {
  //   rating = prompt('Please enter a number 5 or lower!')
  // }

  for (let i = 0; i < rating; i++) {
    document.write(
      "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Simo_hayha_honorary_rifle.jpg'/>"
    );
  }
}

