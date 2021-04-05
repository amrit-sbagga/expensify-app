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

  database.ref().set({
      name : "Amrit Singh",
      age : 31,
      isSingle : true,
      location : {
          city :'Sgh',
          country : 'India'
      }
  }).then(() => {
      console.log('Data is saved!');
  }).catch((err) => {
      console.log("Error : ", err);
  })


  //database.ref().set('This is my data.');

  //database.ref('age').set(32);
  //database.ref('location/city').set('Sarangarh');

  database.ref('attributes').set({
      height : '176cm',
      weight : '72kg'
  }).then(() => {
      console.log('Second set call worked!');
  }).catch((err) => {
      console.log('Err : ', err);
  })

  //console.log('Data changed!');