$(document).ready(function () {


    var counter = 0;

    //You might want to do if check to see if localstorage set for theImage here
    var img = new Image();
    img.src = localStorage.theImage;


    $("body").on("change", ".classhere", function () {

        //Equivalent of getElementById
        var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
        var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

        var reader = new FileReader();
        reader.onload = function (e) {
            // Create a new image.
            var data1;
            var data2;

            var img = new Image();

            img.src = reader.result;
            localStorage.theImage = reader.result; //stores the image to localStorage

            var dataImage = localStorage.getItem('theImage');


            var postNum = 'post' + postsCounter;

            if (counter % 2 === 1) {
                $(".imagearea1").html(img);
                $('#labelimg').each(function () {
                    var imgURL = $('#imagearea1').find('img').attr('src');
                    $(this).css('background-image', 'url(' + imgURL + ')');
                });
                var bannerImgg = $('#' + postNum).find('.imgnum').find('img')[0];
                bannerImgg.src = dataImage;
                data1 = dataImage;
                localStorage.setItem('data1', data1);
                localStorage.removeItem('theImage');
            }
            if (counter % 2 === 0) {
                $(".imagearea2").html(img);
                $('#labelimg2').each(function () {
                    var imgURL = $('#imagearea2').find('img').attr('src');
                    $(this).css('background-image', 'url(' + imgURL + ')');
                });
                var bannerImgg2 = $('#' + postNum).find('.imgnum').find('img')[1];
                bannerImgg2.src = dataImage;
                data2 = dataImage;
                localStorage.setItem('data2', data2);
                localStorage.removeItem('theImage');
            }
            counter++;
            localStorage.setItem('c', counter);
        }
        reader.readAsDataURL(file);//attempts to read the file in question.
    });
    counter++;
    localStorage.setItem('c', counter);
});
var postsCounter = 1;
localStorage.setItem('pc', postsCounter);

