import Ember from 'ember';

export default Ember.Service.extend({
  posts: [],

  favorite(post) {
    this.get('posts').pushObject(post);
  }
});
