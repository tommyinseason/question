import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('answer');
  this.route('topposts');
  this.route('favorites');
});

export default Router;
