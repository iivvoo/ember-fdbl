import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ["form-group"],
    classNameBindings: ['hasError'],
    type: 'text',
    label: '',
    placeholder: '',
    labelClass: 'col-sm-2',
    inputClass: 'col-sm-10',
    controlClass: '',
    hasError: false,

    inputClassProp: Ember.computed('controlClass', function() {
        return `form-control ${this.controlClass}`;
    }),

    initObserver: Ember.on('didReceiveAttrs', function() {
        let key = `validations.attrs.${this.property}.isValid`;
        this.get('model').addObserver(key, this, 'updateClass');
        this.updateClass(); // make sure it's initialized properly
    }),

    willDestroy: function() {
        this._super();

        let key = `validations.attrs.${this.property}.isValid`;
        this.get('model').removeObserver(key, this, 'updateClass');
    },

    updateClass: function() {
        let key = `model.validations.attrs.${this.property}.isValid`;
        let isValid = this.get(key);

        this.set('hasError', isValid === false);
    }
});
