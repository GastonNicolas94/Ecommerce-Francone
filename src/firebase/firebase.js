import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {

    apiKey: "AIzaSyBQaqvAhsJRGTOdEIXhSSiUfTYcf2GlYYY",
  
    authDomain: "ecommerce-francone-gaston.firebaseapp.com",
  
    projectId: "ecommerce-francone-gaston",
  
    storageBucket: "ecommerce-francone-gaston.appspot.com",
  
    messagingSenderId: "104748685013",
  
    appId: "1:104748685013:web:228fca7b3e4da4254cb45c"
  
  };


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}
