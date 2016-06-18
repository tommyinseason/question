import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save3(params) {
     var newAnswer = this.store.createRecord('answer', params);
     newAnswer.save();
     this.transitionTo('answer');
   },

    addPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
