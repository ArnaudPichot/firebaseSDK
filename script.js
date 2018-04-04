// Initialize Firebase
var config = {
    apiKey: 'AIzaSyAO7PV8b6uP_rfe9xWTmUhkhqjdE6qL68g',
    authDomain: 'walkingdead-81841.firebaseapp.com',
    databaseURL: 'https://walkingdead-81841.firebaseio.com',
    projectId: 'walkingdead-81841',
    storageBucket: 'walkingdead-81841.appspot.com',
    messagingSenderId: '15996990995'
};

firebase.initializeApp(config);

var db = firebase.database();
var character = db.ref('characters');

console.log(character);

character.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('persoList').innerHTML += '<li>' + childData.name +
            '</li>';
    });
});

function writeUserData(Name) {
    db.ref('characters/' + name).push({
        name: Name,
    });

}

function PushOnFirebase() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.location.reload();
}