function calculateArea() {
    var sideLength = document.getElementById('sideLength').value;
    var area = sideLength * sideLength;
    document.getElementById('result').innerHTML = 'Luas Persegi: ' + area;
}

function calculatePerimeter() {
    var sideLength = document.getElementById('sideLength').value;
    var perimeter = 4 * sideLength;
    document.getElementById('result').innerHTML = 'Keliling Persegi: ' + perimeter;
}

function resetCalculator() {
    document.getElementById('sideLength').value = '';
    document.getElementById('result').innerHTML = '';
}