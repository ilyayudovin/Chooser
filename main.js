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
                if (postsCounter === 1) {
                    localStorage.setItem('data1', data1);
                }
                if (postsCounter === '2') {
                    localStorage.setItem('data3', data1);
                }
                if (postsCounter === '3') {
                    localStorage.setItem('data5', data1);
                }
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
                if (postsCounter === 1) {
                    localStorage.setItem('data2', data2);
                }
                if (postsCounter === '2') {
                    localStorage.setItem('data4', data2);
                }
                if (postsCounter === '3') {
                    localStorage.setItem('data6', data2);
                }
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
        if (postsCounter === 1) {
            localStorage.setItem('text1', desc);
        }
        if (postsCounter === 2) {
            localStorage.setItem('text2', desc);
        }
        if (postsCounter === 3) {
            localStorage.setItem('text3', desc);
        }

        var descarea = document.getElementById('description_area script' + (postsCounter));
        descarea.innerHTML = desc;
        $('#description').val('');
        if (desc === '') {
            document.getElementById('description_area script' + (postsCounter)).style.height = "0px";
        }

        //localStorage.setItem('show', 'true');


        document.getElementById('post' + (postsCounter)).style.display = "block";

        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask1'><i class='fas fa-heart' id='heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1'></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='mask2'><i class='fas fa-heart' id='heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2'></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

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
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.fa_heart').attr('id', 'post' + (postsCounter) + 'heart1');
        currentPost.find('.fa_heart').eq(1).attr('id', 'post' + (postsCounter) + 'heart2');
        currentPost.find('.phonelikes1').attr('id', 'post' + (postsCounter) + '_phonelikes1');
        currentPost.find('.phonelikes2').attr('id', 'post' + (postsCounter) + '_phonelikes2');


        document.getElementById('form1').style.display = "block";
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


    }
}

