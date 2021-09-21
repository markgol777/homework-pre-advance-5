function sum() {
    let sum = 0;
    return function(number) {
        sum = sum + number
        console.log(sum);
    }
}

let result = sum()

result(3);
result(5);
result(228);