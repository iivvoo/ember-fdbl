/**
 * Stubs shared by multiple integration test.
 */

import Ember from 'ember';

 const model = Ember.Object.create({
   id: 1,
   name: ''
 });

 const eq = Ember.Helper.helper(function(params) {
   if(params[0] === params[1]) {
     return true;
   }
   return false;
 });

const dateRangePicker = Ember.Helper.helper(function() {
  return '';
});

export { model, eq, dateRangePicker };
