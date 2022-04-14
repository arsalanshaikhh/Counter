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


