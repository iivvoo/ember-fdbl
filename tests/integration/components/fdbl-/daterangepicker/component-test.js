import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fdbl-/daterangepicker', 'Integration | Component | fdbl /daterangepicker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/daterangepicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fdbl-/daterangepicker}}
      template block text
    {{/fdbl-/daterangepicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
