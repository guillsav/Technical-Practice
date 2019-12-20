function fib(num) {
    const cache = [];
    cache[0] = 0;
    cache[1] = 0;
    cache[2] = 1;

    for (let i = 3; i < num + 1; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[num];
}

// function fib(num) {
//     const cache = {0: 0, 1: 0, 2: 1};

//     if (num in cache) {
//         return cache[num];
//     }
//     cache[num] = fib(num - 1) + fib(num - 2);
//     return cache[num];
// }

module.exports = fib;
