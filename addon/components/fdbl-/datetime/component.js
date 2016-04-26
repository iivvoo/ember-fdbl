import Ember from 'ember';
import BaseComponent from '../base';

export default BaseComponent.extend({
    value: null,

    saveValue: function(value) {
        /* value may be undefined if nothing entered. In that case,
           set the propery to undefined as well */
        this.set(`model.${this.property}`, value);
    },

    copyValue: Ember.on('didReceiveAttrs', function() {
        /* If no value is set, default to today and set it back immediately
           in order for validation to properly kick in */

        let current = this.get(`model.${this.property}`);
        this.set('value', current);
    })
});
