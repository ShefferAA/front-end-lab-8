var a = parseFloat(prompt('Enter the length of first side', 0));
var b = parseFloat(prompt('Enter the length of second side', 0));
var c = parseFloat(prompt('Enter the length of third side', 0));
var type;

if ((a > 0) && (b > 0) && (c > 0)) {

    if (((a + b) > c) && ((b + c) > a) && ((c + a) > b)) {

        var p = (a + b + c) / 2;
        var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        if ((a == b) && (c == b) && (c == a)) {
            type = 'equilateral triangle';
        }

        else if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a)) {

            if ((a == b) || (b == c) || (c == a)) {
                type = 'isoscales right triangle';
            }

            else if (a != b && a != c && b != c) {
                type = 'scalene right triangle';
            }
        }

        else if ((a == b) || (b == c) || (c == a)) {
            type = 'isoscales triangle';
        }

        else if (a != b && a != c && b != c) {
             type = 'scalene triangle';
        }

        console.log('Type of triangle is' + type + 'and square is', parseFloat(s.toFixed(2)));

    } else {
        console.log('Incorrect data!');
        console.log('One side = > sum of two others');
    }

} else {
    console.log('Incorrect data!');
    console.log('One side =< 0');
}