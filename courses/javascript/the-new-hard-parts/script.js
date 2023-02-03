
// #####################################
// A little exploration in Promise object and time flow. 
// #####################################
// console.log('Start of Macrotask list 1');

// function sayHi() {
//     console.log('Hi! I\'m in sayHi function body!');
//     return 'Hi!';
// }

// const controlObj = {
//     microEngaged: false,
// };

// const promise = new Promise((res, rej) => {
//     console.log('promise created, running in Macrotask list 1');
//     console.log('running a function, still in Macrotask 1: ' + sayHi());

//     // setTimeout(() => {
//     //     controlObj.microEngaged = controlObj.microEngaged ? false : true;
//     //     res('Promise resolved; Macrotask List 2');
//     // });

//     res('Promise resolved; Microtask List 1');
// })

// setTimeout(() => console.log(`Macrotask list ${controlObj.microEngaged ? 2 : 3}`))

// console.log('End of Macrotask list 1');

// promise.then(data => {
//     controlObj.microEngaged = controlObj.microEngaged ? false : true;
//     console.log(data);
// });



