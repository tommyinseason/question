import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),

  actions: {
    addToFavs(post) {
      this.get('favoritePosts').add(post);
    }
  }
});
