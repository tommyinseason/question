import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    addPost() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.set('addNewPost', false);
      this. sendAction('addPost', params);
    }
  }
});
