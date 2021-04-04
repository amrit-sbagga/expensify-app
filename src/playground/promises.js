const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve('This is my resolved data');
        // resolve({
        //     name: 'Amrit',
        //     age : 31
        // });
        reject('Something went wrong!');
    }, 1500);
});

console.log('before');

// promise.then((data) => {
//     console.log('1', data);
// }).catch((err) => {
//     console.log('Error = ', err);
// });

promise.then((data) => {
    console.log('1', data);
}, (err) => {
    console.log('Error = ', err);
});

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');