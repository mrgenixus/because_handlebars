$(function(){
  
  var template = Handlebars.template['post.hb.html'];

  $.get('/posts.json', function(data){
    var posts = $.map(data.posts, function(post){
      return template(post);
    });

    $('.posts').html(posts);
  });
});