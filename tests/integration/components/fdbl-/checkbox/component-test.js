import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fdbl-/checkbox', 'Integration | Component | fdbl /checkbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fdbl-/checkbox}}
      template block text
    {{/fdbl-/checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
