import Ember from 'ember';
import BaseComponent from '../base';

export default BaseComponent.extend({
    options: [],

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
