import Ember from 'ember';

export default Ember.Component.extend({

  fullInfo: Ember.computed('post.author', 'post.question', 'post.cost', function() {
    return this.get('post.author') + ', ' + this.get('post.question') + ', $' + this.get('post.cost');
  })
});
