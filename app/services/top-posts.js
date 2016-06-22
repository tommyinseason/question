import Ember from 'ember';

export default Ember.Service.extend({
  topPosts : [],

  add(topPost) {
    this.get('topPosts').pushObject(topPost);
  }
});
