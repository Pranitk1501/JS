function areaOftriangle() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
        var s = (side1 + side2 + side3) / 2;
        var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        document.getElementById("display").innerHTML = "The area of the triangle is: " + area.toFixed(2) + " square units";
    } else {
        document.getElementById("display").innerHTML = "Invalid triangle. The sum of any two sides must be greater than the third side.";
    }
}

function areaOfcircle() {
    var radius = parseFloat(document.getElementById("Radius").value);
    var area1 = 3.14 * (radius ** 2);
    document.getElementById("display1").innerHTML = "The area of the circle is: " + area1.toFixed(2) + " square units";
}

function areaOfrectangle() {
    var length = parseFloat(document.getElementById("length").value);
    var breadth = parseFloat(document.getElementById("breadth").value);
    var area = length * breadth;
    document.getElementById("display2").innerHTML = "The area of the rectangle is: " + area.toFixed(2) + " square units";
}
