//initalization of the firestore
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0PNDN4aBzeV0ycJlLTdZNcLnNhbBKjl4",
  authDomain: "alemalohe-8fb0a.firebaseapp.com",
  databaseURL: "https://alemalohe-8fb0a.firebaseio.com",
  projectId: "alemalohe-8fb0a",
  storageBucket: "alemalohe-8fb0a.appspot.com",
  messagingSenderId: "808720449970",
  appId: "1:808720449970:web:43e3d6a6dd37ede354e4ab",
  measurementId: "G-L0WS7RQ9KK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//var storage = firebase.storage().ref();
var firestore = firebase.firestore();
firebase.analytics();
/* 

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "admin.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  //tosUrl: "<your-tos-url>",
  // Privacy policy url.
  //privacyPolicyUrl: "<your-privacy-policy-url>"
};



ui.start("#firebaseui-auth-container", uiConfig);

 */

firestore
  .collection("projects")
  .get()
  .then(function(querySnapshot) {
    
      querySnapshot.forEach(doc => {
         console.log(doc.data());
         var data = doc.data();
         if(data.stars > 0){
           var star = '</p><button class=""><i class="fa fa-star"></i> ' + data.stars + "</button></div></a>"
           } else {
            var star = "";
           };  
         document.querySelector("#projects").innerHTML +=
           '<a href="' +
           data.plink +
           '" target="_black"><div class="dark-card"><p class="plang color-three mb-1">' +
           data.plang +
           '</p><h4 class="color-one mb-1">' +
           data.name +
           '</h4><p class="disc color-one mb-3">' +
           data.disc +
           star
       
      })
   

  });



/* //dynamically set reference to the file name
firestore
  .collection("projects")
  .add({
    video_link: 'asdf',
    video_title: 'asdfasdf',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function(docRef) {
    console.log("Document written with ID: " + docRef.id);
    myclosefunction();
  })
  .catch(function(error) {
    console.log("Error adding document: " + error);
  }); */