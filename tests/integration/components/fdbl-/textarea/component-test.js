import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fdbl-/textarea', 'Integration | Component | fdbl /textarea', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fdbl-/textarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fdbl-/textarea}}
      template block text
    {{/fdbl-/textarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
