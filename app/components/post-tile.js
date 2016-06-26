import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.Service(),

  fullInfo: Ember.computed('post.author', 'post.question', 'post.cost', function() {
    return this.get('post.author') + ', ' + this.get('post.question') + ', $' + this.get('post.cost');
  }),
    actions: {
      addToFavs(post){
        this.get('favoritePosts').add(post);
      }
    }
});
