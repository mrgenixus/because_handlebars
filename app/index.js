$(function(){

  var template = Handlebars.templates['post'];

  $.get('/posts.json', function(data){
    var posts = $.map(data.posts, function(post){
      return template(post);
    });

    $('.posts').html(posts);
  });
});
