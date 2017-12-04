// Initialize Firebase
var config = {
    apiKey: "AIzaSyD_e6it7Lqt28258XZB4YMo6nrzfeIBi1A",
    authDomain: "reservation-form-f14ee.firebaseapp.com",
    databaseURL: "https://reservation-form-f14ee.firebaseio.com",
    projectId: "reservation-form-f14ee",
    storageBucket: "reservation-form-f14ee.appspot.com",
    messagingSenderId: "584086409453"
};
firebase.initializeApp(config);

//reference message collectionn

var messagesRef = firebase.database().ref('messages');

// listen for form submit

$('#submitBtn').on('click', submitForm);
// sumit form
function submitForm(e) {
    e.preventDefault();
    console.log(123);

    // get value

    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var gust = getInputVal('gust');
    var date = getInputVal('date');
    var email = getInputVal('email');
    var message = getInputVal('message');

    console.log(firstname);

    //save message

    saveMessage(firstname, lastname, gust, date, email, phone, message);
    // show message alert

    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
    },3000);

    // clear form
    
    document.getElementById('contactForm').reset();

}

// Function to get from values

function getInputVal(id) {
    return document.getElementById(id).value;
}
// save message to firebase

function saveMessage(firstname, lastname, guest, date, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        gust: gust,
        date: date,
        email: email,
        phone: phone,
        message: message


    });
}


//Google Map api


function initMap(){
    //map option
    var options ={
        zoom: 8,
        center: {lat: 35.20105, lng:-91.8318334}
    };

    // new map
   
    var map = new google.maps.Map(document.getElementById('map'), options);
// add marker
    var marker = new google.maps.Marker({
        position: {lat: 36.071561, lng:-94.16654},
        map: map
    });
}
