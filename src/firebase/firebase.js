import * as firebase from 'firebase';
import * as expensesActions from '../actions/expenses';

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

  firebase.database().ref().set({
      name : "Amrit Singh"
  });
