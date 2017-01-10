import Ember from 'ember';
import layout from './template';
import BaseComponent from '../base';

export default BaseComponent.extend({
  layout: layout,

  trampoline: Ember.computed('model', 'property', function() {
        let property = this.get("property");

        if(property) {
            return Ember.Object.extend({
                value: Ember.computed.alias(`model.${property}`)
            }).create({model:this.get("model")});
        }
        return Ember.Object.create({});
  }),

  selected: Ember.computed.alias('trampoline.value'),

  onchange: function(v) {
    let property = this.get("property");

    this.set(`model.${property}`, v);
  }
});
