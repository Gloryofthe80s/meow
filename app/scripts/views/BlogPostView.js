// This is the "blurb" view, used to tease the article. Click "read more"
// to create the BlogPostExpandedView (a separate div).

var BlogPostView = Backbone.View.extend({
    tagName: 'div',
    className: 'blog-post-contents',

    createTemplate: _.template($('#player-score-template').text()),

    events: {

    },

    initialize: function() {
        $('#answer').append(this.el);

        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.html(renderedTemplate);

        rendered.hide().fadeIn('slow');
    }
});