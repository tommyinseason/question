import Ember from 'ember';

export default Ember.Component.extend({
  favoritePost: Ember.inject.service(),

  actions: {
    addToFavs(post) {
      this.get('favoritePost').add(post);
    }
  }
});
