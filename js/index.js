/* Prevent us from attempting to use variables
 that are not declared */
"use strict"

/*

for (let i = 0; i < 5; i++) {
    console.log(i);         // Output up to 4
}

let j = 0;                   
while (j < 5) {
    console.log(j);
    j++;                    // Output up to 4
}   

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);            // Output up to 4


for (let m = 0; m < 8; m++) {
    if (m === 5) {break;}
    console.log(m);         // Output up to 4
}

for (let m = 0; m < 8; m++) {
    if (m === 5) {continue;}
    console.log(m);         // Output up to 7
}


/*let n = 0;
while (n < 8) {
    if (n === 5) {break;}
    console.log(n);
    n++;
}   ENDLESS LOOP  */

let p = 0;
while (p < 8) {
    if (p === 5) {continue;}
    console.log(p);
    p++;
}                           // Output up to 4, the continue statement exits the loop
                            // Why?  It's just supposed to skip 5... should be 0 1 2 3 4 6 7 