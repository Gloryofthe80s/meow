// This is the "blurb" view, used to tease the article. Click "read more"
// to create the BlogPostExpandedView (a separate div).

var BlogPostView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-md-4 col-sm-4',

    createTemplate: _.template($('#blog-blurb-template').text()),

    expandPost: function() {
            //pass the clicked DOM element to the expanded view in the options obj
            var theClickedPost = this.$el;
            new BlogPostExpandedView({model: this.model, clickedPost: theClickedPost});
        },

    events: {
        'click .post-expand-btn' : 'expandPost'
    },

    initialize: function() {
        $('#blog-posts').find('.row').append(this.el);

        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.append(renderedTemplate);
    }
});