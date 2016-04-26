import Ember from 'ember';
import BaseComponent from '../base';
import layout from './template';

export default BaseComponent.extend({
    options: [],
    layout: layout,

    current: Ember.computed('model', 'property', function() {
        return this.get(`model.${this.property}`);
    }),

    actions: {
        change() {
            let selection = this.$("select").val();
            this.set(`model.${this.property}`, selection);
            if (this.get('selectionChange')) {
              this.get('selectionChange')(selection);
            }
        }
    }
});
