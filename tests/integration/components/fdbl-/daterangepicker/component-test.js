import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fdbl-/daterangepicker', 'Integration | Component | fdbl /daterangepicker', {
  integration: true
});

test('it renders', function(assert) {

  this.set('model', Ember.Object.create({'p':{}}));

  this.render(hbs`{{fdbl-/daterangepicker model=model property='p'}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fdbl-/daterangepicker model=model property='p'}}
      template block text
    {{/fdbl-/daterangepicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
