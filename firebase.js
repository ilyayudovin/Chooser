$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyAvexg6XWJotjy8BJqDLU6Yc_2jgupAcNU",
        authDomain: "adaptive-1554480223106.firebaseapp.com",
        databaseURL: "https://adaptive-1554480223106.firebaseio.com",
        projectId: "adaptive-1554480223106",
        storageBucket: "adaptive-1554480223106.appspot.com",
        messagingSenderId: "1092575332403"
    };
    firebase.initializeApp(config);
    var storage = firebase.storage();

    var fileButton = document.getElementById('fileButton1');
    var downloadbtn = document.getElementById('button1');
    var n = 1;
    fileButton.addEventListener('change', function (e) {
        var file=e.target.files[0];
        var fileName = e.target.files[0].name;
        localStorage.setItem('image' + n,fileName);
        n++;
        alert(fileName);
        var storageRef = firebase.storage().ref('images/' + file.name);
        var task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
            },
            function error(err) {

            },
            function complete() {

            }
        );
    });

    fileButton2.addEventListener('change', function (e) {
        var file = e.target.files[0];
        var fileName = e.target.files[0].name;
        localStorage.setItem('image'+n,fileName);
        alert(fileName);
        var storageRef = firebase.storage().ref('images/' + fileName);
        var task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
            },
            function error(err) {

            },
            function complete() {

            }
        );
    });

    var i=1;
    downloadbtn.addEventListener('click',function () {
        function loop(){
           var fileName=localStorage.getItem('image'+i);
           var imgRef=storage.ref('images/' + fileName );

            imgRef.getDownloadURL().then(function (url) {
                console.log("images download");
                console.log(url);
                var img = document.getElementById('data'+i);
                img.src = url;
                i++;
                if(i===3){

                }
                else{
                    loop();
                }
            })
        }
        var data=localStorage.getItem('image1');
        loop();
        // imgRef=storage.ref('images/' + data);
    })




});

// Initialize Firebase