window.onload = function () {
    if (localStorage.getItem('pn') > 0) {
        postsCounter = localStorage.getItem('pc');
    }
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
        var descarea = document.getElementById('description_area script' + (1));
        if (descarea != null) {
            descarea.innerHTML = localStorage.getItem('text1');
        }
    }
    var show2 = localStorage.getItem('show2');
    if (show2 === 'true') {
        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post2_mask1'><i class='fas fa-heart' id='post2_heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' id='post2_phonelikes1'></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post2_mask2'><i class='fas fa-heart' id='post2_heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' id='post2_phonelikes2'></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

        var currentPost = $('.post').first();

        currentPost.addClass('post' + (2));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (2));
        currentPost.find('.pic1').attr('id', 'post' + 2 + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + 2 + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (2));
        currentPost.find('.description_area').attr('id', 'description_area script' + (2));
        currentPost.find('.vote1').attr('id', 'post' + (2) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (2) + '_vote2');

        document.getElementById('post2').style.display = "block";
        $('#post2_pic1').each(function () {
            var imgURL = localStorage.getItem('data3');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#post2_pic2').each(function () {
            var imgURL = localStorage.getItem('data4');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        descarea = document.getElementById('description_area script' + (2));
        if (descarea != null) {
            descarea.innerHTML = localStorage.getItem('text2');
        }
    }

    var show3 = localStorage.getItem('show3');
    if (show3 === 'true') {
        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post3_mask1'><i class='fas fa-heart' id='post3_heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' id='post3_phonelikes1'></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2'ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post3_mask2'><i class='fas fa-heart' id='post3_heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' id='post3_phonelikes2'></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");

        currentPost = $('.post').first();

        currentPost.addClass('post' + (3));
        currentPost.addClass('example hoverable');
        currentPost.attr('id', 'post' + (3));
        currentPost.find('.pic1').attr('id', 'post' + 3 + '_pic1');
        currentPost.find('.pic1').addClass('view overlay');
        currentPost.find('.pic2').attr('id', 'post' + 3 + '_pic2');
        currentPost.find('.pic2').addClass('view overlay');
        currentPost.find('.description_area').addClass('script' + (3));
        currentPost.find('.description_area').attr('id', 'description_area script' + (3));
        currentPost.find('.vote1').attr('id', 'post' + (3) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (3) + '_vote2');

        document.getElementById('post3').style.display = "block";
        $('#post3_pic1').each(function () {
            var imgURL = localStorage.getItem('data5');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        $('#post3_pic2').each(function () {
            var imgURL = localStorage.getItem('data6');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
        descarea = document.getElementById('description_area script' + (3));
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
        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post2_mask1'><i class='fas fa-heart' id='post2_heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' id='post2_phonelikes1'></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post2_mask2'><i class='fas fa-heart' id='post2_heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' id='post2_phonelikes2'></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
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
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.fa_heart').attr('id', 'post' + (postsCounter) + 'heart1');
        currentPost.find('.fa_heart').eq(1).attr('id', 'post' + (postsCounter) + 'heart2');

    }
    if (localStorage.getItem('pn') === '2') {
        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post3_mask1'><i class='fas fa-heart' id='post3_heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' id='post3_phonelikes1' ></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post3_mask2'><i class='fas fa-heart' id='post3_heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' id='post3_phonelikes2'></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
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
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.fa_heart').attr('id', 'post' + (postsCounter) + 'heart1');
        currentPost.find('.fa_heart').eq(1).attr('id', 'post' + (postsCounter) + 'heart2');
    }

    if (localStorage.getItem('pn') === '3') {
        $("#wall").prepend("<div class='post'><div class='pic1' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post4_mask1'><i class='fas fa-heart' id='post4_heart1' onclick='showvotes(this.id)'></i><div class='votes vote1' id='vote'>0</div></div><i class='fas fa-heart phonelikes1' id='post4_phonelikes1' ></i></div><div class='imgnum'><img src='' class='tableBanner1'></div><div class='pic2' ondblclick='maskshow(this.id)'><div class='mask flex-center rgba-stylish-strong' id='post4_mask2'><i class='fas fa-heart' id='post4_heart2' onclick='showvotes(this.id)'></i><div class='votes vote2' id='vote'>0</div></div><i class='fas fa-heart phonelikes2' id='post4_phonelikes2' ></i></div><div class='imgnum'><img src='' class='tableBanner2'></div><div id='description_area' class='description_area'></div></div>");
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
        currentPost.find('.rgba-stylish-strong').attr('id', 'post' + (postsCounter) + '_mask1');
        currentPost.find('.rgba-stylish-strong').eq(1).attr('id', 'post' + (postsCounter) + '_mask2');
        currentPost.find('.vote1').attr('id', 'post' + (postsCounter) + '_vote1');
        currentPost.find('.vote2').attr('id', 'post' + (postsCounter) + '_vote2');
        currentPost.find('.fa_heart').attr('id', 'post' + (postsCounter) + 'heart1');
        currentPost.find('.fa_heart').eq(1).attr('id', 'post' + (postsCounter) + 'heart2');
    }

}

function attach1(file) {
    document.getElementById('camera').style.display = "none";
}

function attach2(file) {
    document.getElementById('camera2').style.display = "none";

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

function likescount(clicked_id) {

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
    position = document.getElementById('postlab').style.position = "absolute";

    display = document.getElementById('form1').style.display;
    if (display === 'block') {
        document.getElementById('form1').style.display = "none";
    }
    else {
        document.getElementById('form1').style.display = "block";
    }
}

function maskshow(clicked_id) {
    if (document.body.clientWidth < 510) {
        var e = document.getElementById(clicked_id).parentElement.id;
        if (clicked_id === e + '_pic1') {
            document.getElementById(e + '_phonelikes1').style.display = "block";
            $('#' + e + '_phonelikes1').fadeOut(1000);
            document.getElementById(e + '_pic1').style.boxShadow = "3px 3px 0px rgb(138, 213, 216), -3px -3px 0px rgb(138,213,216),3px -3px 0px rgb(138, 213, 216), -3px 3px 0px rgb(138,213,216)";
        }
        if (clicked_id === e + '_pic2') {
            document.getElementById(e + '_phonelikes2').style.display = "block";
            $('#' + e + '_phonelikes2').fadeOut(1000);
            document.getElementById(e + '_pic2').style.boxShadow = "3px 3px 0px rgb(138, 213, 216), -3px -3px 0px rgb(138,213,216),3px -3px 0px rgb(138, 213, 216), -3px 3px 0px rgb(138,213,216)";
        }
    }
}

$(document).ready(function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['image1','image2'],
            datasets: [{
                label: '1 image',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 0],
            },
                {
                    label: '2 image',
                    backgroundColor: '#8ad5d8',
                    borderColor: '#8ad5d8',
                    data: [0, 10],
                }]
        },
        options: {}
    })
});