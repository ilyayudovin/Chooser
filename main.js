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
    var counter = 0;
    var s= localStorage.getItem('s');
    if(s===null){
        s=1;
        localStorage.setItem('s',s);
    }
    var img = new Image();
    img.src = localStorage.theImage;

    $("body").on("change", ".classhere", function (e) {
        var fileAll = e.target.files[0];
        var fileName = e.target.files[0].name;
        var s= localStorage.getItem('s');
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
                $('#labelimg1').each(function () {
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


    document.getElementById('postgroup' + (postsCounter)).style.display = "-webkit-box";

    $("#wall").prepend("<div class='postgroup'><div class='post'><div class='stats'><div class='statistics3' onclick='openchart(this.id);'><i class=\"fas fa-bars\"></i></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div><div class=\" animated fadeInLeft\" alt=\"Transparent MDB Logo\"><div class=\"stats\" id=\"post1_stats\">\n" + "<div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\"><i class=\"far fas fa-globe-americas\"></i></div>\n" + "<div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\"><i class=\"far fa-chart-bar\"></i></div>\n" + "</div>\n" + "<div class=\"chart-area\">\n" + "<div class=\"analytica1\"></div>\n" + "<div class=\"analytica2\"></div>\n" + "</div></div></div>");

    postsCounter++;
    currentPost = $('.post').first();
    var postgroup = $('.postgroup').first();
    var animated = $('.animated').first();

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
    currentPost.find('.stats').attr('id', 'post' + (postsCounter) + '_showstats');
    animated.find('.stats').attr('id', 'post' + (postsCounter) + '_stats');
    animated.find('.statistics1').attr('id', 'post' + (postsCounter) + '_worldicon');
    animated.find('.statistics2').attr('id', 'post' + (postsCounter) + '_charticon');
    currentPost.find('.statistics3').attr('id', 'post' + (postsCounter) + '_open');
    animated.find('.chart-area').attr('id', 'post' + (postsCounter) + '_chart_area');
    animated.find('.analytica1').attr('id', 'post' + (postsCounter) + '_regions_div');
    animated.find('.analytica2').attr('id', 'post' + (postsCounter) + '_chartContainer');
    postgroup.find('.animated').attr('id', 'animated-post'+ (postsCounter));

    postgroup.addClass('postgroup' + postsCounter);
    postgroup.attr('id', 'postgroup' + postsCounter);



    document.getElementById('form1').style.display = "inline-block";
    document.getElementById('form2').style.display = "none";
    document.getElementById('postingspan').style.display = "none";

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

    document.getElementById('1stepcircle').innerHTML="1";
    document.getElementById('2stepcircle').innerHTML="2";
    document.getElementById('3stepcircle').innerHTML="3";

    //}
}

window.onload = function () {
  //  document.getElementById('postgroup' + 1).style.display="-webkit-box";
    var post_amount = +localStorage.getItem('pn');
    var x=post_amount*2+1;
    localStorage.setItem('s',x);
    if(post_amount>1 || post_amount===1){
        document.getElementById('postgroup' + 1).style.display="-webkit-box";
        for(var i = 2;i<post_amount+2;i++){
            $("#wall").prepend("<div class='postgroup'><div class='post'><div class='stats'><div class='statistics3' onclick='openchart(this.id);'><i class=\"fas fa-bars\"></i></div></div><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='heart1 fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='heart2 fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' onclick=\"phonelikes(this.id);\"></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div><div class=\" animated fadeInLeft\" alt=\"Transparent MDB Logo\"><div class=\"stats\" id=\"post1_stats\">\n" + "<div class=\"statistics1\" id=\"post1_worldicon\" onclick=\"showchart(this.id);\"><i class=\"far fas fa-globe-americas\"></i></div>\n" + "<div class=\"statistics2\" id=\"post1_charticon\" onclick=\"showchart(this.id);\"><i class=\"far fa-chart-bar\"></i></div>\n" + "</div>\n" + "<div class=\"chart-area\">\n" + "<div class=\"analytica1\"></div>\n" + "<div class=\"analytica2\"></div>\n" + "</div></div></div>");
            var currentPost = $('.post').first();
            var postgroup = $('.postgroup').first();
            var animated = $('.animated').first();
            currentPost.addClass('post' + (i));
            currentPost.addClass('example hoverable');
            currentPost.attr('id', 'post' + (i));
            currentPost.find('.pic1').attr('id', 'post' + i + '_pic1');
            currentPost.find('.pic1').addClass('view overlay');
            currentPost.find('.pic2').attr('id', 'post' + i + '_pic2');
            currentPost.find('.pic2').addClass('view overlay');
            currentPost.find('.description_area').addClass('script' + (i));
            currentPost.find('.description_area').attr('id', 'post' + (i) + '_script');
            currentPost.find('.vote1').attr('id', 'post' + (i) + '_vote1');
            currentPost.find('.vote2').attr('id', 'post' + (i) + '_vote2');
            currentPost.find('.heart1').attr('id', 'post' + (i) + '_heart1');
            currentPost.find('.heart2').attr('id', 'post' + (i) + '_heart2');
            currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (i) + '_mask1');
            currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (i) + '_mask2');
            currentPost.find('.phonelikes1').attr('id', 'post' + (i) + '_phonelikes1');
            currentPost.find('.phonelikes2').attr('id', 'post' + (i) + '_phonelikes2');
            currentPost.find('.stats').attr('id', 'post' + (i) + '_showstats');
            animated.find('.stats').attr('id','post' + (i) + '_stats');
            animated.find('.statistics1').attr('id', 'post' + (i) + '_worldicon');
            animated.find('.statistics2').attr('id', 'post' + (i) + '_charticon');
            currentPost.find('.statistics3').attr('id', 'post' + (i) + '_open');
            animated.find('.chart-area').attr('id', 'post' + (i) + '_chart_area');
            animated.find('.analytica1').attr('id', 'post' + (i) + '_regions_div');
            animated.find('.analytica2').attr('id', 'post' + (i) + '_chartContainer');
            postgroup.find('.animated').attr('id', 'animated-post'+ (i));
            postgroup.addClass('postgroup' + i);
            postgroup.attr('id', 'postgroup' + i);
            document.getElementById('postgroup' + i).style.display="-webkit-box";
        }
       // post_amount++;
        document.getElementById('postgroup' + (post_amount+1)).style.display="none";
    }


    if (post_amount >= 1) {
        var j = 1;
        var k = 2;
        var storage = firebase.storage();
        let loop=1;
        for(let i=1;i!==post_amount*2+1;i++) {
            // while (!!(imagename = this.localStorage.getItem('image' + i++))) {
            let imagename = localStorage.getItem('image' + i);
            var imgRef = storage.ref('images/' + imagename);
            imgRef.getDownloadURL().then(function (url) {
                console.log("images download");
                console.log(url);
                if(loop===post_amount*2){
                    $('#post' + 1 + '_pic' + 1).each(function () {
                        $(this).css('background-image', 'url(' + url + ')');
                    });
                }
                $('#post' + j + '_pic' + k).each(function () {
                    $(this).css('background-image', 'url(' + url + ')');
                });
                loop++;
                if(k===1){
                    k++;
                }
                else{
                    k--;
                    j++;
                }
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

    }

}

function attach1(file) {
    document.getElementById('1stepcircle').innerHTML="&#10004";
    document.getElementById('label1').style.display="none";
    document.getElementById('labelimg1').style.display="block";
}

function attach2(file) {
    document.getElementById('label2').style.display="none";
    document.getElementById('labelimg2').style.display="block";
    document.getElementById('2stepcircle').innerHTML="&#10004";
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
        var s= localStorage.getItem('s');
        s=+s;
        s--;
        localStorage.setItem('s',s);
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
        s= localStorage.getItem('s');
        s=+s;
        s--;
        localStorage.setItem('s',s);
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


        var s= localStorage.getItem('s');
        s=+s;
        s++;
        localStorage.setItem('s',s);

    }

    if (progress === 2) {
        document.getElementById('description').style.display = "inline-block";
        document.getElementById('form2').style.display = "none";
        s= localStorage.getItem('s');
        s=+s;
        s++;
        localStorage.setItem('s',s);
    }

    if (progress === 3) {
        document.getElementById('3stepcircle').innerHTML="&#10004";
        document.getElementById('description').style.display = "none";
        document.getElementById('postingspan').style.display = "block";
        document.getElementById('stepperbtn').innerHTML="post";
    }
    if(progress===4){
        document.getElementById('stepperbtn').innerHTML="next";
        document.getElementById('postingspan').style.display = "none";
        document.getElementById('form1').style.display = "block";
        document.getElementById('labelimg1').style.display="none";
        document.getElementById('labelimg2').style.display="none";
        document.getElementById('label1').style.display="block";
        document.getElementById('label2').style.display="block";
        document.getElementById('1stepcircle').innerHTML="1";
        document.getElementById('2stepcircle').innerHTML="2";
        document.getElementById('3stepcircle').innerHTML="3";
        document.getElementById('tan').style.display="none";
        document.getElementById('postlabbottom').style.display="none";
        document.getElementById('postlab').style.zIndex="2";
        progress=0;
        posting();
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
        elements: document.getElementsByClassName('postgroup'),
        markedClass: 'highlight--1',
        zone: [30, 30] // percentage distance from top & bottom
    });
}

//13px 8px 17px 0 rgba(0,0,0,.2), 0 6px 12px 0 rgba(0,0,0,.19)
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
var open=false;
function  openchart(clicked_id) {
    var i=document.getElementById(clicked_id).parentElement.id;
    var i2=document.getElementById(i).parentElement.id;
    var i3=document.getElementById(i2).parentElement.id;

    if(open===true){
        document.getElementById(i3).style.width="650px";
        setTimeout(function(){
            document.getElementById('animated-'+(i2)).style.display="none";
            }, 1000);
        open=false;
        document.getElementById(i3).style.transform="translate(0px,0px)";
        document.getElementById(clicked_id).style.color="black";



    }
    else{
        document.getElementById(i3).style.transform="translate(-300px,0px)";
        document.getElementById('animated-'+(i2)).style.display="-webkit-box";
        document.getElementById(clicked_id).style.color="#8ad5d8";
        open=true;
        document.getElementById(i3).style.width="1300px";
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

function tanscreen() {
    document.getElementById('postlab').style.zIndex="10";
    document.getElementById('tan').style.display="block";
    document.getElementById('postlabbottom').style.display="block";
}
function hidetan() {
    document.getElementById('tan').style.display="none";
    document.getElementById('postlab').style.zIndex="2";
    document.getElementById('postlabbottom').style.display="none";
}
function deleteimg(clicked_id) {
    let counter=+localStorage.getItem('c');
    counter--;
    localStorage.setItem('c',counter);
    if(clicked_id==='removepic1'){
        document.getElementById('label1').style.display="block";
        document.getElementById('labelimg1').style.display="none";
        document.getElementById('1stepcircle').innerHTML="1";
    }
    else{
        document.getElementById('label2').style.display="block";
        document.getElementById('labelimg2').style.display="none";
        document.getElementById('2stepcircle').innerHTML="2";
    }
}
function showchart(clicked_id) {

    var e = document.getElementById(clicked_id).parentElement.id;
    var l = document.getElementById(e).parentElement.id;
    var p=document.getElementById(l).previousElementSibling.id;

    if(clicked_id=== p + '_charticon'){
        document.getElementById(clicked_id).style.color="#8ad5d8";
        document.getElementById(p+'_worldicon').style.color="black";
        document.getElementById(p+'_chartContainer').style.display="block";
        document.getElementById(p+'_regions_div').style.display="none";
    }
    if(clicked_id===p + '_worldicon'){
        document.getElementById(clicked_id).style.color="#8ad5d8";
        document.getElementById(p+'_charticon').style.color="black";
        document.getElementById(p+'_chartContainer').style.display="none";
        document.getElementById(p+'_regions_div').style.display="block";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        document.getElementById('tan').style.display="none";
        document.getElementById('postlab').style.zIndex="2";
        document.getElementById('postlabbottom').style.display="none";

    }
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById('navbar').style.height="60px";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById('navbar').style.height="80px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}