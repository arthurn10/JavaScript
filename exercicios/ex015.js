let num = [10, 15, 3, 22, 45, 29 ]

console.log(num)

/*
for (let pos = 0; pos < num.length; pos++){
   console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}