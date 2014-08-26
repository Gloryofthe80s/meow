// This is the expanded view (a separate div) that displays full
// post body copy.

var BlogPostExpandedView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-md-12 expanded-blog-post',

    createTemplate: _.template($('#full-article-template').text()),

    removeSelf : function() {
        this.remove();
        $('#blog-posts').find('.expanded-blog-post').remove();
    },

    events: {
        'click .post-close-btn' : 'removeSelf'
    },

    initialize: function(options) {
        //accept an options obj at instantiation
        this.options = options || {};

        var clickedPost = this.options.clickedPost;

        //check where to place the view based on screen width
        if (matchMedia('only screen and (max-width: 768px)').matches ||
            matchMedia('only screen and (max-device-width: 480px)').matches) {
            //kill this view in case content was there already
            $('.full-article-container').html('');
            //clear html if article already expanded
            if(clickedPost.siblings('.expanded-blog-post')) {
                clickedPost.siblings('.expanded-blog-post').html('');
            };
            //place the article directly below the blurb that was clicked
            clickedPost.after('').after(this.el);
        } else {
            //standard behavior
            $('.full-article-container').html('');
            $('.full-article-container').append(this.el);
        }

        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.html(renderedTemplate);
    }
});