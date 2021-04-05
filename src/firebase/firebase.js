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

    // fetch
    // database.ref().on('value', (snapshot) => {
    //     const val = snapshot.val();
    //     console.log('Val = ', val);
    //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
    // });

   //fetch data - single time or using subscribe
   
    //fetch - subscribe for changes
    const onValueChange = database.ref().on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (err) => {
        console.log("Error with data fetching : ", err);
    });

    setTimeout(() => {
        database.ref('age').set(28);
    }, 3500);

    setTimeout(() => {
       // unsubscribe
        database.ref('age').off(onValueChange);
    }, 7000);

    setTimeout(() => {
        database.ref('age').set(30);
    }, 10500);

   // fetch - single
   database.ref() //ref('location')
     .once('value')
     .then((snapshot) => {
        const val = snapshot.val();
        console.log('Val = ', val);
     }).catch((err) => {
         console.log('Error fetching data : ', err);
     });


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