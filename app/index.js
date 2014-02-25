$(function(){
  var source = $("#post-template").remove().html();
  var template = Handlebars.compile(source);

  $.get('/posts.json', function(data){
    var posts = $.map(data.posts, function(post){
      return template(post);
    });

    $('.posts').html(posts);
  });
});