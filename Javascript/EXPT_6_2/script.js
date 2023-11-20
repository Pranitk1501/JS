const array = [];

function updateArrayOutput() {
  document.getElementById("array-output").innerHTML = array.join(", ");
}

document.getElementById("add-element").addEventListener("click", function () {
  const element = document.getElementById("arr-element").value;
  const length = parseInt(document.getElementById("arr-length").value);

  if (array.length >= length) {
    alert("You're trying to add more elements than the array length!");
  } else {
    array.push(element);
    updateArrayOutput();
  }
});

document.getElementById("search-element-ud-btn").addEventListener("click", function () {
  const element = document.getElementById("search-element-ud").value;
  const index = array.findIndex((el) => el === element);
  document.getElementById("search-element-ud-output").textContent = index !== -1 ? index : "Element Not Found";
  if (index === -1) {
    alert("Element not found in the array");
  }
});

document.getElementById("search-element-built-btn").addEventListener("click", function () {
  const element = document.getElementById("search-element-built").value;
  const index = array.indexOf(element);
  document.getElementById("search-element-built-output").textContent = index !== -1 ? index : "Element Not Found";
  if (index === -1) {
    alert("Element not found in the array");
  }
});

document.getElementById("delete-element-ud-btn").addEventListener("click", function () {
  const element = document.getElementById("delete-element-ud").value;
  array = array.filter((el) => el !== element);
  updateArrayOutput();
});

document.getElementById("delete-element-built-btn").addEventListener("click", function () {
  const element = document.getElementById("delete-element-built").value;
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
    updateArrayOutput();
  } else {
    alert("Element not found in the array");
  }
});

document.getElementById("empty-array-ud-btn").addEventListener("click", function () {
  array.length = 0;
  updateArrayOutput();
});

document.getElementById("empty-array-built-btn").addEventListener("click", function () {
  array.splice(0, array.length);
  updateArrayOutput();
});

document.getElementById("reset").addEventListener("click", function () {
  location.reload();
});
