/*function getScrollXY() {
    var scrOfX = 0, scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
var n=0;
document.addEventListener("scroll", function (event) {
    if (getDocHeight() - 20 <= getScrollXY()[1] + window.innerHeight)
    {
        var oldcontent = document.getElementById('wall');
        oldcontent.innerHTML = oldcontent.innerHTML + '<div class="post"><div class="pic1"></div>' + '<div class="imgnum"><img src="" class="tableBanner1"></div>' +'<div class="pic2"></div>'+'<div class="imgnum"><img src="" class="tableBanner2"></div><div class="vote1" id="post1_vote1" onclick="voting1(this)">0 votes</div><div class="vote2" id="post1_vote2" onclick="voting2(this)">0 votes</div></div>';
        document.getElementById("wall").innerHTML=oldcontent.innerHTML;

        $('.post').each(function(i){
            var currentIndex = i + 1;
            $(this).addClass('post' + (currentIndex));
            $(this).attr('id', 'post' + (currentIndex));
            $(this).find('.pic1').attr('id', 'post' + currentIndex + '_pic1');
            $(this).find('.pic2').attr('id', 'post' + currentIndex + '_pic2');
            $(this).find('.vote1').attr('id', 'post' + currentIndex + '_vote1');
            $(this).find('.vote2').attr('id', 'post' + currentIndex + '_vote2');
        });
    }
});
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop();
 i = stack.pop(); // stack is now [2]
// stack is now [2]*/
