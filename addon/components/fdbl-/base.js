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
    validation: null,
    showValidations: false,
    didValidate: false,

    notValidating: Ember.computed.not('validation.isValidating').readOnly(),
    hasContent: Ember.computed.notEmpty('value').readOnly(),
    hasWarnings: Ember.computed.notEmpty('validation.warnings').readOnly(),
    isValid: Ember.computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
    shouldDisplayValidations: Ember.computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

    showErrorMessage: Ember.computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),

    inputClassProp: Ember.computed('controlClass', function() {
        return `form-control ${this.controlClass}`;
    }),

    init() {
      this._super(...arguments);
      let property = this.get('property');

      Ember.defineProperty(this, 'validation', Ember.computed.readOnly(`model.validations.attrs.${property}`));
      Ember.defineProperty(this, 'value', Ember.computed.alias(`model.${property}`));
    },

    willDestroy: function() {
        this._super();

        let key = `validations.attrs.${this.property}.isValid`;
        if(this.get('model')) {
            this.get('model').removeObserver(key, this, 'updateClass');
        }
    },

    updateClass: function() {
        let key = `model.validations.attrs.${this.property}.isValid`;
        let isValid = this.get(key);

        this.set('hasError', isValid === false);
    },

    focusOut() {
      this._super(...arguments);
      this.set('showValidations', true);
    }
});
