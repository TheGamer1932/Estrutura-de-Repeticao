let matriz = [1, 2, 3, 4, "especial", 6, 7];

let i = 0;
while(i < matriz.length){
    if(matriz[i] === "especial"){
        break;
    }
    console.log(matriz[i]);
    i++;
}
