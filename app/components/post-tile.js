import Ember from 'ember';

export default Ember.Component.extend({
  topPosts: Ember.inject.service(),

  actions: {
    addToTopPosts(topPost) {
      this.get('topPosts').add(topPost);
    },
  }
});
