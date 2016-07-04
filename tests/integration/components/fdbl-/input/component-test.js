import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import {
  model,
  eq
} from '../../../../utils';

moduleForComponent('fdbl-/input', 'Integration | Component | fdbl /input', {
  integration: true,
  beforeEach() {
    this.register('helper:eq', eq);

    this.set('model', model);
    this.set('model.name', 'John');
    this.set('property', 'name');
    this.set('label', 'name');
  }
});

test('No labelPosition', function(assert) {
  /**
   * When no parameter called labelPostion is given but one called
   * label is a label should appear on the left.
   */

  this.render(hbs`{{fdbl-/input model=model
                                property=property
                                label=label}}`);

  assert.equal(this.$('label').length, 1);

  assert.equal(this.$('div.form-group >:first-child').is('label'), true);
});

test('LabelPosition is left', function(assert) {
  /**
   * When a parameter called labelPostion with a value of 'left' is given and
   * one called label is also given a label should appear on the left.
   */

  this.set('labelPostition', 'left');

  this.render(hbs`{{fdbl-/input model=model
                                property=property
                                label=label
                                labelPostition=labelPostition}}`);

  assert.equal(this.$('label').length, 1);

  assert.equal(this.$('div.form-group >:first-child').is('label'), true);
});

test('LabelPosition is right', function(assert) {
  /**
   * When a parameter called labelPostion with a value of 'right' is given and
   * one called label is also given a label should appear on the right.
   */

  this.set('labelPostition', 'right');

  this.render(hbs`{{fdbl-/input model=model
                                property=property
                                label=label
                                labelPostition=labelPostition}}`);


  assert.equal(this.$('label').length, 1);

  assert.equal(this.$('div.form-group >:last-child').is('label'), true);
});
