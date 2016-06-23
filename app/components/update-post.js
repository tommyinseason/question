import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
          author: this.get('author'),
          question: this.get('question'),
          notes: this.get('notes'),
          cost: this.get('cost')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
