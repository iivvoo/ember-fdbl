import Ember from 'ember';
import BaseComponent from '../base';
import layout from './template';

export default BaseComponent.extend({
    options: [],
    layout: layout,
    relations: false,
    translate: true,


    current: Ember.computed('model', 'property', function() {
        if(this.get('relations')) {
            return this.get(`model.${this.property}.id`);
        }

        return this.get(`model.${this.property}`);
    }),

    relation_aware_options: Ember.computed('options.[]', function() {
        // if we support relations return value id's in stead of the
        // actual values.
        if(!this.get("relations")) {
            return this.get("options");
        }
        let res = Ember.A();

        this.get("options").forEach((v, i) => {
            res.pushObject({value: v.value.get("id"), label:v.label});
        });
        return res;
    }),

    actions: {
        change() {
            let selection = this.$("select").val();
            let options = this.get("options");

            if(this.get("relations")) {
                for(let o of options) {
                    if(o.value.get("id") == selection) {
                        selection = o.value;
                        break;
                    }
                }
            }
            this.set(`model.${this.property}`, selection);
            if (this.get('selectionChange')) {
              this.get('selectionChange')(selection);
            }
        }
    }
});
