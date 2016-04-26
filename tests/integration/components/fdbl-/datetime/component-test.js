import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fdbl-/datetime', 'Integration | Component | fdbl /datetime', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/datetime}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fdbl-/datetime}}
      template block text
    {{/fdbl-/datetime}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
