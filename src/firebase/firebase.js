import * as firebase from 'firebase';
// import * as expensesActions from '../actions/expenses';

//expensesActions

const firebaseConfig = {
    apiKey: "AIzaSyBH_Xbo0YYiGauH-a9De5eNyJGZ97-JixJ",
    authDomain: "expensify-amr19.firebaseapp.com",
    databaseURL: "https://expensify-amr19-default-rtdb.firebaseio.com",
    projectId: "expensify-amr19",
    storageBucket: "expensify-amr19.appspot.com",
    messagingSenderId: "944307301113",
    appId: "1:944307301113:web:da2eb05042af4e37239028",
    measurementId: "G-S76ENDR96N"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  //child removed - subscribe
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

   //child_changed - subscribe
    //  database.ref('expenses').on('child_changed', (snapshot) => {
    //     console.log(snapshot.key, snapshot.val());
    //  });

    // child_added - subscribe
    //  database.ref('expenses').on('child_added', (snapshot) => {
    //     console.log(snapshot.key, snapshot.val());
    //  });

  //array data read
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         //console.log(snapshot.val());
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id : childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

    //array data change - based on subscribe
    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];
    //     snapshot.forEach((childSnapshot) => {
    //         expenses.push({
    //             id : childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
    //     console.log(expenses);
    // });

//   database.ref('expenses').push({
//        description : 'Rent',
//        note : '',
//        amount : 7000,
//        createdAt : 976123498763
//   });

//   database.ref('expenses').push({
//     description : 'Phone Bill',
//     note : '',
//     amount : 500,
//     createdAt : 976123437628
// });

//   // array data in firebase
//   let firebaseNotes = {
//         notes : {
//             "123456789" : {
//                 "title" : "note1",
//                 "body" : "body content 1"
//             }
//         },
//         notes : {
//             "1234565654" : {
//                 "title" : "note2",
//                 "body" : "body content 2"
//             }
//         }
//     };

    // will generate random Id having note obj
    // database.ref('notes').push({
    //     "title" : "note2",
    //     "body" : "body content 2"
    // });
   
    // database.ref('notes').set(firebaseNotes);

    // update array based on Id
    // database.ref('notes/~Krll52aVDQ3X^d)tmS7').update({
    //     body : 'Buy Food'
    // });

    //remove based on Id
    //database.ref('notes/~Krll52aVDQ3X^d)tmS7').remove();

    // fetch
    // database.ref().on('value', (snapshot) => {
    //     const val = snapshot.val();
    //     console.log('Val = ', val);
    //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
    // });

   //fetch data - single time or using subscribe
   
    //fetch - subscribe for changes
    // const onValueChange = database.ref().on('value', (snapshot) => {
    //     console.log(snapshot.val());
    // }, (err) => {
    //     console.log("Error with data fetching : ", err);
    // });

    // setTimeout(() => {
    //     database.ref('age').set(28);
    // }, 3500);

    // setTimeout(() => {
    //    // unsubscribe
    //     database.ref('age').off(onValueChange);
    // }, 7000);

    // setTimeout(() => {
    //     database.ref('age').set(30);
    // }, 10500);

   // fetch - single
//    database.ref() //ref('location')
//      .once('value')
//      .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('Val = ', val);
//      }).catch((err) => {
//          console.log('Error fetching data : ', err);
//      });


   //create data
//   database.ref().set({
//       name : "Amrit Singh",
//       age : 31,
//       stressLevel : 6,
//       isSingle : true,
//       job : {
//         title : 'Sotware Developer',
//         company : 'Google'
//       },
//       location : {
//           city :'Sgh',
//           country : 'India'
//       }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((err) => {
//       console.log("Error : ", err);
//   });


  //update -> only update specified fields
  // or add new property
//   database.ref().
//       update({
//             name : 'Amr',
//             age : 29,
//             //job : 'Software developer',
//             isSingle : null, //will remove this field
//             'location/city' : 'Mumbai',
//             stressLevel : 7,
//             'job/company': 'Amazon'
//       }).then(() => {
//           console.log('Data is updated!');
//       }).catch((err) => {
//           console.log("Error : ", err);
//       });

  //removing data using set using null
 // database.ref('isSingle').set(null);

  // removing data
//   database.ref('isSingle')
//     .remove() // returns Promise
//     .then(() => {
//         console.log('Data was removed!');
//     }).catch((err) => {
//         console.log('Did not remove data, error : ', err);
//     });


  //database.ref().set('This is my data.');

  //database.ref('age').set(32);
  //database.ref('location/city').set('Sarangarh');

//   database.ref('attributes').set({
//       height : '176cm',
//       weight : '72kg'
//   }).then(() => {
//       console.log('Second set call worked!');
//   }).catch((err) => {
//       console.log('Err : ', err);
//   });

  //console.log('Data changed!');