import Ember from 'ember';
import BaseComponent from '../base';
import layout from './template';

export default BaseComponent.extend({
    options: [],
    emptyDefault: false,
    layout: layout,
    relations: false,
    translate: true,
    model: null,
    property: null,

    // https://spin.atomicobject.com/2015/08/03/ember-computed-properties/
    trampoline: Ember.computed('model', 'property', function() {
        let property = this.get("property");

        if(property) {
            if(this.get('relations')) {
                property = `${property}.id`;
            }

            return Ember.Object.extend({
                value: Ember.computed.alias(`model.${property}`)
            }).create({model:this.get("model")});
        }
        return Ember.Object.create({});
    }),

    current: Ember.computed.alias('trampoline.value'),


    relation_aware_options: Ember.computed('options.[]', function() {
        // if we support relations return value id's in stead of the
        // actual values.
        if(!this.get("relations")) {
            return this.get("options");
        }
        let res = Ember.A();

        this.get("options").forEach(v => {
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
                    if(o.value.get("id") === selection) {
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
