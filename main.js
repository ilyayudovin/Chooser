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
    var fileButton = document.getElementById('logo');
    var fileButton2 = document.getElementById('logo2');
    var s = 1;

    var counter = 0;
    var img = new Image();
    img.src = localStorage.theImage;

    $("body").on("change", ".classhere", function (e) {

        var fileAll = e.target.files[0];
        var fileName = e.target.files[0].name;
        localStorage.setItem('image' + s, fileName);
        alert(fileName);
        var storageRef = firebase.storage().ref('images/' + fileName);
        var task = storageRef.put(fileAll);
        task.on('state_changed',
            function progress(snapshot) {
            },
            function error(err) {

            },
            function complete() {

            }
        );
        s++;


        var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
        var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

        var reader = new FileReader();
        reader.onload = function (e) {
            // Create a new image.
            var data1;
            var data2;

            var img = new Image();

            img.src = reader.result;
            var ida = img.src;

            function check(value) {
                try {
                    localStorage.setItem('ска', value);
                } catch (e) {
                    if (e.code == 22) {
                        alert('storage is probably full');
                    }
                }
            }

            try {
                localStorage.theImage = reader.result; //stores the image to localStorage
            } catch (e) {
                if (e.code == 22) {
                    alert('storage is probably full2');
                }
            }
            // localStorage.theImage = reader.result; //stores the image to localStorage

            var dataImage = localStorage.getItem('theImage');

            counter = localStorage.getItem('c');
            var postNum = 'post' + postsCounter;

            if (counter % 2 === 1) {
                $(".imagearea1").html(img);
                $('#labelimg').each(function () {
                    var imgURL = $('#imagearea1').find('img').attr('src');
                    $(this).css('background-image', 'url(' + imgURL + ')');
                });
                var bannerImgg = $('#' + postNum).find('.imgnum').find('img')[0];
                bannerImgg.src = dataImage;

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
if (localStorage.getItem('pc') > 1) {
    postsCounter = localStorage.getItem('pc');
}
localStorage.setItem('pc', postsCounter);

var z = 0;
function posting(box) {

        var currentPost,

        pic1Id = 'post' + postsCounter + '_pic1',
        pic2Id = 'post' + postsCounter + '_pic2';

    event.preventDefault();
    event.preventDefault();
    var storage = firebase.storage();

    z++;
    var imagename = localStorage.getItem('image' + z);
    var imgRef = storage.ref('images/' + imagename);
    imgRef.getDownloadURL().then(function (url) {
        var img = $('#' + pic1Id).next('.imgnum').find('img');
        img.src = url;
    });
    $('#' + pic1Id).each(function () {
        var imgURL = $('#' + pic1Id).next('.imgnum').find('img').attr('src');
        $(this).css('background-image', 'url(' + imgURL + ')');
    });

    z++;
    imagename = localStorage.getItem('image' + z);
    imgRef = storage.ref('images/' + imagename);
    imgRef.getDownloadURL().then(function (url) {
        var img2 = $('#' + pic2Id).next('.imgnum').find('img');
        img2.src = url;
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

    var desc = document.getElementById("description").value;
    if (postsCounter === 1 || postsCounter === "1") {
        localStorage.setItem('text1', desc);
    }
    if (postsCounter === 2 || postsCounter === "2") {
        localStorage.setItem('text2', desc);
    }
    if (postsCounter === 3 || postsCounter === "3") {
        localStorage.setItem('text3', desc);
    }

    var descarea = document.getElementById('post' + (postsCounter) + '_script');
    //  descarea.innerHTML = desc;
    //$('#description').val('');
    //if (desc === '') {
    //   document.getElementById('post' +(postsCounter)+'_script').style.height = "0px";
    //  }


    document.getElementById('post' + (postsCounter)).style.display = "block";

    $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

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
    currentPost.find('.description_area').attr('id', 'post' + (postsCounter) + '_script');
    currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
    currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
    currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
    currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
    currentPost.find('.heart1').attr('id', 'post' + (postsCounter) + '_heart1');
    currentPost.find('.heart2').attr('id', 'post' + (postsCounter) + '_heart2');
    currentPost.find('.phonelikes1').attr('id', 'post' + (postsCounter) + '_phonelikes1');
    currentPost.find('.phonelikes2').attr('id', 'post' + (postsCounter) + '_phonelikes2');
    currentPost.find('.stats').attr('id', 'post' + (postsCounter) + '_stats');
    currentPost.find('.statistics1').attr('id', 'post' + (postsCounter) + '_worldicon');
    currentPost.find('.statistics2').attr('id', 'post' + (postsCounter) + '_charticon');
    currentPost.find('.chart-area').attr('id', 'post' + (postsCounter) + '_chart_area');
    currentPost.find('.analytica1').attr('id', 'post' + (postsCounter) + '_regions_div');
    currentPost.find('.analytica2').attr('id', 'post' + (postsCounter) + '_chartContainer');


    document.getElementById('form1').style.display = "inline-block";
    document.getElementById('form2').style.display = "none";
    document.getElementById('description').style.display = "none";
    document.getElementById('postBtn').style.display = "none";
    document.getElementById('process').style.width = "0%";
    document.getElementById('arrow').style.display = "block";
    document.getElementById('movingul').style.transform = "translate(0,0)";
    document.getElementById('movingnum').style.transform = "translate(0,0px)";

    document.getElementById('labelimg').style.backgroundImage = "url()";
    document.getElementById('labelimg2').style.backgroundImage = "url()";

    localStorage.setItem('pc', postsCounter);

    localStorage.setItem('pn', postsCounter - 1);


    if (postsCounter - 1 === 1) {
        localStorage.setItem('show1', true);
    }
    if (postsCounter - 1 === 2) {
        localStorage.setItem('show2', true);
    }
    if (postsCounter - 1 === 3) {
        localStorage.setItem('show3', true);
    }
    //localStorage.setItem('show',true);
    if (document.body.clientWidth < 510) {
        document.getElementById('phonelab').style.display = "none";
        document.getElementById('wall').style.display = "block";
        document.getElementById('postlab').style.display = "none";
        document.getElementById('form1').style.display = "none";
    }


    //}
}

window.onload = function () {
    document.getElementById('post' + 1).style.display="block";
    var post_amount = localStorage.getItem('pn');
    if(post_amount>1){
        for(var i = 2;i<post_amount+1;i++){
            $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
            var currentPost = $('.post').first();
            currentPost.addClass('post' + (i));
            currentPost.addClass('example hoverable');
            currentPost.attr('id', 'post' + (i));
            document.getElementById('post' + i).style.display="block";
        }
    }

  /*  if (localStorage.getItem('pn') > 0) {
        postsCounter = localStorage.getItem('pc');
    }
    localStorage.setItem('c', postsCounter * 2 - 1);
    var show1 = localStorage.getItem('show1');
    if (show1 === 'true') {
        document.getElementById('post1').style.display = "block";
        $('#post1_pic1').each(function () {
            var imgURL = localStorage.getItem('data1');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#post1_pic2').each(function () {
            var imgURL = localStorage.getItem('data2');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        var descarea = document.getElementById('post' + (1) + '_script');
        if (descarea != null) {
            descarea.innerHTML = localStorage.getItem('text1');
        }
    }
    var show2 = localStorage.getItem('show2');
    if (show2 === 'true') {
        $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

        var currentPost = $('.post').first();

        currentPost.addClass('post' + (2));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (2));
        currentPost.find('.pic1').attr('id', 'post' + 2 + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + 2 + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (2));
        currentPost.find('.description_area').attr('id', 'post' + (2) + '_script');
        currentPost.find('.vote1').attr('id', 'post' + (2) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (2) + '_vote2');
        currentPost.find('.heart1').attr('id', 'post' + (2) + '_heart1');
        currentPost.find('.heart2').attr('id', 'post' + (2) + '_heart2');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (2) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (2) + '_mask2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (2) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (2) + '_phonelikes2');
        currentPost.find('.stats').attr('id', 'post' + (2) + '_stats');
        currentPost.find('.statistics1').attr('id', 'post' + (2) + '_worldicon');
        currentPost.find('.statistics2').attr('id', 'post' + (2) + '_charticon');
        currentPost.find('.chart-area').attr('id', 'post' + (2) + '_chart_area');
        currentPost.find('.analytica1').attr('id', 'post' + (2) + '_regions_div');
        currentPost.find('.analytica2').attr('id', 'post' + (2) + '_chartContainer');

        document.getElementById('post2').style.display = "block";
        $('#post2_pic1').each(function () {
            var imgURL = localStorage.getItem('data3');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#post2_pic2').each(function () {
            var imgURL = localStorage.getItem('data4');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        descarea = document.getElementById('post' + (2) + '_script');
        if (descarea != null) {
            descarea.innerHTML = localStorage.getItem('text2');
        }
    }

    var show3 = localStorage.getItem('show3');
    if (show3 === 'true') {
        $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

        currentPost = $('.post').first();

        currentPost.addClass('post' + (3));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (3));
        currentPost.find('.pic1').attr('id', 'post' + 3 + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + 3 + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (3));
        currentPost.find('.description_area').attr('id', 'post' + (3) + '_script');
        currentPost.find('.vote1').attr('id', 'post' + (3) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (3) + '_vote2');
        currentPost.find('.heart1').attr('id', 'post' + (3) + '_heart1');
        currentPost.find('.heart2').attr('id', 'post' + (3) + '_heart2');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (3) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (3) + '_mask2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (3) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (3) + '_phonelikes2');
        currentPost.find('.stats').attr('id', 'post' + (3) + '_stats');
        currentPost.find('.statistics1').attr('id', 'post' + (3) + '_worldicon');
        currentPost.find('.statistics2').attr('id', 'post' + (3) + '_charticon');
        currentPost.find('.chart-area').attr('id', 'post' + (3) + '_chart_area');
        currentPost.find('.analytica1').attr('id', 'post' + (3) + '_regions_div');
        currentPost.find('.analytica2').attr('id', 'post' + (3) + '_chartContainer');

        document.getElementById('post3').style.display = "block";
        $('#post3_pic1').each(function () {
            var imgURL = localStorage.getItem('data5');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#post3_pic2').each(function () {
            var imgURL = localStorage.getItem('data6');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        descarea = document.getElementById('post' + (3) + '_script');
        if (descarea != null) {
            descarea.innerHTML = localStorage.getItem('text3');
        }
    }

    if (localStorage.getItem('pn') > 3) {
        postsCounter = 4;
        localStorage.setItem('pc', postsCounter);
        localStorage.setItem('pn', postsCounter - 1);
    }

    if (localStorage.getItem('pn') === '1') {
        $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
        currentPost = $('.post').first();
        currentPost.addClass('post' + (postsCounter));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (postsCounter));
        currentPost.find('.pic1').attr('id', 'post' + postsCounter + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + postsCounter + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (postsCounter));
        currentPost.find('.description_area').attr('id', 'post' + (postsCounter) + '_script');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (postsCounter) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (postsCounter) + '_phonelikes2');
        currentPost.find('.heart1').attr('id', 'post' + (postsCounter) + '_heart1');
        currentPost.find('.heart2').attr('id', 'post' + (postsCounter) + '_heart2');
        currentPost.find('.stats').attr('id', 'post' + (postsCounter) + '_stats');
        currentPost.find('.statistics1').attr('id', 'post' + (postsCounter) + '_worldicon');
        currentPost.find('.statistics2').attr('id', 'post' + (postsCounter) + '_charticon');
        currentPost.find('.chart-area').attr('id', 'post' + (postsCounter) + '_chart_area');
        currentPost.find('.analytica1').attr('id', 'post' + (postsCounter) + '_regions_div');
        currentPost.find('.analytica2').attr('id', 'post' + (postsCounter) + '_chartContainer');

    }
    if (localStorage.getItem('pn') === '2') {
        $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
        currentPost = $('.post').first();
        currentPost.addClass('post' + (postsCounter));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (postsCounter));
        currentPost.find('.pic1').attr('id', 'post' + postsCounter + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + postsCounter + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (postsCounter));
        currentPost.find('.description_area').attr('id', 'post' + (postsCounter) + '_script');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (postsCounter) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (postsCounter) + '_phonelikes2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.heart1').attr('id', 'post' + (postsCounter) + '_heart1');
        currentPost.find('.heart2').attr('id', 'post' + (postsCounter) + '_heart2');
        currentPost.find('.stats').attr('id', 'post' + (postsCounter) + '_stats');
        currentPost.find('.statistics1').attr('id', 'post' + (postsCounter) + '_worldicon');
        currentPost.find('.statistics2').attr('id', 'post' + (postsCounter) + '_charticon');
        currentPost.find('.chart-area').attr('id', 'post' + (postsCounter) + '_chart_area');
        currentPost.find('.analytica1').attr('id', 'post' + (postsCounter) + '_regions_div');
        currentPost.find('.analytica2').attr('id', 'post' + (postsCounter) + '_chartContainer');
    }
    if (localStorage.getItem('pn') === '3') {
        $("#wall").prepend("<div class='post'><div class='stats'><div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\" style=\"right: 10px\"><i class=\"far fas fa-globe-americas\"></i></div><div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\" style=\"right: 45px\"><i class=\"far fa-chart-bar\"></i></div></div><div class=\"chart-area\" id=\"post1_chart_area\"><div class=\"analytica1\" id=\"regions_div\"></div><div class=\"analytica2\" id=\"chartContainer\"></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
        currentPost = $('.post').first();
        currentPost.addClass('post' + (postsCounter));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (postsCounter));
        currentPost.find('.pic1').attr('id', 'post' + postsCounter + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + postsCounter + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (postsCounter));
        currentPost.find('.description_area').attr('id', 'post' + (postsCounter) + '_script');
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (postsCounter) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (postsCounter) + '_phonelikes2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.heart1').attr('id', 'post' + (postsCounter) + '_heart1');
        currentPost.find('.heart2').attr('id', 'post' + (postsCounter) + '_heart2');
        currentPost.find('.stats').attr('id', 'post' + (postsCounter) + '_stats');
        currentPost.find('.statistics1').attr('id', 'post' + (postsCounter) + '_worldicon');
        currentPost.find('.statistics2').attr('id', 'post' + (postsCounter) + '_charticon');
        currentPost.find('.chart-area').attr('id', 'post' + (postsCounter) + '_chart_area');
        currentPost.find('.analytica1').attr('id', 'post' + (postsCounter) + '_regions_div');
        currentPost.find('.analytica2').attr('id', 'post' + (postsCounter) + '_chartContainer');
    }
*/
    if (post_amount >= 1) {
        var j = i = k = 1;
        var storage = firebase.storage();

        while (!!(imagename = this.localStorage.getItem('image' + i++))) {
            var imgRef = storage.ref('images/' + imagename);
            imgRef.getDownloadURL().then(function (url) {
                console.log("images download");
                console.log(url);
                $('#post' + j + '_pic' + (j * 2 - k)).each(function () {
                    $(this).css('background-image', 'url(' + url + ')');
                });
                // if (i % 2 === 1) {
                //     k = 0;
                // }
                // if (i % 2 === 0) {
                //     j = i / 2;
                //     k = 1;
                // }
            }).catch(function (error) {
                this.alert(error);
            });
        }
        // function loop() {
        //     var imagename = localStorage.getItem('image' + i);
        //     var imgRef = storage.ref('images/' + imagename);
        //     imgRef.getDownloadURL().then(function (url) {
        //         console.log("images download");
        //         console.log(url);

        //         $('#post' + j + '_pic' + (j * 2 - k)).each(function () {
        //             $(this).css('background-image', 'url(' + url + ')');
        //         });
        //         if (i % 2 === 1) {
        //             k = 0;
        //         }
        //         if (i % 2 === 0) {
        //             j = i / 2;
        //             k = 1;
        //         }
        //     })
        //     if (i === post_amount) {

        //     }
        //     else {
        //         loop();
        //     }
        // }
    }

}

function attach1(file) {
    document.getElementById('camera').style.display = "none";
    document.getElementById('deletepic1').style.display = "block";
}

function attach2(file) {
    document.getElementById('camera2').style.display = "none";
    document.getElementById('deletepic2').style.display = "block";
}

function deletepic(clicked_id) {
    if (clicked_id === 'deletepic1') {
        $(".imagearea1").empty();
        document.getElementById('camera').style.display = "block";
        $('#labelimg').each(function () {
            var imgURL = $('#imagearea1').find('img').attr('src');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        var counter = localStorage.getItem('c');
        counter--;
        localStorage.setItem('c', counter);
        document.getElementById(clicked_id).style.display = "none";
    }
    if (clicked_id === 'deletepic2') {
        $(".imagearea2").empty();
        document.getElementById('camera2').style.display = "block";
        $('#labelimg2').each(function () {
            var imgURL = $('#imagearea2').find('img').attr('src');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        counter = localStorage.getItem('c');
        counter--;
        localStorage.setItem('c', counter);
        document.getElementById(clicked_id).style.display = "none";
    }
}

function deletepost(clicked_id) {
    var p = document.getElementById(clicked_id).parentElement.id;
    var e = document.getElementById(p).parentElement.id;
    $('#' + e).remove();
}

function showvotes(clicked_id) {

    var e = document.getElementById(clicked_id).parentElement.id;
    var d = document.getElementById(e).parentElement.id;
    var f = document.getElementById(d).parentElement.id;

    var likes1 = document.getElementById(f + '_vote1');
    var likes2 = document.getElementById(f + '_vote2');
    var counter1 = 1;
    var counter2 = 1;
    if (clicked_id === f + '_heart1') {
        likes1.innerText = counter1;
        counter1++;
    }
    if (clicked_id === f + '_heart2') {
        likes2.innerText = counter2;
        counter2++;
    }
    display = document.getElementById(f + '_vote1').style.display;
    if (display === 'block') {
        document.getElementById(f + '_vote1').style.display = "none";
        document.getElementById(f + '_heart1').style.display = "block";
    }
    else {
        document.getElementById(f + '_vote1').style.display = "block";
        document.getElementById(f + '_heart1').style.display = "none";
    }
    display = document.getElementById(f + '_vote2').style.display;
    if (display === 'block') {
        document.getElementById(f + '_vote2').style.display = "none";
        document.getElementById(f + '_heart2').style.display = "block";
    }
    else {
        document.getElementById(f + '_vote2').style.display = "block";
        document.getElementById(f + '_heart2').style.display = "none";
    }
}

var progress = 1;

function postprocess(box) {

    if (progress === 1) {

        document.getElementById('form2').style.display = "inline-block";
        document.getElementById('form1').style.display = "none";
        document.getElementById('process').style.width = "33%";
        document.getElementById('movingul').style.transform = "translate(0,-37px)";
        document.getElementById('movingnum').style.transform = "translate(0,-24px)";
        document.getElementById('deletepic1').style.display = 'none';

    }

    if (progress === 2) {
        document.getElementById('description').style.display = "inline-block";
        document.getElementById('form2').style.display = "none";
        document.getElementById('process').style.width = "67%";
        document.getElementById('movingul').style.transform = "translate(0,-74px)";
        document.getElementById('movingnum').style.transform = "translate(0,-48px)";
        document.getElementById('deletepic2').style.display = 'none';
    }

    if (progress === 3) {
        document.getElementById('process').style.width = "100%";
        document.getElementById('description').style.display = "none";
        document.getElementById('postBtn').style.display = "block";
        document.getElementById('arrow').style.display = "none";
        document.getElementById('movingul').style.transform = "translate(0,-111px)";
        document.getElementById('movingnum').style.transform = "translate(0,-72px)";

        progress = 0;
    }
    progress++;
}

var getElementsInArea = (function (docElm) {
    var viewportHeight = docElm.clientHeight;

    return function (e, opts) {
        var found = [], i;

        if (e && e.type == 'resize')
            viewportHeight = docElm.clientHeight;

        for (i = opts.elements.length; i--;) {
            var elm = opts.elements[i],
                pos = elm.getBoundingClientRect(),
                topPerc = pos.top / viewportHeight * 100,
                bottomPerc = pos.bottom / viewportHeight * 100,
                middle = (topPerc + bottomPerc) / 2,
                inViewport = middle > opts.zone[1] &&
                    middle < (100 - opts.zone[1]);

            elm.classList.toggle(opts.markedClass, inViewport);

            if (inViewport)
                found.push(elm);
        }
    };
})(document.documentElement);


////////////////////////////////////
// How to use:

window.addEventListener('scroll', f)
window.addEventListener('resize', f)

function f(e) {
    getElementsInArea(e, {
        elements: document.getElementsByClassName('post'),
        markedClass: 'highlight--1',
        zone: [30, 30] // percentage distance from top & bottom
    });

}

function phonepost(box) {
    display = document.getElementById('phonelab').style.display;
    if (display === 'block') {
        document.getElementById('phonelab').style.display = "none";
    }
    else {
        document.getElementById('phonelab').style.display = "block";
    }
    display = document.getElementById('wall').style.display;
    if (display === 'none') {
        document.getElementById('wall').style.display = "block";
    }
    else {
        document.getElementById('wall').style.display = "none";
    }
    display = document.getElementById('postlab').style.display;
    if (display === 'block') {
        document.getElementById('postlab').style.display = "none";
    }
    else {
        document.getElementById('postlab').style.display = "block";
    }

    display = document.getElementById('form1').style.display;
    if (display === 'block') {
        document.getElementById('form1').style.display = "none";
    }
    else {
        document.getElementById('form1').style.display = "inline-block";
    }
}

function phonelikes(clicked_id) {
    document.getElementById(clicked_id).style.color = "#8ad5d8";
    var e = document.getElementById(clicked_id).parentElement.id;
    var p = document.getElementById(e).parentElement.id;
    if (e === p + '_pic1') {
        document.getElementById(p + '_pic1').style.boxShadow = "3px 3px 0px rgb(138, 213, 216), -3px -3px 0px rgb(138,213,216),3px -3px 0px rgb(138, 213, 216), -3px 3px 0px rgb(138,213,216)";
    }
    if (e === p + '_pic2') {
        document.getElementById(p + '_pic2').style.boxShadow = "3px 3px 0px rgb(138, 213, 216), -3px -3px 0px rgb(138,213,216),3px -3px 0px rgb(138, 213, 216), -3px 3px 0px rgb(138,213,216)";
    }
    $('#' + p + '_phonelikes1').fadeOut(1000);
    $('#' + p + '_phonelikes2').fadeOut(1000);
}


function hideintro(box) {
    display = document.getElementById('intro').style.display;
    if (display === 'none') {
        document.getElementById('intro').style.display = "block";
    }
    else {
        document.getElementById('intro').style.display = "none";
    }
    display = document.getElementById('basicExampleNav').style.display;
    if (display === 'block') {
        document.getElementById('basicExampleNav').style.display = "none";
    }
    else {
        document.getElementById('basicExampleNav').style.display = "block";
    }
    $('ul li').each(function (i) {
        $(this).css('display', 'block');
    });
}

var clicked1 = true;
var clicked2 = true;

function showchart(clicked_id) {
    $(window).resize(function () {
        drawRegionsMap();
    });
    var e = document.getElementById(clicked_id).parentElement.id;
    var p = document.getElementById(e).parentElement.id;

    if ((clicked1 === true && clicked2 === true) || (clicked1 === true && clicked2 === false && clicked_id === p + '_charticon') || (clicked1 === false && clicked2 === true && clicked_id === p + '_worldicon')) {
        display = document.getElementById(p + '_pic1').style.display;
        if (display === 'none') {
            document.getElementById(p + '_pic1').style.display = "block";
        }
        else {
            document.getElementById(p + '_pic1').style.display = "none";
        }
        display = document.getElementById(p + '_pic2').style.display;
        if (display === 'none') {
            document.getElementById(p + '_pic2').style.display = "block";
        }
        else {
            document.getElementById(p + '_pic2').style.display = "none";
        }
        display = document.getElementById(p + '_script').style.display;
        if (display === 'none') {
            document.getElementById(p + '_script').style.display = "block";
        }
        else {
            document.getElementById(p + '_script').style.display = "none";
        }
        display = document.getElementById(p + '_chart_area').style.display;
        if (display === 'block') {
            document.getElementById(p + '_chart_area').style.display = "none";
        }
        else {
            document.getElementById(p + '_chart_area').style.display = "block";
        }
    }
    if (clicked_id === p + '_worldicon') {
        document.getElementById(p + '_regions_div').style.display = "block";

        //google geo charts
        google.charts.load('current', {
            'packages': ['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Likes'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);

            var options = {
                backgroundColor: 'whitesmoke',
                defaultColor: '#f5f5f5',
                colorAxis: {colors: ['#8ad5d8']},
            };

            var chart = new google.visualization.GeoChart(document.getElementById(p + '_regions_div'));

            chart.draw(data, options);

        }

        //finish geochart

        if (clicked1) {
            document.getElementById(p + '_worldicon').style.color = '#8ad5d8';
            if (clicked2 === false) {
                document.getElementById(p + '_charticon').style.color = 'black';
                clicked2 = true;
                document.getElementById(p + '_chartContainer').style.display = "none";
                document.getElementById(p + '_chart_area').style.display = "block";
            }
            clicked1 = false;
        } else {
            document.getElementById(p + '_worldicon').style.color = 'black';
            clicked1 = true;
            document.getElementById(p + '_regions_div').style.display = "none";
        }

    }
    if (clicked_id === p + '_charticon') {
        document.getElementById(p + '_chartContainer').style.display = "block";

        //bars cahrts

        var chart = new CanvasJS.Chart(p + "_chartContainer", {
            animationEnabled: true,
            backgroundColor: "whitesmoke",
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                type: "column",
                color: "#8ad5d8",
                name: "Men likes",
                legendText: "Men",
                showInLegend: true,
                dataPoints: [
                    {label: "Image1", y: 266},
                    {label: "Image2", y: 302},

                ]
            },
                {
                    type: "column",
                    color: "lightpink",
                    name: "Women likes",
                    legendText: "Women",
                    showInLegend: true,
                    dataPoints: [
                        {label: "Image1", y: 100},
                        {label: "Image2", y: 200},

                    ]
                }]
        });
        chart.render();

        function toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }

        //finish bars chart
        if (clicked2) {
            document.getElementById(p + '_charticon').style.color = '#8ad5d8';
            if (clicked1 === false) {
                document.getElementById(p + '_worldicon').style.color = 'black';
                clicked1 = true;
                document.getElementById(p + '_regions_div').style.display = "none";
            }
            clicked2 = false;
        } else {
            document.getElementById(p + '_charticon').style.color = 'black';
            clicked2 = true;
            document.getElementById(p + '_chartContainer').style.display = "none";

        }

    }

}