function posting(box) {
    var currentPost,

        pic1Id = 'post' + postsCounter + '_pic1',
        pic2Id = 'post' + postsCounter + '_pic2';

    var imgsrc1 = $('#post' + postsCounter).find('.imgnum').find('img')[0];
    var imgsrc2 = $('#post' + postsCounter).find('.imgnum').find('img')[1];

    event.preventDefault();
    localStorage.setItem('ID', pic1Id);
    localStorage.setItem('ID2', pic2Id);

    if (imgsrc1.src.length > 81 && imgsrc2.src.length > 81) {
        event.preventDefault();
        $('#' + pic1Id).each(function () {
            var imgURL = $('#' + pic1Id).next('.imgnum').find('img').attr('src');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#' + pic2Id).each(function () {
            var imgURL = $('#' + pic2Id).next('.imgnum').find('img').attr('src');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        document.getElementsByClassName("imagearea1")[0].style.display = "none";//change color to label
        $("div#imagearea1").empty();
        $('#logo').empty();

        document.getElementsByClassName("imagearea2")[0].style.display = "none";//change color to label
        $("div#imagearea2").empty();
        $('#logo2').empty();

        var desc = document.forms["forma"].elements["description"].value;
        var descarea = document.getElementById('description_area script' + (postsCounter));
        descarea.innerHTML = desc;
        $('#description').val('');

        localStorage.setItem('show', 'true');


        document.getElementById('post' + (postsCounter)).style.display = "block";

        $("#wall").prepend("<div class='post'><div class='pic1'><div class='mask flex-center rgba-stylish-strong'><i class='fas fa-heart' onclick='showvotes()'></i><div class='votes vote1' id='vote'>100</div></div></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2'><div class='mask flex-center rgba-stylish-strong'><i class='fas fa-heart' onclick='showvotes()'></i><div class='votes vote2' id='vote'>101</div></div></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

        postsCounter++;
        currentPost = $('.post').first();

        currentPost.addClass('post' + (postsCounter));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (postsCounter));
        currentPost.find('.pic1').attr('id', 'post' + postsCounter + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + postsCounter + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (postsCounter));
        currentPost.find('.description_area').attr('id', 'description_area script' + (postsCounter));
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');


        document.getElementById('form1').style.display = "inline-block";
        document.getElementById('form2').style.display = "none";
        document.getElementById('description').style.display = "none";
        document.getElementById('postBtn').style.display = "none";
        document.getElementById('process').style.width = "1%";
        document.getElementById('arrow').style.display = "block";
        document.getElementById('movingul').style.transform = "translate(0,0)";
        document.getElementById('movingnum').style.transform = "translate(0,0px)";

        document.getElementById('labelimg').style.backgroundImage="url()";
        document.getElementById('labelimg2').style.backgroundImage="url()";
        localStorage.setItem('pc', postsCounter);

    }
}

window.onload = function () {
  var show = localStorage.getItem('show');
 if (show === 'true') {
    document.getElementById('clear').style.display = "block";
   document.getElementById('vote1').style.display = "inline-block";
  document.getElementById('vote2').style.display = "inline-block";
 }
counter1 = localStorage.getItem('counter1');
document.getElementById('vote1').innerHTML = counter1 + " votes";

counter2 = localStorage.getItem('counter2');
document.getElementById('vote2').innerHTML = counter2 + " votes";
}

function attach1(file) {
 document.getElementById('camera').style.display="none";
}

function attach2(file) {
    document.getElementById('camera2').style.display="none";

}

function showvotes(box) {
    display = document.getElementById('post1_vote1').style.display;
    if (display === 'block') {
        document.getElementById('post1_vote1').style.display = "none";
        document.getElementById('heart1').style.display = "block";
    }
    else {
        document.getElementById('post1_vote1').style.display = "block";
        document.getElementById('heart1').style.display = "none";
    }
    display = document.getElementById('post1_vote2').style.display;
    if (display === 'block') {
        document.getElementById('post1_vote2').style.display = "none";
        document.getElementById('heart2').style.display = "block";
    }
    else {
        document.getElementById('post1_vote2').style.display = "block";
        document.getElementById('heart2').style.display = "none";
    }
}

var counter1 = 0;

function voting1(element) {
    counter1++;
    localStorage.setItem('counter1', counter1);
    element.innerHTML = counter1 + " votes";
}

var counter2 = 0;

function voting2(element) {
    counter2++;
    localStorage.setItem('counter2', counter2);
    element.innerHTML = counter2 + " votes";
}

var progress = 1;

function postprocess(box) {

    if (progress === 1) {
        document.getElementById('form2').style.display = "inline-block";
        document.getElementById('form1').style.display = "none";
        document.getElementById('process').style.width = "33%";
        document.getElementById('errortext1').style.display = "none";
        document.getElementById('movingul').style.transform = "translate(0,-37px)";
        document.getElementById('movingnum').style.transform = "translate(0,-24px)";
    }
    // else{
    //   document.getElementById('errortext1').style.display="block";
    //   progress--;
    //}
    if (progress === 2) {
        document.getElementById('description').style.display = "inline-block";
        document.getElementById('form2').style.display = "none";
        document.getElementById('process').style.width = "67%";
        document.getElementById('errortext2').style.display = "none";
        document.getElementById('movingul').style.transform = "translate(0,-74px)";
        document.getElementById('movingnum').style.transform = "translate(0,-48px)";
    }
    // else if (progress===2) {
    //   document.getElementById('errortext2').style.display="block";
    // progress--;
    //}
    if (progress === 3) {
        document.getElementById('process').style.width = "100%";
        document.getElementById('description').style.display = "none";
        document.getElementById('postBtn').style.display = "block";
        document.getElementById('arrow').style.display = "none";
        document.getElementById('errortext2').style.display = "none";
        document.getElementById('movingul').style.transform = "translate(0,-111px)";
        document.getElementById('movingnum').style.transform = "translate(0,-72px)";

        progress = 0;
    }
    progress++;
}