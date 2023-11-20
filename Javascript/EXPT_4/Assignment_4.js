const form = document.getElementById("comparison-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const comparisonResults = {
        "Method 1 (Equality ===)": string1 === string2,
        "Method 2 (localeCompare, Case-Insensitive)": string1.localeCompare(string2, undefined, { sensitivity: 'base' }) === 0,
        "Method 3 (toLowerCase / toUpperCase)": string1.toLowerCase() === string2.toLowerCase(),
        "Method 4 (Regular Expression Match, Case-Insensitive)": !!string1.match(new RegExp(string2, 'i')),
        "Method 5 (Based on string length and local comparison)": () => {
            if (string1.length === string2.length) {
                return string1.localeCompare(string2, undefined, { sensitivity: 'base' }) === 0 ?
                    "Length same and strings are equal" : "Length same but strings are unequal";
            } else {
                return "Length not same";
            }
        }
    };

    let resultsHTML = "<h2>Comparison Results</h2>";
    for (const method in comparisonResults) {
        if (typeof comparisonResults[method] === "function") {
            resultsHTML += `<p>${method}: ${comparisonResults[method]()}</p>`;
        } else {
            resultsHTML += `<p>${method}: ${comparisonResults[method]}</p>`;
        }
    }

    resultsDiv.innerHTML = resultsHTML;
});
