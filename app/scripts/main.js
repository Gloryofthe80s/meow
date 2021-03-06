$(document).ready(function () {

  // apply responsive text fitting to banner lead text
  $(".lead").fitText(.8, { minFontSize: '14px', maxFontSize: '100px' });

  // this is incredibly verbose, but since there are only 3 posts, we just want each view to be responsible for itself with event delegation coming from the BackBone Views themselves.
  var initializeBlogPosts = function() {
    var article1 = new BlogPost(); //default model

    var article2 = new BlogPost({
      boxColor : 'secondary',
      title : 'Summer Sampler: 10 best places around the house to get the most out of the depleting summer sun.'
    });

    var article3 = new BlogPost({
      boxColor : 'tertiary',
      title : 'Fish Friday: Not just for Lent anymore. Find the fishiest Friday fish fry in your alley.'
    });

    new BlogPostView({model: article1});
    new BlogPostView({model: article2});
    new BlogPostView({model: article3});
  };

  initializeBlogPosts();

  // toggle css drawers of footer contents in mobile views
  $('.links-title-container').on('click', function() {
    $(this).siblings('ul').toggleClass('active');
    $(this).toggleClass('active');
    $(this).children('span').toggleClass('active');
  });

});