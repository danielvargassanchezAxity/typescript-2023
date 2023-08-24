"use strict";
let counter = 1;
let back = false;
// for(counter; !back; counter++) {
//     console.log("repeticion numero (for): ", counter);
//     back = counter === 10;
// }
// back = false;
// while (!back) {
//     console.log("repeticion numero (while): ", counter);
//     counter++;
//     back = counter === 20;
// }
back = true;
do {
    console.log("repeticion numero (do while): ", counter);
    counter++;
    // back = counter === 30;
} while (!back);
