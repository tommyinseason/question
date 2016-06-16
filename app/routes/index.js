import Ember from 'ember';

var posts = [{
  id: 1,
  author: "Veruca Salt",
  question: "San Francisco",
  notes: "Estate",
}, {
  id: 2,
  author: "Mike TV",
  question: "Seattle",
  notes: "Condo",
}, {
  id: 3,
  author: "Violet Beauregarde",
  question: "Portland",
  notes: "Apartment",
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
