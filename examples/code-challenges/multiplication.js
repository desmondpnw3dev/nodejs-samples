// Implement a function that multiplies x * y and returns the result but you can't use the multiplication operator.
// 1st pass
function mult(x, y) {
    const stack = [];
    for (let i = 0; i < y; ++i) {
        stack.push(x);
    }
    return stack.reduce((sum, val) => {
        return sum += val;
    }, 0);
}

// How I would deal w/ negative numbers
function mult(x, y) {
    const stack = [];
    for (let i = 0; i < Math.abs(y); ++i) {
        stack.push(x);
    }
    const sum = stack.reduce((sum, val) => {
        return sum += val;
    }, 0);
    if (x < 0 && y >= 0 || y < 0 && x >= 0) {
        return -sum;
    }
    return sum;
}
