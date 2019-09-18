$(function () {
    var $posts=$('#posts');

    $.ajax({
        type:'GET',
        url: "/api/posts",
        success:function (posts) {
            $.each(posts,function (i,post) {
                $posts.append(post);
            })
        }
    });
    $('#postbtn').on('click',function () {
        var post = {
            postdiv: document.createElement("div"),
        };
        $.ajax({
            type:'POST',
            url: "/api/posts",
            data:post,
            success:function (newpost) {
                $posts.append(newpost);
            }
        })
    });
})