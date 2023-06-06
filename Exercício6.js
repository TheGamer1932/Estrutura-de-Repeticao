let fib1 = 0;
let fib2 = 1;

for(let i = 1; i <= 50; i++){

    console.log(fib2);
    
    let proximoFib = fib1 + fib2;
    
    fib1 = fib2;
    fib2 = proximoFib;
}
