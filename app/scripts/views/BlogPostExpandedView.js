// This is the expanded view (a separate div) that displays full
// post body copy.

var BlogPostExpandedView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-md-12',

    createTemplate: _.template($('#full-article-template').text()),

    removeSelf : function() {
        this.remove();
    },

    events: {
        'click .post-close-btn' : 'removeSelf'
    },

    initialize: function() {
        $('.full-article-container').html('');
        $('.full-article-container').append(this.el);

        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.html(renderedTemplate);
    }
});