let myArray = [];

    var n;

      function lengthh() {
        n = document.getElementById("1").value;
        var str = "You have entered length:" + n;

      }
    function appendToArray() {
      console.log(n);

      const elementsInput = document.getElementById("arrayElements");
      const outputDiv = document.getElementById("output");
      const inputString = elementsInput.value;
      const elements = parseInput(inputString);
      if (elements) {
        myArray = myArray.concat(elements.filter(Boolean));
      }
      if(myArray.length>n){
        alert("index out of bounds");
        myArray=[];
      }
      else{
      elementsInput.value = '';
      outputDiv.innerHTML = "Array after appending: " + JSON.stringify(myArray);
      }

    }

    function parseInput(input) {
      const elements = [];
      const pattern = /\[.*?\]/g;
      const matches = input.match(pattern);
      if (matches) {
        for (const match of matches) {
          try {
            const parsedArray = JSON.parse(match);
            if (Array.isArray(parsedArray)) {
              elements.push(parsedArray);
            }
          } catch (error) {
            // Ignore parsing errors
          }
        }
      }
      const nonArrayPart = input.replace(pattern, '').split(',');
      const nonArrayElements = nonArrayPart.map(element => {
        // Convert to number if possible
        return !isNaN(element) ? parseFloat(element) : element.trim();
      });
      if (nonArrayElements.length > 0) {
        elements.push(...nonArrayElements);
      }
      return elements.length ? elements : null;
    }

    function checkIsArray() {
      const checkIndex = parseInt(document.getElementById("checkArrayIndex").value);
      const outputDiv = document.getElementById("output");

      if (checkIndex >= 0 && checkIndex < myArray.length) {
        if (Array.isArray(myArray[checkIndex])) {
          outputDiv.innerHTML = `The element at index ${checkIndex} is an array.`;
        } else {
          outputDiv.innerHTML = `The element at index ${checkIndex} is not an array.`;
        }
      } else {
        outputDiv.innerHTML = "Index out of bounds";
      }
    }

    function showArray() {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "Current Array: " + JSON.stringify(myArray);
    }

    function checkArraySize() {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "Array Size: " + myArray.length;
    }