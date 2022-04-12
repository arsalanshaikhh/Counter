var count = 0;
document.querySelector("#clr").addEventListener("click", clear);
function clear() {
  count = 0;
  document.querySelector("h1").textContent = count;
}

document.querySelector("#inc").addEventListener("click", increment);

function increment() {
  count = count + 1;
  document.querySelector("h1").textContent = count;
}

document.querySelector("#dec").addEventListener("click", decrement);
function decrement() {
  if (count <= 0) {
    document.querySelector("#dec").removeEventListener("click", decrement);
  } else {
    count = count - 1;
  }
  document.querySelector("h1").textContent = count;
}

// function weekday(num) {
//   switch (num) {
//     case 1:
//       console.log("Monday");
//       break;

//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     case 7:
//       console.log("Sunday");
//       break;
//     default:
//       console.log("Invalid Input");
//   }
// }
