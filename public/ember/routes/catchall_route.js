App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('item', {
            urlSegment: params.url
        });
    }
});