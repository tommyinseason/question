import Ember from 'ember';

export function postCost(params) {
  var postPrice = params[0].get('cost');

  if(postPrice >= 150){
    return '$$$$';
  } else if (postPrice >= 100){
    return '$$$';
  } else if (postPrice >= 50){
    return '$$';
  } else if (postPrice <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(postCost);
