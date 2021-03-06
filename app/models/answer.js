import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  post: DS.belongsTo('post', { async:true })
});
