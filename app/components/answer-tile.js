import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "GodZilla",
        answer: this.get('answer') ? this.get('answer') : "Ready to Die?",
        question: this.get('post')
      };
      this.sendAction('save', params);
      this.set("show", false);
      this.set('author', '');
      this.set('answer', '');
    },

    showForm() {
      this.set("show", true);
    }
  }
});
