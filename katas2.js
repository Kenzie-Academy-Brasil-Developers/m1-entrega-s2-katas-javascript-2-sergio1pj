// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
console.log(add(3, 5));
// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2) {
    let result = 0;
    for(let i = 1; i <= num2; i++) {
        result = add(result, num1);
    }
    return result;
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
console.log(multiply(4, 6));
// comece a criar a sua função power na linha abaixo
function power(num1, num2) {
    let result = 1;
    for (let i = 1; i <= num2; i++) {
        result = multiply(result, num1);
    }
    return result;
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
console.log(power(3, 4));
// comece a criar a sua função factorial na linha abaixo
function factorial(num) {
    if(num === 0){
        return 1; // 0! = 1
    } else{
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result = multiply(result, i);
        }
        return result;
    }
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
console.log(factorial(5));
/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(pos) {
    if (pos == 0) {
        return 0;
    } else if (pos == 1) {
        return 1;
    } else {
        let fibo = [0, 1];
        for (let i = 2; i <= pos; i++) {
            fibo.push(add(fibo[i - 1], fibo[i - 2]));
        }
        return fibo[pos];
    }
}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
console.log(fibonacci(7));
